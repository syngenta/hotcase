class Args {
    constructor(args) {
        this._args = {
            collection_id: args['collection-id'] || args.ci,
            collection_file: args['collection-file'] || args.cf,
            collection_name: args['collection-name'] || args.cn,
            workspace_name: args['workspace-name'] || args.wn,
            environment_name: args['environment-name'] || args.en,
            workspace_id: args['workspace-id'] || args.wi,
            environment_id: args['environment-id'] || args.ei,
            docs: args['doc-path'] || args.d,
            api_key: args['api-key'] || args.k,
            push: args['push'] || args.p,
            clean: args['clean-up'] || args.c,
            bail: args['bail'] || args.b,
            run_newman: args['run-newman'] || args.rn,
            proxy: args['proxy-server'] || args.ps
        };
    }
    get collection_id() {
        return this._args.collection_id;
    }
    set collection_id(collection_id) {
        this._args.collection_id = collection_id;
    }
    get collection_file() {
        return this._args.collection_file;
    }
    set collection_file(collection_file) {
        this._args.collection_file = collection_file;
    }
    get collection_name() {
        return this._args.collection_name;
    }
    set collection_name(collection_name) {
        this._args.collection_name = collection_name;
    }
    get workspace_name() {
        return this._args.workspace_name;
    }
    set workspace_name(workspace_name) {
        this._args.workspace_name = workspace_name;
    }
    get workspace_id() {
        return this._args.workspace_id;
    }
    set workspace_id(workspace_id) {
        this._args.workspace_id = workspace_id;
    }
    get environment_name() {
        return this._args.environment_name;
    }
    set environment_name(environment_name) {
        this._args.environment_name = environment_name;
    }
    get environment_id() {
        return this._args.environment_id;
    }
    set environment_id(environment_id) {
        this._args.environment_id = environment_id;
    }
    get bail() {
        return Boolean(this._args.bail);
    }
    get run_newman() {
        return Boolean(this._args.run_newman);
    }
    get proxy() {
        return this._args.proxy;
    }
    set proxy(proxy) {
        this._args.proxy = proxy;
    }
    get docs() {
        return this._args.docs;
    }
    get api_key() {
        return this._args.api_key;
    }
    get push() {
        return Boolean(this._args.push);
    }
    get clean() {
        return Boolean(this._args.clean);
    }
    export() {
        const result = {};
        const properties = Object.getOwnPropertyNames(Args.prototype);
        for (const prop of properties) {
            if (typeof this[prop] !== 'function') {
                result[prop] = prop !== 'api_key' ? this[prop] : 'redacted';
            }
        }
        return result;
    }
}

module.exports = Args;
