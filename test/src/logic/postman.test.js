const {assert} = require('chai');

const Postman = require('../../../src/logic/postman');
const Args = require('../../../src/logic/args');
const Documentor = require('../../../src/logic/documentor');
const mockArguments = require('../../mock/arguments');
const mockCollection = require('../../mock/collection');

describe('Test Postman Class', () => {
    describe('test basic class', () => {
        const args = new Args(mockArguments.getFullArguments());
        const postman = new Postman(args);
        it('has arg object', () => {
            assert.equal(true, '_args' in postman);
            assert.equal(true, '_collection' in postman);
        });
    });
    describe('test save/delete local updated collection', () => {
        it('able to save file', async () => {
            const args = new Args(mockArguments.getSaveCollectionArguments());
            const postman = new Postman(args);
            const collection = await mockCollection.get();
            postman._collection = collection;
            await postman.saveUpdatedCollection();
            assert.deepEqual(collection, postman._collection);
        });
        it('able to delete file', async () => {
            const args = new Args(mockArguments.getSaveCollectionArguments());
            const postman = new Postman(args);
            const collection = await mockCollection.get();
            postman._collection = collection;
            await postman.saveUpdatedCollection();
            assert.deepEqual(collection, postman._collection);
            await postman.removeUpdatedCollection();
            assert.equal(null, postman._collection);
        });
    });
    describe('test save/delete local updated collection', () => {
        it('able to save file', async () => {
            const args = new Args(mockArguments.getImportOpenApiArgument());
            const postman = new Postman(args);
            const documentor = new Documentor(args);
            const collection = await mockCollection.get();
            await documentor.importSchema();
            postman._collection = collection;
            postman.mapCollectionToSchema(documentor.mapping);
            assert.deepEqual(mockCollection.updated(), postman._collection);
        });
    });
});
