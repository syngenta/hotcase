const {assert} = require('chai');

const Args = require('../../../src/logic/args');
const Validator = require('../../../src/logic/validator');
const mockArguments = require('../../mock/arguments');

describe('Test Validator Class', () => {
    describe('test basic class', () => {
        const args = new Args(mockArguments.getFullArguments());
        const validator = new Validator(args);
        it('has arg object', () => {
            assert.equal(true, '_args' in validator);
        });
        it('has errors array', () => {
            assert.equal(true, '_errors' in validator);
            assert.equal(0, validator.hasErrors);
        });
    });
    describe('test validation rules', () => {
        it('arguments pass with api flags', () => {
            const args = new Args(mockArguments.getPassingApiArguments());
            const validator = new Validator(args);
            validator.validate();
            assert.equal(false, validator.hasErrors);
        });
        it('arguments fail with collection id flag', () => {
            const args = new Args(mockArguments.getFailingApiArgumentsId());
            const validator = new Validator(args);
            try {
                validator.validate();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, 'Error: There was a problem with your request; review logs above');
            }
        });
        it('arguments fail with push flag', () => {
            const args = new Args(mockArguments.getFailingApiArgumentsPush());
            const validator = new Validator(args);
            try {
                validator.validate();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, 'Error: There was a problem with your request; review logs above');
            }
        });
        it('arguments pass with local flags only', () => {
            const args = new Args(mockArguments.getPassingLocalArguments());
            const validator = new Validator(args);
            validator.validate();
            assert.equal(false, validator.hasErrors);
        });
        it('arguments fail with clean up & file flag', () => {
            const args = new Args(mockArguments.getFailingLocalArgumentsCleanUp());
            const validator = new Validator(args);
            try {
                validator.validate();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, 'Error: There was a problem with your request; review logs above');
            }
        });
        it('arguments fail with clean up & file flag', () => {
            const args = new Args(mockArguments.getFailingPushArgumentsCleanUp());
            const validator = new Validator(args);
            try {
                validator.validate();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, 'Error: There was a problem with your request; review logs above');
            }
        });
    });
});
