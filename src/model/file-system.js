const fs = require('fs');
const yaml = require('js-yaml');

exports.saveJSONFile = async (file_name, data) => {
    await fs.writeFileSync(file_name, JSON.stringify(data, null, 4));
};

exports.openJSONFile = async (file_name) => {
    const file = await fs.readFileSync(`${process.cwd()}/${file_name}`, 'utf8');
    return JSON.parse(file);
};

exports.loadYaml = async (file_name) => {
    const file = await fs.readFileSync(`${process.cwd()}/${file_name}`, 'utf8');
    return await yaml.load(file);
};

exports.deleteFile = async (file_path) => {
    await fs.unlinkSync(file_path);
};
