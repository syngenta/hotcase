const {assert} = require('chai');
const sinon = require('sinon');
const child_process = require('child_process');

const Postman = require('../../../src/logic/postman');
const Args = require('../../../src/logic/args');
const Documentor = require('../../../src/logic/documentor');
const postmanApi = require('../../../src/model/postman-api');
const fileSystem = require('../../../src/model/file-system');

const mockArguments = require('../../mock/arguments');
const mockCollection = require('../../mock/collection');
const mockApi = require('../../mock/postman-api');

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
    describe('test map updated collection to documentation', () => {
        it('able to map documentation to colleciton', async () => {
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
    describe('test exec class', () => {
        before(() => {
            sinon.stub(child_process, 'execSync').returns();
        });
        it('test command generator', () => {
            const args = new Args(mockArguments.getWorkingArguments());
            const postman = new Postman(args);
            const command = postman._generateCommand();
            assert.equal(
                command,
                'https://api.getpostman.com/collections/8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3?apikey=redacted -e https://api.getpostman.com/environments/8869631-cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96?apikey=redacted --bail'
            );
        });
        it('test run newman', async () => {
            const args = new Args(mockArguments.getWorkingArguments());
            const postman = new Postman(args);
            await postman.runNewman();
        });
    });
    describe('test postman api function', () => {
        before(() => {
            sinon.stub(postmanApi, 'getWorkspaces').returns(mockApi.getWorkspaces());
            sinon.stub(postmanApi, 'getSingleWorkspace').returns(mockApi.getWorkspace());
            sinon.stub(postmanApi, 'getCollection').returns(mockApi.getCollection());
            sinon.stub(postmanApi, 'updateCollection').returns();
            sinon.stub(fileSystem, 'saveJSONFile').returns();
            sinon.stub(fileSystem, 'openJSONFile').returns(mockApi.getCollection());
        });
        it('test find workspaces', async () => {
            const args = new Args(mockArguments.getWorkingArguments());
            const postman = new Postman(args);
            await postman.findWorkspace();
            assert.equal(args.workspace_id, '12ab5979-edc0-4f6c-bc63-8c461de4005e');
        });
        it('test find collection', async () => {
            const args = new Args(mockArguments.getWorkingArguments());
            const postman = new Postman(args);
            await postman.findCollection();
            assert.equal(args.collection_id, '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3');
        });
        it('test find environment', async () => {
            const args = new Args(mockArguments.getWorkingArguments());
            const postman = new Postman(args);
            await postman.findEnvironment();
            assert.equal(args.environment_id, '8869631-cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96');
        });
        it('test download collection: pull collection', async () => {
            const args = new Args(mockArguments.getWorkingArguments());
            const postman = new Postman(args);
            await postman.downloadCollection();
            assert.deepEqual(postman._collection, mockApi.getCollection());
        });
        it('test download collection: read local collection', async () => {
            const args = new Args(mockArguments.getWorkingArgumentsWithFile());
            const postman = new Postman(args);
            await postman.downloadCollection();
            assert.deepEqual(postman._collection, mockApi.getCollection());
        });
        it('test push collection', async () => {
            const args = new Args(mockArguments.getWorkingArgumentsWithFile());
            const postman = new Postman(args);
            await postman.pushCollection();
        });
    });
});
