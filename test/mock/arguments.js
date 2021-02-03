exports.getFullArguments = () => {
    return {
        'collection-id': '1111-222-333',
        'collection-file': '/file/test/file',
        'doc-path': 'docs/test/dock',
        'api-key': 'some-key',
        'collection-name': 'some collection name',
        'workspace-name': 'some workspace',
        'workspace-id': 'some workspace id',
        'environment-name': 'environment name',
        'environment-id': 'environment id',
        push: true,
        bail: true,
        'run-newman': true,
        'clean-up': true
    };
};

exports.getShortArguments = () => {
    return {
        ci: '1111-222-333',
        cf: '/file/test/file',
        cn: 'some collection name',
        wn: 'some workspace',
        wi: 'some workspace id',
        en: 'environment name',
        ei: 'environment id',
        b: true,
        d: 'docs/test/dock',
        k: 'some-key',
        p: true,
        c: true,
        rn: true
    };
};

exports.getImportOpenApiArgument = () => {
    return {
        'doc-path': 'test/mock/files/openapi.yml'
    };
};

exports.getImportSwaggerArgument = () => {
    return {
        'doc-path': 'test/mock/files/swagger.yml'
    };
};

exports.getPassingApiArguments = () => {
    return {
        'collection-id': '1111-222-333',
        'doc-path': 'docs/test/dock',
        'api-key': 'some-key',
        push: true,
        'clean-up': true
    };
};

exports.getFailingRequiredArguments = () => {
    return {};
};

exports.getFailingNameArguments = () => {
    return {
        cn: 'some space',
        en: 'some space'
    };
};

exports.getFailingApiArgumentsId = () => {
    return {
        'collection-id': '1111-222-333',
        'doc-path': 'docs/test/dock'
    };
};

exports.getFailingApiArgumentsPush = () => {
    return {
        'collection-file': '/file/test/file',
        'doc-path': 'docs/test/dock',
        push: true
    };
};

exports.getPassingLocalArguments = () => {
    return {
        'collection-file': '/file/test/file',
        'doc-path': 'docs/test/dock'
    };
};

exports.getFailingLocalArgumentsCleanUp = () => {
    return {
        'collection-file': '/file/test/file',
        'doc-path': 'docs/test/dock',
        'clean-up': true
    };
};

exports.getFailingPushArgumentsCleanUp = () => {
    return {
        'collection-id': '1111-222-333',
        'doc-path': 'docs/test/dock',
        'api-key': 'some-key',
        'clean-up': true
    };
};

exports.getSaveCollectionArguments = () => {
    return {
        'collection-id': '1111-222-333',
        'doc-path': 'docs/test/dock',
        'collection-file': 'unit-test.postman.json',
        'api-key': 'some-key',
        push: true,
        'clean-up': true
    };
};

exports.getWorkingArguments = () => {
    return {
        'collection-id': '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3',
        'collection-file': null,
        'collection-name': 'Postman Galaxy Demo',
        'workspace-name': 'Postman Galaxy',
        'environment-name': 'postman galaxy demo',
        'workspace-id': '12ab5979-edc0-4f6c-bc63-8c461de4005e',
        'environment-id': '8869631-cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96',
        'docs-path': 'test/mock/files/openapi.yml',
        'api-key': 'redacted',
        push: true,
        clean: true,
        bail: true,
        'run-newman': true
    };
};

exports.getWorkingArgumentsWithFile = () => {
    return {
        'collection-id': '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3',
        'collection-file': '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3.postman_collection.json',
        'collection-name': 'Postman Galaxy Demo',
        'workspace-name': 'Postman Galaxy',
        'environment-name': 'postman galaxy demo',
        'workspace-id': '12ab5979-edc0-4f6c-bc63-8c461de4005e',
        'environment-id': '8869631-cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96',
        'docs-path': 'test/mock/files/openapi.yml',
        'api-key': 'redacted',
        push: true,
        clean: true,
        bail: true,
        'run-newman': true
    };
};

exports.getFailingArgumentsWithFile = () => {
    return {
        'collection-file': '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3.postman_collection.json',
        'collection-name': 'Postman Galaxy Demo',
        'workspace-name': 'Postman Galaxy',
        'environment-name': 'postman galaxy demo',
        'workspace-id': '12ab5979-edc0-4f6c-bc63-8c461de4005e',
        'docs-path': 'test/mock/files/openapi.yml',
        'api-key': 'redacted',
        push: true,
        clean: true,
        bail: true,
        'run-newman': true
    };
};
