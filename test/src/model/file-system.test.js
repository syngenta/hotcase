const {assert} = require('chai');
const fileSystem = require('../../../src/model/file-system');

describe('Test File System Model', () => {
    describe('write & read json file', async () => {
        const test_write = {test: true};
        const file_name = 'test.json';
        await fileSystem.saveJSONFile(file_name, test_write);
        const testRead = await fileSystem.openJSONFile(file_name);
        assert.deepEqual(testRead, test_write);
        await fileSystem.deleteFile(file_name);
    });
    describe('read yaml file', async () => {
        const file_name = 'test/mock/openapi.yml';
        const ymlObj = await fileSystem.loadYaml(file_name);
        assert.deepEqual(ymlObj, {
            openapi: '3.0.0',
            info: {
                title: 'Demo API',
                version: '1.0.0',
                description: 'API for Postman Galaxy Demo',
                contact: {
                    name: 'Syngenta Digital',
                    email: 'developer@syngenta-digital.com',
                    url: 'https://developer.syngenta-digital.com/'
                }
            },
            tags: [
                {
                    name: 'Demo',
                    description: 'Demo endpoint'
                }
            ],
            servers: [
                {
                    url: 'https://demo-api.syngenta-digital.com'
                }
            ],
            paths: {
                '/postman-galaxy/v1': {
                    post: {
                        tags: ['Demo'],
                        operationId: 'PostDemo',
                        deprecated: false,
                        summary: 'Post a demo',
                        description: 'Demo of the post',
                        requestBody: {
                            required: true,
                            description: 'demo body',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/v1-post-demo-request'
                                    }
                                }
                            }
                        },
                        responses: {
                            201: {
                                description: 'Plan successfully posted',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-demo-response'
                                        }
                                    }
                                }
                            },
                            400: {
                                description: 'Malformed request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            },
                            401: {
                                description: 'Unathorized request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    get: {
                        tags: ['Demo'],
                        operationId: 'GetDemo',
                        deprecated: false,
                        summary: 'Get a demo response',
                        description: 'Get a demo response',
                        parameters: [
                            {
                                in: 'query',
                                name: 'id',
                                description: 'The id of the demo',
                                required: true,
                                schema: {
                                    type: 'string',
                                    minimum: 1
                                }
                            }
                        ],
                        responses: {
                            200: {
                                description: 'Demo was retrieved',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-demo-response'
                                        }
                                    }
                                }
                            },
                            400: {
                                description: 'Malformed request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            },
                            401: {
                                description: 'Unathorized request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    patch: {
                        tags: ['Demo'],
                        operationId: 'PatchDemo',
                        deprecated: false,
                        summary: 'Update a demo',
                        description: 'Update a demo',
                        parameters: [
                            {
                                in: 'query',
                                name: 'id',
                                description: 'The id of the demo',
                                required: true,
                                schema: {
                                    type: 'string',
                                    minimum: 1
                                }
                            }
                        ],
                        requestBody: {
                            description: 'demo body',
                            content: {
                                'application/json': {
                                    schema: {
                                        $ref: '#/components/schemas/v1-patch-demo-request'
                                    }
                                }
                            }
                        },
                        responses: {
                            200: {
                                description: 'Plan successfully posted',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-demo-response'
                                        }
                                    }
                                }
                            },
                            400: {
                                description: 'Malformed request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            },
                            401: {
                                description: 'Unathorized request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    delete: {
                        tags: ['Demo'],
                        operationId: 'DeleteDemo',
                        deprecated: false,
                        summary: 'Delete a demo',
                        description: 'Deleting a demo',
                        parameters: [
                            {
                                in: 'query',
                                name: 'id',
                                description: 'The id of the demo',
                                required: true,
                                schema: {
                                    type: 'string',
                                    minimum: 1
                                }
                            }
                        ],
                        responses: {
                            200: {
                                description: 'Demo successfully delete',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-demo-response'
                                        }
                                    }
                                }
                            },
                            400: {
                                description: 'Malformed request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            },
                            401: {
                                description: 'Unathorized request',
                                content: {
                                    'application/json': {
                                        schema: {
                                            $ref: '#/components/schemas/v1-400-error-response'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            components: {
                schemas: {
                    'v1-demo-model': {
                        title: 'v1-demo-model',
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string'
                            },
                            demo: {
                                type: 'boolean'
                            }
                        }
                    },
                    'v1-post-demo-request': {
                        title: 'v1-post-demo-request',
                        allOf: [
                            {
                                $ref: '#/components/schemas/v1-demo-model'
                            },
                            {
                                required: ['demo']
                            }
                        ]
                    },
                    'v1-patch-demo-request': {
                        title: 'v1-patch-demo-request',
                        allOf: [
                            {
                                $ref: '#/components/schemas/v1-demo-model'
                            }
                        ]
                    },
                    'v1-demo-response': {
                        title: 'v1-demo-response',
                        type: 'object',
                        allOf: [
                            {
                                $ref: '#/components/schemas/v1-demo-model'
                            },
                            {
                                required: ['id', 'demo']
                            }
                        ]
                    },
                    'v1-400-error-response': {
                        title: 'v1-400-error-response',
                        type: 'object',
                        properties: {
                            errors: {
                                type: 'array',
                                items: {
                                    type: 'string'
                                }
                            }
                        }
                    }
                }
            }
        });
    });
});
