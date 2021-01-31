const {assert} = require('chai');
const Args = require('../../../src/logic/args');
const mockArguments = require('../../mock/arguments');

describe('Test Args Class', () => {
    describe('full arguments work', () => {
        const args = new Args(mockArguments.getFullArguments());
        it('has _args object', () => {
            assert.equal(true, '_args' in args);
            assert.deepEqual(args._args, {
                collection_id: '1111-222-333',
                collection_file: '/file/test/file',
                docs: 'docs/test/dock',
                api_key: 'some-key',
                push: true,
                clean: true
            });
        });
        it('has collection_id', () => {
            assert.equal(args.collection_id, mockArguments.getFullArguments()['collection-id']);
        });
        it('has collection_file', () => {
            assert.equal(args.collection_file, mockArguments.getFullArguments()['collection-file']);
        });
        it('has docs', () => {
            assert.equal(args.docs, mockArguments.getFullArguments()['doc-path']);
        });
        it('has api_key', () => {
            assert.equal(args.api_key, mockArguments.getFullArguments()['api-key']);
        });
        it('has push', () => {
            assert.equal(args.push, mockArguments.getFullArguments().push);
        });
        it('has clean up', () => {
            assert.equal(args.clean, mockArguments.getFullArguments()['clean-up']);
        });
    });
    describe('short arguments work', () => {
        const args = new Args(mockArguments.getShortArguments());
        it('has _args object', () => {
            assert.equal(true, '_args' in args);
            assert.deepEqual(args._args, {
                collection_id: '1111-222-333',
                collection_file: '/file/test/file',
                docs: 'docs/test/dock',
                api_key: 'some-key',
                push: true,
                clean: true
            });
        });
        it('has collection_id', () => {
            assert.equal(args.collection_id, mockArguments.getShortArguments().i);
        });
        it('has collection_file', () => {
            assert.equal(args.collection_file, mockArguments.getShortArguments().f);
        });
        it('has docs', () => {
            assert.equal(args.docs, mockArguments.getShortArguments().d);
        });
        it('has api_key', () => {
            assert.equal(args.api_key, mockArguments.getShortArguments().k);
        });
        it('has push', () => {
            assert.equal(args.push, mockArguments.getShortArguments().p);
        });
        it('has clean up', () => {
            assert.equal(args.clean, mockArguments.getShortArguments().c);
        });
    });
    describe('test mutable attributes', () => {
        const args = new Args(mockArguments.getShortArguments());
        it('collection_id is mutable', () => {
            assert.equal(args.collection_id, mockArguments.getShortArguments().i);
            args.collection_id = 'some-id';
            assert.equal(args.collection_id, 'some-id');
        });
        it('collection_file is mutable', () => {
            assert.equal(args.collection_file, mockArguments.getShortArguments().f);
            args.collection_file = 'some-file';
            assert.equal(args.collection_file, 'some-file');
        });
        it('docs is not mutable', () => {
            assert.equal(args.docs, mockArguments.getShortArguments().d);
            args.docs = 'some-docs';
            assert.notEqual(args.docs, 'some-docs');
        });
        it('api key is not mutable', () => {
            assert.equal(args.api_key, mockArguments.getShortArguments().k);
            args.api_key = 'some-api_key';
            assert.notEqual(args.api_key, 'some-api_key');
        });
        it('api key is not mutable', () => {
            assert.equal(args.push, mockArguments.getShortArguments().p);
            args.push = 'some-push';
            assert.notEqual(args.push, 'some-push');
        });
        it('api key is not mutable', () => {
            assert.equal(args.clean, mockArguments.getShortArguments().c);
            args.clean = 'some-clean';
            assert.notEqual(args.clean, 'some-clean');
        });
    });
});
