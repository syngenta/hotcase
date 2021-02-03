const postmanApi = require('../model/postman-api');
const fileSystem = require('../model/file-system');
const child_process = require('child_process');

class Postman {
    constructor(args) {
        this._args = args;
        this._collection = null;
    }
    _generateCommand() {
        const collection_url = `https://api.getpostman.com/collections/${this._args.collection_id}?apikey=${this._args.api_key}`;
        const environment_url = `https://api.getpostman.com/environments/${this._args.environment_id}?apikey=${this._args.api_key}`;
        const command = this._args.bail
            ? `${collection_url} -e ${environment_url} --bail`
            : `${collection_url} -e ${environment_url}`;
        return command;
    }
    async runNewman() {
        if (this._args.run_newman) {
            console.log('--RUNNING NEWMAN');
            console.log(`--USING BAIL: ${this._args.bail}`);
            const command = this._generateCommand();
            try {
                await child_process.execSync(`newman run ${command}`, {stdio: 'inherit'});
            } catch (error) {}
        }
    }
    async findWorkspace() {
        if (this._args.workspace_name) {
            console.log('--FINDING WORKSPACE');
            const workspaces = await postmanApi.getWorkspaces(this._args.api_key);
            const workspace = workspaces.find((ws) => this._args.workspace_name === ws.name);
            this._args.workspace_id = workspace.id;
        }
    }
    async findCollection() {
        if (this._args.workspace_id && this._args.collection_name) {
            console.log('--FINDING COLLECTION');
            const workspace_1 = await postmanApi.getSingleWorkspace(this._args.api_key, this._args.workspace_id);
            const collection = workspace_1.collections.find((cl) => this._args.collection_name === cl.name);
            this._args.collection_id = collection.uid;
        }
    }
    async findEnvironment() {
        if (this._args.workspace_id && this._args.environment_name) {
            console.log('--FINDING ENVIRONMENT');
            const workspace_2 = await postmanApi.getSingleWorkspace(this._args.api_key, this._args.workspace_id);
            const environment = workspace_2.environments.find((env) => this._args.environment_name === env.name);
            this._args.environment_id = environment.uid;
        }
    }
    async downloadCollection() {
        if (!this._args.collection_file) {
            console.log('--PULLING COLLECTION');
            this._collection = await postmanApi.getCollection(this._args.api_key, this._args.collection_id);
            this._args.collection_file = `${this._args.collection_id}.postman_collection.json`;
            await fileSystem.saveJSONFile(this._args.collection_file, this._collection);
        } else {
            console.log('--READING COLLECTION FILE');
            this._collection = await fileSystem.openJSONFile(this._args.collection_file);
        }
    }
    async saveUpdatedCollection() {
        console.log('--SAVING UPDATED COLLECTION');
        await fileSystem.saveJSONFile(this._args.collection_file, this._collection);
    }
    async removeUpdatedCollection() {
        if (this._args.clean) {
            console.log('--CLEANING UP UPDATED COLLECTION');
            await fileSystem.deleteFile(this._args.collection_file);
            this._collection = null;
        }
    }
    async pushCollection() {
        if (this._args.push) {
            console.log('--PUSHING UPDATED COLLECTION');
            await postmanApi.updateCollection(this._args.api_key, this._args.collection_id, this._collection);
        }
    }
    mapCollectionToSchema(mapping) {
        console.log('--MAPPING COLLECTION TO SCHEMA');
        for (const item of this._collection.item) {
            const path = this._getPathFromCollection(item);
            if (mapping[path]) {
                this._writeTestsToCollection(item, mapping[path], path);
            }
        }
    }
    _getPathFromCollection(item) {
        const pathJoin = item.request.url.path.join('/');
        const method = item.request.method.toLowerCase();
        const path = `${method}:/${pathJoin}`;
        return path;
    }
    _writeTestsToCollection(item, schema, path) {
        item.event = !item.event ? [this._getEmptyTestEvent()] : item.event;
        for (const event of item.event) {
            if (event.listen === 'test') {
                const codes = [];
                const {exec} = event.script;
                for (const code in schema) {
                    this._writeSchemaTest(exec, schema, code, path);
                    codes.push(parseInt(code, 10));
                }
                this._writeAvailableCodesTest(exec, codes);
            }
        }
    }
    _getEmptyTestEvent() {
        return {
            listen: 'test',
            script: {
                type: 'text/javascript',
                exec: []
            }
        };
    }
    _writeSchemaTest(exec, schema, code, path) {
        const test_case = `pm.test('<PDT TEST> ${path} [code: ${code}] schema is valid', function () {`;
        this._removeExistingPDTTest(exec, test_case, 8);
        exec.push(test_case);
        exec.push(`    if (pm.response.code !== ${code}){`);
        exec.push(`        return;`);
        exec.push(`    }`);
        exec.push(`    const schema = ${JSON.stringify(schema[code])};`);
        exec.push(`    const response = pm.response.json();`);
        exec.push(`    pm.expect(tv4.validate(response, schema)).to.be.true;`);
        exec.push('});');
    }
    _writeAvailableCodesTest(exec, codes) {
        const test_case = `pm.test('<PDT TEST>: response code is among available codes', function () {`;
        this._removeExistingPDTTest(exec, test_case, 4);
        exec.push(test_case);
        exec.push(`    const codes = ${JSON.stringify(codes)};`);
        exec.push(`    pm.expect(codes.includes(pm.response.code)).to.be.true;`);
        exec.push('});');
    }
    _removeExistingPDTTest(exec, test_case, num_lines) {
        if (exec.includes(test_case)) {
            let starting_point = exec.indexOf(test_case);
            exec.splice(starting_point, num_lines);
        }
    }
}

module.exports = Postman;
