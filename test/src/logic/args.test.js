const {assert} = require('chai');
const Args = require('../../../src/logic/args');
const mockArguments = require('../../mock/arguments');

describe('Test Args Class', () => {
    describe('full arguments work', () => {
        const args = new Args(mockArguments.getFullArguments());
        it('has _args object', () => {
            assert.equal(true, '_args' in args);
            assert.deepEqual(args._args, {
                bail: true,
                collection_name: 'some collection name',
                environment_id: 'environment id',
                environment_name: 'environment name',
                run_newman: true,
                workspace_id: 'some workspace id',
                workspace_name: 'some workspace',
                collection_id: '1111-222-333',
                collection_file: '/file/test/file',
                docs: 'docs/test/dock',
                proxy: undefined,
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
        it('has collection_name', () => {
            assert.equal(args.collection_name, mockArguments.getFullArguments()['collection-name']);
        });
        it('has workspace_id', () => {
            assert.equal(args.workspace_id, mockArguments.getFullArguments()['workspace-id']);
        });
        it('has workspace_name', () => {
            assert.equal(args.workspace_name, mockArguments.getFullArguments()['workspace-name']);
        });
        it('has environment_id', () => {
            assert.equal(args.environment_id, mockArguments.getFullArguments()['environment-id']);
        });
        it('has environment_name', () => {
            assert.equal(args.environment_name, mockArguments.getFullArguments()['environment-name']);
        });
        it('has run_newman', () => {
            assert.equal(args.run_newman, mockArguments.getFullArguments()['run-newman']);
        });
        it('has bail', () => {
            assert.equal(args.bail, mockArguments.getFullArguments()['bail']);
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
                bail: true,
                collection_name: 'some collection name',
                environment_id: 'environment id',
                environment_name: 'environment name',
                run_newman: true,
                workspace_id: 'some workspace id',
                workspace_name: 'some workspace',
                collection_id: '1111-222-333',
                collection_file: '/file/test/file',
                docs: 'docs/test/dock',
                api_key: 'some-key',
                proxy: undefined,
                push: true,
                clean: true
            });
        });
        it('has collection_id', () => {
            assert.equal(args.collection_id, mockArguments.getShortArguments().ci);
        });
        it('has collection_file', () => {
            assert.equal(args.collection_file, mockArguments.getShortArguments().cf);
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
        it('has collection_name', () => {
            assert.equal(args.collection_name, mockArguments.getShortArguments().cn);
        });
        it('has workspace_id', () => {
            assert.equal(args.workspace_id, mockArguments.getShortArguments().wi);
        });
        it('has workspace_name', () => {
            assert.equal(args.workspace_name, mockArguments.getShortArguments().wn);
        });
        it('has environment_id', () => {
            assert.equal(args.environment_id, mockArguments.getShortArguments().ei);
        });
        it('has environment_name', () => {
            assert.equal(args.environment_name, mockArguments.getShortArguments().en);
        });
        it('has run_newman', () => {
            assert.equal(args.run_newman, mockArguments.getShortArguments().rn);
        });
        it('has bail', () => {
            assert.equal(args.bail, mockArguments.getShortArguments().b);
        });
    });
    describe('test mutable attributes', () => {
        const args = new Args(mockArguments.getShortArguments());
        it('collection_id is mutable', () => {
            assert.equal(args.collection_id, mockArguments.getShortArguments().ci);
            args.collection_id = 'some-id';
            assert.equal(args.collection_id, 'some-id');
        });
        it('collection_file is mutable', () => {
            assert.equal(args.collection_file, mockArguments.getShortArguments().cf);
            args.collection_file = 'some-file';
            assert.equal(args.collection_file, 'some-file');
        });
        it('collection_name is mutable', () => {
            assert.equal(args.collection_name, mockArguments.getShortArguments().cn);
            args.collection_name = 'some-collection';
            assert.equal(args.collection_name, 'some-collection');
        });
        it('workspace_name is mutable', () => {
            assert.equal(args.workspace_name, mockArguments.getShortArguments().wn);
            args.workspace_name = 'some-workspace';
            assert.equal(args.workspace_name, 'some-workspace');
        });
        it('workspace_id is mutable', () => {
            assert.equal(args.workspace_id, mockArguments.getShortArguments().wi);
            args.workspace_id = 'some-workspace-id';
            assert.equal(args.workspace_id, 'some-workspace-id');
        });
        it('environment_name is mutable', () => {
            assert.equal(args.environment_name, mockArguments.getShortArguments().en);
            args.environment_name = 'some-environment';
            assert.equal(args.environment_name, 'some-environment');
        });
        it('environment_id is mutable', () => {
            assert.equal(args.environment_id, mockArguments.getShortArguments().ei);
            args.environment_id = 'some-environment-id';
            assert.equal(args.environment_id, 'some-environment-id');
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
        it('push is not mutable', () => {
            assert.equal(args.push, mockArguments.getShortArguments().p);
            args.push = 'some-push';
            assert.notEqual(args.push, 'some-push');
        });
        it('clean is not mutable', () => {
            assert.equal(args.clean, mockArguments.getShortArguments().c);
            args.clean = 'some-clean';
            assert.notEqual(args.clean, 'some-clean');
        });
        it('bail is not mutable', () => {
            assert.equal(args.bail, mockArguments.getShortArguments().b);
            args.bail = 'some-clean';
            assert.notEqual(args.bail, 'some-clean');
        });
        it('run_newman is not mutable', () => {
            assert.equal(args.run_newman, mockArguments.getShortArguments().rn);
            args.run_newman = 'some-clean';
            assert.notEqual(args.run_newman, 'some-clean');
        });
    });
});
