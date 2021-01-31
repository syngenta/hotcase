const minimist = require('minimist');
const Args = require('./logic/args');
const Postman = require('./logic/postman');
const Validator = require('./logic/validator');
const Documentor = require('./logic/documentor');

exports.run = async () => {
    console.log('===== POSTMAN DOCUMENTATION TESTER STARTED =====');
    const args = new Args(minimist(process.argv.slice(2)));
    const postman = new Postman(args);
    const validator = new Validator(args);
    const documentor = new Documentor(args);
    validator.validate();
    await postman.downloadCollection(args);
    await documentor.importSchema();
    postman.mapCollectionToSchema(documentor.mapping);
    await postman.saveUpdatedCollection();
    await postman.pushCollection();
    await postman.removeUpdatedCollection();
    console.log('===== POSTMAN DOCUMENTATION TESTER COMPLETED =====');
    return process.exit(0);
};
