const fs = require('fs');
const axios = require('axios');
const HttpsProxyAgent = require('https-proxy-agent');

exports.getWorkspaces = async (api_key) => {
    const options = {
        method: 'GET',
        headers: {'x-api-key': api_key},
        url: `https://api.getpostman.com/workspaces`
    };
    try {
        const {data} = await axios(options);
        return data.workspaces.length ? data.workspaces : [];
    } catch (error) {
        console.error('There was a problem with your request to POSTMAN API; check your API Key or workspace name');
        console.error(error);
        throw error;
    }
};

exports.getSingleWorkspace = async (api_key, workspace_id) => {
    const options = {
        method: 'GET',
        headers: {'x-api-key': api_key},
        url: `https://api.getpostman.com/workspaces/${workspace_id}`
    };
    try {
        const {data} = await axios(options);
        return data.workspace && data.workspace.collections.length
            ? data.workspace
            : {collections: [], environments: []};
    } catch (error) {
        console.error('There was a problem with your request to POSTMAN API; check your API Key or workspace name');
        console.error(error);
        throw error;
    }
};

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

exports.setProxyServer = async (proxyServer) => {
    const url = new URL(proxyServer);
    const httpsAgent = await new HttpsProxyAgent({host: url.hostname, port: url.port});
    try {
        axios.defaults.httpsAgent = httpsAgent;
    } catch (error) {
        console.error('There was a problem at setting the proxy-server');
        console.error(error);
        throw error;
    }
};
