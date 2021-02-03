const {assert} = require('chai');

const Args = require('../../../src/logic/args');
const Validator = require('../../../src/logic/validator');
const mockArguments = require('../../mock/arguments');

describe('Test Validator Class', () => {
    before(() => {
        this._error_message = 'Error: There was a problem with your request; review logs above';
    });
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
            validator.validateArguments();
            assert.equal(false, validator.hasErrors);
        });
        it('arguments fail with no required flags', () => {
            const args = new Args(mockArguments.getFailingRequiredArguments());
            const validator = new Validator(args);
            try {
                validator.validateArguments();
            } catch (error) {
                assert.equal(error, this._error_message);
                assert.equal(true, validator.hasErrors);
            }
        });
        it('arguments fail with wrong name flags', () => {
            const args = new Args(mockArguments.getFailingNameArguments());
            const validator = new Validator(args);
            try {
                validator.validateArguments();
            } catch (error) {
                assert.equal(error, this._error_message);
                assert.equal(true, validator.hasErrors);
            }
        });
        it('arguments fail without collection id flag', () => {
            const args = new Args(mockArguments.getFailingApiArgumentsId());
            const validator = new Validator(args);
            try {
                validator.validateArguments();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, this._error_message);
            }
        });
        it('arguments fail with push flag', () => {
            const args = new Args(mockArguments.getFailingApiArgumentsPush());
            const validator = new Validator(args);
            try {
                validator.validateArguments();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, this._error_message);
            }
        });
        it('arguments pass with local flags only', () => {
            const args = new Args(mockArguments.getPassingLocalArguments());
            const validator = new Validator(args);
            validator.validateArguments();
            assert.equal(false, validator.hasErrors);
        });
        it('arguments fail with clean up & file flag', () => {
            const args = new Args(mockArguments.getFailingLocalArgumentsCleanUp());
            const validator = new Validator(args);
            try {
                validator.validateArguments();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, this._error_message);
            }
        });
        it('arguments fail with clean up & file flag', () => {
            const args = new Args(mockArguments.getFailingPushArgumentsCleanUp());
            const validator = new Validator(args);
            try {
                validator.validateArguments();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, this._error_message);
            }
        });
    });
    describe('test validation postman ids', () => {
        it('arguments pass with correct ids', () => {
            const args = new Args(mockArguments.getWorkingArgumentsWithFile());
            const validator = new Validator(args);
            validator.validateCollectionResults();
            assert.equal(false, validator.hasErrors);
        });
        it('arguments fail with correct ids', () => {
            const args = new Args(mockArguments.getFailingArgumentsWithFile());
            const validator = new Validator(args);
            try {
                validator.validateCollectionResults();
            } catch (error) {
                assert.equal(true, validator.hasErrors);
                assert.equal(error, this._error_message);
            }
        });
    });
});
