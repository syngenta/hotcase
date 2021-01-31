class Args {
    constructor(args) {
        this._args = {
            collection_id: args['collection-id'] || args.i,
            collection_file: args['collection-file'] || args.f,
            docs: args['doc-path'] || args.d,
            api_key: args['api-key'] || args.k,
            push: args['push'] || args.p,
            clean: args['clean-up'] || args.c
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
    get docs() {
        return this._args.docs;
    }
    get api_key() {
        return this._args.api_key;
    }
    get push() {
        return this._args.push;
    }
    get clean() {
        return this._args.clean;
    }
}

module.exports = Args;
