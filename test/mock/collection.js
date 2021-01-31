const fs = require('fs');

exports.get = async () => {
    const file = await fs.readFileSync(`${process.cwd()}/test/mock/mock.postman_collection.json`, 'utf8');
    return JSON.parse(file);
};

exports.updated = () => {
    return {
        info: {
            _postman_id: '02aa3403-d56a-42e7-964b-2b5f5794f0e3',
            name: 'Demo',
            schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
        },
        item: [
            {
                name: 'CREATE',
                event: [
                    {
                        listen: 'test',
                        script: {
                            exec: [
                                "pm.test('Some other test', function () {",
                                "    pm.environment.set('demo_id', pm.response.json().demo_id);",
                                '});',
                                "pm.test('<PDT TEST> post:/postman-galaxy/v1 [code: 201] schema is valid', function () {",
                                '    if (pm.response.code !== 201){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-demo-response","type":"object","allOf":[{"title":"v1-demo-model","type":"object","properties":{"id":{"type":"string"},"demo":{"type":"boolean"}}},{"required":["id","demo"]}]};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> post:/postman-galaxy/v1 [code: 400] schema is valid', function () {",
                                '    if (pm.response.code !== 400){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> post:/postman-galaxy/v1 [code: 401] schema is valid', function () {",
                                '    if (pm.response.code !== 401){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST>: response code is among available codes', function () {",
                                '    const codes = [201,400,401];',
                                '    pm.expect(codes.includes(pm.response.code)).to.be.true;',
                                '});'
                            ],
                            type: 'text/javascript'
                        }
                    }
                ],
                request: {
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
                response: [],
                event: [
                    {
                        listen: 'test',
                        script: {
                            type: 'text/javascript',
                            exec: [
                                "pm.test('<PDT TEST> get:/postman-galaxy/v1 [code: 200] schema is valid', function () {",
                                '    if (pm.response.code !== 200){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-demo-response","type":"object","allOf":[{"title":"v1-demo-model","type":"object","properties":{"id":{"type":"string"},"demo":{"type":"boolean"}}},{"required":["id","demo"]}]};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> get:/postman-galaxy/v1 [code: 400] schema is valid', function () {",
                                '    if (pm.response.code !== 400){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> get:/postman-galaxy/v1 [code: 401] schema is valid', function () {",
                                '    if (pm.response.code !== 401){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST>: response code is among available codes', function () {",
                                '    const codes = [200,400,401];',
                                '    pm.expect(codes.includes(pm.response.code)).to.be.true;',
                                '});'
                            ]
                        }
                    }
                ]
            },
            {
                name: 'UPDATE',
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
                response: [],
                event: [
                    {
                        listen: 'test',
                        script: {
                            type: 'text/javascript',
                            exec: [
                                "pm.test('<PDT TEST> patch:/postman-galaxy/v1 [code: 200] schema is valid', function () {",
                                '    if (pm.response.code !== 200){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-demo-response","type":"object","allOf":[{"title":"v1-demo-model","type":"object","properties":{"id":{"type":"string"},"demo":{"type":"boolean"}}},{"required":["id","demo"]}]};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> patch:/postman-galaxy/v1 [code: 400] schema is valid', function () {",
                                '    if (pm.response.code !== 400){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> patch:/postman-galaxy/v1 [code: 401] schema is valid', function () {",
                                '    if (pm.response.code !== 401){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST>: response code is among available codes', function () {",
                                '    const codes = [200,400,401];',
                                '    pm.expect(codes.includes(pm.response.code)).to.be.true;',
                                '});'
                            ]
                        }
                    }
                ]
            },
            {
                name: 'DELETE',
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
                response: [],
                event: [
                    {
                        listen: 'test',
                        script: {
                            type: 'text/javascript',
                            exec: [
                                "pm.test('<PDT TEST> delete:/postman-galaxy/v1 [code: 200] schema is valid', function () {",
                                '    if (pm.response.code !== 200){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-demo-response","type":"object","allOf":[{"title":"v1-demo-model","type":"object","properties":{"id":{"type":"string"},"demo":{"type":"boolean"}}},{"required":["id","demo"]}]};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> delete:/postman-galaxy/v1 [code: 400] schema is valid', function () {",
                                '    if (pm.response.code !== 400){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST> delete:/postman-galaxy/v1 [code: 401] schema is valid', function () {",
                                '    if (pm.response.code !== 401){',
                                '        return;',
                                '    }',
                                '    const schema = {"title":"v1-400-error-response","type":"object","properties":{"errors":{"type":"array","items":{"type":"string"}}}};',
                                '    const response = pm.response.json();',
                                '    pm.expect(tv4.validate(response, schema)).to.be.true;',
                                '});',
                                "pm.test('<PDT TEST>: response code is among available codes', function () {",
                                '    const codes = [200,400,401];',
                                '    pm.expect(codes.includes(pm.response.code)).to.be.true;',
                                '});'
                            ]
                        }
                    }
                ]
            }
        ]
    };
};
