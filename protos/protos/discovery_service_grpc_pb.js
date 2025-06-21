// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_discovery_service_pb = require('../protos/discovery_service_pb.js');

function serialize_backend_discovery_service_DiscoveryRequest(arg) {
  if (!(arg instanceof protos_discovery_service_pb.DiscoveryRequest)) {
    throw new Error('Expected argument of type backend.discovery_service.DiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_discovery_service_DiscoveryRequest(buffer_arg) {
  return protos_discovery_service_pb.DiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_discovery_service_ServiceInstance(arg) {
  if (!(arg instanceof protos_discovery_service_pb.ServiceInstance)) {
    throw new Error('Expected argument of type backend.discovery_service.ServiceInstance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_discovery_service_ServiceInstance(buffer_arg) {
  return protos_discovery_service_pb.ServiceInstance.deserializeBinary(new Uint8Array(buffer_arg));
}


var DiscoveryServiceService = exports.DiscoveryServiceService = {
  discover: {
    path: '/backend.discovery_service.DiscoveryService/Discover',
    requestStream: false,
    responseStream: false,
    requestType: protos_discovery_service_pb.DiscoveryRequest,
    responseType: protos_discovery_service_pb.ServiceInstance,
    requestSerialize: serialize_backend_discovery_service_DiscoveryRequest,
    requestDeserialize: deserialize_backend_discovery_service_DiscoveryRequest,
    responseSerialize: serialize_backend_discovery_service_ServiceInstance,
    responseDeserialize: deserialize_backend_discovery_service_ServiceInstance,
  },
};

exports.DiscoveryServiceClient = grpc.makeGenericClientConstructor(DiscoveryServiceService);
