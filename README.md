# Introduction
The proto definition for nodejs environment.

# Installation
```sh
npm install git+ssh://git@github.com:TripConnect/common-utils.git --force
```

# Usage
Example
```js
import * as grpc from '@grpc/grpc-js';
import { UserServiceService } from "common-utils/protos/defs/user_service_grpc_pb";
import { userServiceImp } from 'path/to/rpc/implementations'; // service rpc implementations as object here

function start() {
    const server = new grpc.Server();
    server.addService(UserServiceService, userServiceImp);

    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err != null) {
            return logger.error(err);
        }
        logger.info(`gRPC listening on ${port}`);
    });
}
```

# Build
## Clone proto definition files
```sh
cd node-proto-lib
git clone git@github.com:TripConnect/proto-storage.git
```
## Build golang proto files
Clone proto definition files
```sh
cd node-proto-lib
git clone git@github.com:TripConnect/proto-storage.git
```
Next, choose command to build nodejs proto definitions corresponding develop environment  
Build proto definitinons for **Linux** only
```sh
npm install --save-dev grpc-tools grpc_tools_node_protoc_ts # Install required packages
npx grpc_tools_node_protoc --proto_path=./protos --js_out=import_style=commonjs,binary:./protos/defs --grpc_out=grpc_js:./protos/defs --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./protos/defs ./protos/*_service.proto # Build js and ts definitions
```
Build proto definitinons for **Window** only
```sh
npm install --save-dev grpc-tools@1.11.2 @grpc/grpc-js@1.6.6 grpc_tools_node_protoc_ts # Install required packages
npx grpc_tools_node_protoc --proto_path=./proto-storage --js_out=import_style=commonjs,binary:./protos --grpc_out=grpc_js:./protos --plugin=protoc-gen-ts="%cd%/node_modules/.bin/protoc-gen-ts.cmd" --ts_out=grpc_js:./protos ./proto-storage/protos/*_service.proto # Build js and ts definitions
```
## Publish to github registry
```sh
git add .
git commit -m "build: something"
git push
```
