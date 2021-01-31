exports.getFullArguments = () => {
    return {
        'collection-id': '1111-222-333',
        'collection-file': '/file/test/file',
        'doc-path': 'docs/test/dock',
        'api-key': 'some-key',
        push: true,
        'clean-up': true
    };
};

exports.getShortArguments = () => {
    return {
        i: '1111-222-333',
        f: '/file/test/file',
        d: 'docs/test/dock',
        k: 'some-key',
        p: true,
        c: true
    };
};

exports.getImportOpenApiArgument = () => {
    return {
        'doc-path': 'test/mock/openapi.yml'
    };
};

exports.getImportSwaggerArgument = () => {
    return {
        'doc-path': 'test/mock/swagger.yml'
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
