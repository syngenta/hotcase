const RefParser = require('json-schema-ref-parser');

const fileSystem = require('../model/file-system');

class Documentor {
    constructor(args) {
        this._args = args;
        this._schema = {};
        this._mapping = {};
    }
    get mapping() {
        return this._mapping;
    }
    async importSchema() {
        console.log('--READING SCHEMA FILE');
        const schema = await fileSystem.loadYaml(this._args.docs);
        await this._dereferenceApiDoc(schema);
        this._openapi = this._schema['openapi'] ? true : false;
        this._mapPathSchemas();
    }
    async _dereferenceApiDoc(schema) {
        this._schema = await RefParser.dereference(schema);
    }
    _mapPathSchemas() {
        for (const path in this._schema.paths) {
            for (const method in this._schema.paths[path]) {
                const mapping_key = `${method}:${path}`;
                this._mapping[mapping_key] = this._mapping[mapping_key] ? this._mapping[mapping_key] : {};
                for (const code in this._schema.paths[path][method].responses) {
                    const {content} = this._schema.paths[path][method].responses[code];
                    if (this._openapi && content) {
                        const {'application/json': app_json} = content;
                        this._mapping[mapping_key][code] = app_json.schema;
                    } else {
                        const {schema} = this._schema.paths[path][method].responses[code];
                        this._mapping[mapping_key][code] = schema;
                    }
                }
            }
        }
    }
}

module.exports = Documentor;
