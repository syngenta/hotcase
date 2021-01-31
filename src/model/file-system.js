const fs = require('fs');
const yaml = require('js-yaml');

exports.saveJSONFile = async (file_name, data) => {
    await fs.writeFileSync(file_name, JSON.stringify(data, null, 4));
};

exports.openJSONFile = async (file_name) => {
    const file = await fs.readFileSync(`${process.cwd()}/${file_name}`, 'utf8');
    const jsonObj = JSON.parse(file);
    return jsonObj;
};

exports.loadYaml = async (file_name) => {
    const file = await fs.readFileSync(`${process.cwd()}/${file_name}`, 'utf8');
    const ymlObj = await yaml.load(file);
    return ymlObj;
};

exports.deleteFile = async (file_path) => {
    await fs.unlinkSync(file_path);
};
