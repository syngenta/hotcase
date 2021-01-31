const {assert} = require('chai');

const Args = require('../../../src/logic/args');
const Documentor = require('../../../src/logic/documentor');
const mockArguments = require('../../mock/arguments');
const mockMapping = require('../../mock/document-mapping');

describe('Test Documentor Class', () => {
    describe('test basic class', () => {
        const args = new Args(mockArguments.getFullArguments());
        const documentor = new Documentor(args);
        it('has arg object', () => {
            assert.equal(true, '_args' in documentor);
            assert.equal(true, documentor._args instanceof Args);
        });
    });
    describe('test import', () => {
        it('import openapi schema works', async () => {
            const args = new Args(mockArguments.getImportOpenApiArgument());
            const documentor = new Documentor(args);
            await documentor.importSchema();
            assert.deepEqual(documentor.mapping, mockMapping.getMapping());
        });
        it('import swagger schema works', async () => {
            const args = new Args(mockArguments.getImportSwaggerArgument());
            const documentor = new Documentor(args);
            await documentor.importSchema();
            assert.deepEqual(documentor.mapping, mockMapping.getMapping());
        });
    });
});
