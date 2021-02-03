class Validator {
    constructor(args) {
        this._errors = [];
        this._args = args;
    }
    get hasErrors() {
        return !!this._errors.length;
    }
    logErrors() {
        if (this.hasErrors) {
            this._errors.forEach((error) => {
                console.error('\x1b[41m\x1b[37m%s\x1b[0m', error);
            });
            console.log('Arguments recieved:', this._args.export());
            throw new Error('There was a problem with your request; review logs above');
        }
    }
    validateCollectionResults() {
        console.log('--VALIDATING POSTMAN COLLECTIONS & ENVIRONMENTS');
        this._checkCollectionIds();
        this._checkEnvironments();
        this.logErrors();
    }
    validateArguments() {
        console.log('--VALIDATING ARGUMENTS');
        this._checkCollectionArgments();
        this._checkNameArgments();
        this._checkOpenApiArgments();
        this._checkApiArgments();
        this._checkCleanUpArgments();
        this.logErrors();
    }
    _checkCollectionArgments() {
        if (
            !this._args.collection_id &&
            !this._args.collection_file &&
            !this._args.collection_name &&
            !this._args.workspace_name
        ) {
            this._errors.push(
                'Please provide either the combination of: [--workspace-name (-wn) AND --collection-name (-cn)] OR --collection-id (-i) OR --collection-file (-f)'
            );
        }
    }
    _checkNameArgments() {
        if (this._args.collection_name && !this._args.workspace_name) {
            this._errors.push('Please provide workspace name when proivding collection name: --workspace-name (-wn)');
        }
        if (this._args.environment_name && !this._args.workspace_name) {
            this._errors.push('Please provide workspace name when proivding environment name: --workspace-name (-wn)');
        }
        if (
            (this._args.environment_name || this._args.workspace_name || this._args.collection_name) &&
            !this._args.api_key
        ) {
            this._errors.push(
                'Please provide --api-key (-k) if you are providing any name argument: --collection-name (-cn) OR --workspace-name (-wn) OR --environment-name (-en)'
            );
        }
    }
    _checkApiArgments() {
        if (this._args.collection_id && !this._args.api_key) {
            this._errors.push('Please provide --api-key (-k) if you are providing --collection-id (-i)');
        }
        if (this._args.push && !this._args.api_key) {
            this._errors.push('Please provide --api-key (-k) if you are providing --push (-p)');
        }
    }
    _checkCleanUpArgments() {
        if (this._args.clean && this._args.collection_file) {
            this._errors.push('Can not clean up your own file; please remove --clean-up (-c)');
        }
        if (this._args.clean && !this._args.push) {
            this._errors.push('Can not clean a file not being pushed remotely; please remove --clean-up (-c)');
        }
    }
    _checkOpenApiArgments() {
        if (!this._args.docs) {
            this._errors.push('Please provide one of the following arguments: --doc-path (-d)');
        }
    }
    _checkCollectionIds() {
        if (!this._args.collection_id && !this._args.collection_file) {
            this._errors.push(
                'Your collection could not be found; please ensure spelling and casing of --workspace-name and --collection-name'
            );
        }
    }
    _checkEnvironments() {
        if (!this._args.environment_id && this._args.run_newman) {
            this._errors.push(
                'Your environment could not be found; please ensure spelling and casing of --environment-name'
            );
        }
    }
}

module.exports = Validator;
