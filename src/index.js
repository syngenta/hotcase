#! /usr/bin/env node
const minimist = require('minimist');
const Args = require('./logic/args');
const Postman = require('./logic/postman');
const Validator = require('./logic/validator');
const Documentor = require('./logic/documentor');

const _runPostManMerges = async (postman, documentor) => {
    await documentor.importSchema();
    postman.mapCollectionToSchema(documentor.mapping);
};

const _runPostManWrites = async (postman) => {
    await postman.saveUpdatedCollection();
    await postman.pushCollection();
    await postman.removeUpdatedCollection();
    await postman.runNewman();
};

const _runPostManSearches = async (postman) => {
    await postman.setProxyServer();
    await postman.findWorkspace();
    await postman.findCollection();
    await postman.findEnvironment();
    await postman.downloadCollection();
};

exports.run = async () => {
    console.log('===== POSTMAN DOCUMENTATION TESTER STARTED =====');
    const args = new Args(minimist(process.argv.slice(2)));
    const postman = new Postman(args);
    const validator = new Validator(args);
    const documentor = new Documentor(args);
    validator.validateArguments();
    await _runPostManSearches(postman);
    validator.validateCollectionResults();
    await _runPostManMerges(postman, documentor);
    await _runPostManWrites(postman);
    console.log('===== POSTMAN DOCUMENTATION TESTER COMPLETED =====');
    return process.exit(0);
};
