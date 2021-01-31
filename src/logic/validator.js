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
            throw new Error('There was a problem with your request; review logs above');
        }
    }
    validate() {
        console.log('--VALIDATING ARGUMENTS');
        this._checkCollectionArgments();
        this._checkOpenApiArgments();
        this._checkApiArgments();
        this._checkCleanUpArgments();
        this.logErrors();
    }
    _checkCollectionArgments() {
        if (!this._args.collection_id && !this._args.collection_file) {
            this._errors.push(
                'Please provide one of the following arguments: --collection-id (-i for short) OR --collection-file (-f for short)'
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
            this._errors.push('Please provide one of the following arguments: --doc-path (-d for short)');
        }
    }
}

module.exports = Validator;
