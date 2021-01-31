const postmanApi = require('../model/postman-api');
const fileSystem = require('../model/file-system');

class Postman {
    constructor(args) {
        this._args = args;
        this._collection = null;
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
