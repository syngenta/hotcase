exports.getWorkspaces = () => {
    return [
        {
            id: '110656cf-bbb4-41e3-b2c9-a779d2431740',
            name: 'Cropwise Base',
            type: 'team'
        },
        {
            id: '12ab5979-edc0-4f6c-bc63-8c461de4005e',
            name: 'Postman Galaxy',
            type: 'team'
        },
        {
            id: '27b2f5c1-3e27-4c1a-92cd-4b9e4e217d50',
            name: 'Sustainability',
            type: 'team'
        },
        {
            id: '7a56c4b5-2615-4593-ae29-79cb7cd2cb41',
            name: 'Protector',
            type: 'team'
        },
        {
            id: '923f2cf6-faf6-40d2-a663-526065733f76',
            name: 'Enogen',
            type: 'team'
        },
        {
            id: 'b173bdd7-fe71-41d8-baa3-70c3d10b1160',
            name: 'Databus',
            type: 'team'
        },
        {
            id: 'd23c9e44-9bf3-4196-8a49-da8f236a5e14',
            name: 'My Workspace',
            type: 'personal'
        },
        {
            id: 'd5585369-06fa-4c70-89fa-2c106f8ae50d',
            name: 'Team Workspace [CANT DELETE]',
            type: 'team'
        },
        {
            id: 'e31d625f-58c7-4b9f-b97a-cede7676a983',
            name: 'SalesForce',
            type: 'team'
        },
        {
            id: 'f139a19c-a94c-4a53-8c4e-afcc85280070',
            name: 'Platform',
            type: 'team'
        }
    ];
};
exports.getApiWorkspaces = () => {
    return {
        workspaces: [
            {
                id: '110656cf-bbb4-41e3-b2c9-a779d2431740',
                name: 'Cropwise Base',
                type: 'team'
            },
            {
                id: '12ab5979-edc0-4f6c-bc63-8c461de4005e',
                name: 'Postman Galaxy',
                type: 'team'
            },
            {
                id: '27b2f5c1-3e27-4c1a-92cd-4b9e4e217d50',
                name: 'Sustainability',
                type: 'team'
            },
            {
                id: '7a56c4b5-2615-4593-ae29-79cb7cd2cb41',
                name: 'Protector',
                type: 'team'
            },
            {
                id: '923f2cf6-faf6-40d2-a663-526065733f76',
                name: 'Enogen',
                type: 'team'
            },
            {
                id: 'b173bdd7-fe71-41d8-baa3-70c3d10b1160',
                name: 'Databus',
                type: 'team'
            },
            {
                id: 'd23c9e44-9bf3-4196-8a49-da8f236a5e14',
                name: 'My Workspace',
                type: 'personal'
            },
            {
                id: 'd5585369-06fa-4c70-89fa-2c106f8ae50d',
                name: 'Team Workspace [CANT DELETE]',
                type: 'team'
            },
            {
                id: 'e31d625f-58c7-4b9f-b97a-cede7676a983',
                name: 'SalesForce',
                type: 'team'
            },
            {
                id: 'f139a19c-a94c-4a53-8c4e-afcc85280070',
                name: 'Platform',
                type: 'team'
            }
        ]
    };
};

exports.getWorkspace = () => {
    return {
        id: '12ab5979-edc0-4f6c-bc63-8c461de4005e',
        name: 'Postman Galaxy',
        type: 'team',
        description: 'A workspace to demo the postman collection tool',
        collections: [
            {
                id: '02aa3403-d56a-42e7-964b-2b5f5794f0e3',
                name: 'Postman Galaxy Demo',
                uid: '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3'
            }
        ],
        environments: [
            {
                id: '9bc920be-4d83-4f0b-b49c-71a494464487',
                name: 'postman galaxy local',
                uid: '8869631-9bc920be-4d83-4f0b-b49c-71a494464487'
            },
            {
                id: 'cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96',
                name: 'postman galaxy demo',
                uid: '8869631-cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96'
            }
        ]
    };
};

exports.getApiWorkspace = () => {
    return {
        workspace: {
            id: '12ab5979-edc0-4f6c-bc63-8c461de4005e',
            name: 'Postman Galaxy',
            type: 'team',
            description: 'A workspace to demo the postman collection tool',
            collections: [
                {
                    id: '02aa3403-d56a-42e7-964b-2b5f5794f0e3',
                    name: 'Postman Galaxy Demo',
                    uid: '8869631-02aa3403-d56a-42e7-964b-2b5f5794f0e3'
                }
            ],
            environments: [
                {
                    id: '9bc920be-4d83-4f0b-b49c-71a494464487',
                    name: 'postman galaxy local',
                    uid: '8869631-9bc920be-4d83-4f0b-b49c-71a494464487'
                },
                {
                    id: 'cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96',
                    name: 'postman galaxy demo',
                    uid: '8869631-cd6d69c9-4ce3-4baa-94a6-14b0d6d2bc96'
                }
            ]
        }
    };
};

exports.getCollection = () => {
    return {
        info: {
            _postman_id: '02aa3403-d56a-42e7-964b-2b5f5794f0e3',
            name: 'Postman Galaxy Demo',
            schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
        },
        item: [
            {
                name: 'CREATE',
                event: [
                    {
                        listen: 'test',
                        script: {
                            id: '180e4279-7383-439f-bc7d-642bf36824d6',
                            exec: ['pm.environment.set("id", pm.response.json().id);'],
                            type: 'text/javascript'
                        }
                    }
                ],
                _postman_id: 'c9f0c631-4c83-4e30-9014-3c41835d4519',
                protocolProfileBehavior: {
                    disableBodyPruning: true
                },
                request: {
                    auth: {
                        type: 'noauth'
                    },
                    method: 'POST',
                    header: [],
                    body: {
                        mode: 'raw',
                        raw: '{\n    "demo": true\n}',
                        options: {
                            raw: {
                                language: 'json'
                            }
                        }
                    },
                    url: {
                        raw: '{{base_url}}/postman-galaxy/v1',
                        host: ['{{base_url}}'],
                        path: ['postman-galaxy', 'v1']
                    }
                },
                response: []
            },
            {
                name: 'READ',
                event: [
                    {
                        listen: 'test',
                        script: {
                            id: 'f9786458-0720-4aec-bb12-8671c3a36517',
                            exec: [''],
                            type: 'text/javascript'
                        }
                    }
                ],
                _postman_id: 'a0f45321-870c-4184-a1de-207b2a1298dd',
                protocolProfileBehavior: {
                    disableBodyPruning: true
                },
                request: {
                    method: 'GET',
                    header: [],
                    url: {
                        raw: '{{base_url}}/postman-galaxy/v1?id={{demo_id}}',
                        host: ['{{base_url}}'],
                        path: ['postman-galaxy', 'v1'],
                        query: [
                            {
                                key: 'id',
                                value: '{{demo_id}}'
                            }
                        ]
                    }
                },
                response: []
            },
            {
                name: 'UPDATE',
                event: [
                    {
                        listen: 'test',
                        script: {
                            id: '0c5acf0f-1833-4ce1-93bc-24e10eb33f32',
                            exec: [''],
                            type: 'text/javascript'
                        }
                    }
                ],
                _postman_id: '136735e3-329b-403c-b00e-5f0b39e10086',
                protocolProfileBehavior: {
                    disableBodyPruning: true
                },
                request: {
                    method: 'PATCH',
                    header: [],
                    body: {
                        mode: 'raw',
                        raw: '{\n    "demo": true\n}',
                        options: {
                            raw: {
                                language: 'json'
                            }
                        }
                    },
                    url: {
                        raw: '{{base_url}}/postman-galaxy/v1?id={{demo_id}}',
                        host: ['{{base_url}}'],
                        path: ['postman-galaxy', 'v1'],
                        query: [
                            {
                                key: 'id',
                                value: '{{demo_id}}'
                            }
                        ]
                    }
                },
                response: []
            },
            {
                name: 'DELETE',
                event: [
                    {
                        listen: 'test',
                        script: {
                            id: 'fde93135-dde7-4bce-a6b8-e395a49e4450',
                            exec: [''],
                            type: 'text/javascript'
                        }
                    }
                ],
                _postman_id: 'e4315ac6-26bf-41ae-9f0c-f58bf4f52364',
                protocolProfileBehavior: {
                    disableBodyPruning: true
                },
                request: {
                    method: 'DELETE',
                    header: [],
                    url: {
                        raw: '{{base_url}}/postman-galaxy/v1?id={{demo_id}}',
                        host: ['{{base_url}}'],
                        path: ['postman-galaxy', 'v1'],
                        query: [
                            {
                                key: 'id',
                                value: '{{demo_id}}'
                            }
                        ]
                    }
                },
                response: []
            }
        ]
    };
};
