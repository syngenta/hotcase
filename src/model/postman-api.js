const fs = require('fs');
const axios = require('axios');

exports.getCollection = async (api_key, collection_id) => {
    const options = {
        method: 'GET',
        headers: {'x-api-key': api_key},
        url: `https://api.getpostman.com/collections/${collection_id}`
    };
    try {
        const {data} = await axios(options);
        return data.collection;
    } catch (error) {
        console.error('There was a problem with your request to POSTMAN API; check your API Key');
        console.error(error);
        throw error;
    }
};

exports.updateCollection = async (api_key, collection_id, collection) => {
    const options = {
        method: 'PUT',
        headers: {'x-api-key': api_key},
        url: `https://api.getpostman.com/collections/${collection_id}`,
        data: {collection}
    };
    try {
        await axios(options);
    } catch (error) {
        console.error('There was a problem with your request to POSTMAN API; check your API Key');
        console.error(error);
        throw error;
    }
};
