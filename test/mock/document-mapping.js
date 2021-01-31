exports.getMapping = () => {
    return {
        'post:/postman-galaxy/v1': {
            201: {
                title: 'v1-demo-response',
                type: 'object',
                allOf: [
                    {
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
                    {
                        required: ['id', 'demo']
                    }
                ]
            },
            400: {
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
            },
            401: {
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
        },
        'get:/postman-galaxy/v1': {
            200: {
                title: 'v1-demo-response',
                type: 'object',
                allOf: [
                    {
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
                    {
                        required: ['id', 'demo']
                    }
                ]
            },
            400: {
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
            },
            401: {
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
        },
        'patch:/postman-galaxy/v1': {
            200: {
                title: 'v1-demo-response',
                type: 'object',
                allOf: [
                    {
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
                    {
                        required: ['id', 'demo']
                    }
                ]
            },
            400: {
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
            },
            401: {
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
        },
        'delete:/postman-galaxy/v1': {
            200: {
                title: 'v1-demo-response',
                type: 'object',
                allOf: [
                    {
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
                    {
                        required: ['id', 'demo']
                    }
                ]
            },
            400: {
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
            },
            401: {
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
    };
};
