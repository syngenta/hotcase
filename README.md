[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=syngenta-digital_pdt-node&metric=alert_status)](https://sonarcloud.io/dashboard?id=syngenta-digital_pdt-node) [![CircleCI](https://circleci.com/gh/syngenta-digital/pdt-node.svg?style=shield)](https://circleci.com/gh/syngenta-digital/pdt-node)

# Postman Documentation Tester (pdt)
The postman documentation tester is simple tool to test your openapi or swagger docs to ensure your APIs do what you say they do.

## Requirements

* [Node.js](https://nodejs.org/en/download/)
* [Postman](https://www.postman.com/)
* [newman](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/)
* [Postman API Key](https://learning.postman.com/docs/developer/intro-api/)

## Features

* Will work with both OpenAPI and Swagger docs
* Able to push changes up to remote collection
* Able to work with multiple collections and openapi/swagger files
* Don't need to go searching for collection ids and environment ids, just use the names
* Able to invoke newman directly from this script

## Installation & Usage

```bash
npx @syngenta-digital/pdt --workspace-name "Some Workspace" --collection-name "Some Collection" --environment-name "some environment" --doc-path openapi.yml --api-key $POSTMAN_API_KEY --push --clean-up --run-newman --bail

# or if you have a specific collection id already

$ npx @syngenta-digital/pdt --collection-id  some-collection-id --doc-path test/mock/openapi.yml --api-key $POSTMAN_API_KEY --push -clean-up

# or if you have the collection locally exported

$ npx @syngenta-digital/pdt --collection-file test/mock/mock.postman_collection.json --doc-path test/mock/openapi.yml

# then use postman cli tool (newman) to test your collection
newman run "https://api.getpostman.com/collections/$POSTMAN_COLLECTION_ID?apikey=$POSTMAN_API_KEY" -e "https://api.getpostman.com/environments/$POSTMAN_ENVIRONMENT_ID?apikey=$POSTMAN_API_KEY"
```

Flag Name             | Short    | Required              | Description
:-----------          | :------- | :-----------          | :-----------
`workspace-name`      | wn       | no                    | The name of the workspace (case sensitive)
`environment-name`    | en       | if run-newman provided| The name of the environment (case sensitive)
`collection-name`     | cn       | if workspace provided | The name of collection (case sensitive)
`collection-id`       | ci       | if no file provided   | The collection uid from Postman
`collection-file`     | cf       | if no id provided     | File path to the collection json
`doc-path`            | d        | yes                   | File path to swagger or openapi doc
`api-key`             | k        | if id provided        | Postman API Key
`push`                | p        | no                    | Push updated collection back to postman cloud
`clean-up`            | c        | no                    | Delete artifacts created during process; only works with push and collection id
`run-newman`          | rn       | no                    | Will run newman right after up applying tests
`bail`                | b        | use with run newman   | Will fail if newman tests fail
