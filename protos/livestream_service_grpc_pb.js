// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var livestream_service_pb = require('./livestream_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_backend_livestream_service_CreateLivestreamRequest(arg) {
  if (!(arg instanceof livestream_service_pb.CreateLivestreamRequest)) {
    throw new Error('Expected argument of type backend.livestream_service.CreateLivestreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_livestream_service_CreateLivestreamRequest(buffer_arg) {
  return livestream_service_pb.CreateLivestreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_livestream_service_EndLivestreamRequest(arg) {
  if (!(arg instanceof livestream_service_pb.EndLivestreamRequest)) {
    throw new Error('Expected argument of type backend.livestream_service.EndLivestreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_livestream_service_EndLivestreamRequest(buffer_arg) {
  return livestream_service_pb.EndLivestreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_livestream_service_FindLivestreamRequest(arg) {
  if (!(arg instanceof livestream_service_pb.FindLivestreamRequest)) {
    throw new Error('Expected argument of type backend.livestream_service.FindLivestreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_livestream_service_FindLivestreamRequest(buffer_arg) {
  return livestream_service_pb.FindLivestreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_livestream_service_Livestream(arg) {
  if (!(arg instanceof livestream_service_pb.Livestream)) {
    throw new Error('Expected argument of type backend.livestream_service.Livestream');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_livestream_service_Livestream(buffer_arg) {
  return livestream_service_pb.Livestream.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_livestream_service_Livestreams(arg) {
  if (!(arg instanceof livestream_service_pb.Livestreams)) {
    throw new Error('Expected argument of type backend.livestream_service.Livestreams');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_livestream_service_Livestreams(buffer_arg) {
  return livestream_service_pb.Livestreams.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_livestream_service_SearchLivestreamsRequest(arg) {
  if (!(arg instanceof livestream_service_pb.SearchLivestreamsRequest)) {
    throw new Error('Expected argument of type backend.livestream_service.SearchLivestreamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_livestream_service_SearchLivestreamsRequest(buffer_arg) {
  return livestream_service_pb.SearchLivestreamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var LivestreamServiceService = exports.LivestreamServiceService = {
  createLivestream: {
    path: '/backend.livestream_service.LivestreamService/CreateLivestream',
    requestStream: false,
    responseStream: false,
    requestType: livestream_service_pb.CreateLivestreamRequest,
    responseType: livestream_service_pb.Livestream,
    requestSerialize: serialize_backend_livestream_service_CreateLivestreamRequest,
    requestDeserialize: deserialize_backend_livestream_service_CreateLivestreamRequest,
    responseSerialize: serialize_backend_livestream_service_Livestream,
    responseDeserialize: deserialize_backend_livestream_service_Livestream,
  },
  endLivestream: {
    path: '/backend.livestream_service.LivestreamService/EndLivestream',
    requestStream: false,
    responseStream: false,
    requestType: livestream_service_pb.EndLivestreamRequest,
    responseType: livestream_service_pb.Livestream,
    requestSerialize: serialize_backend_livestream_service_EndLivestreamRequest,
    requestDeserialize: deserialize_backend_livestream_service_EndLivestreamRequest,
    responseSerialize: serialize_backend_livestream_service_Livestream,
    responseDeserialize: deserialize_backend_livestream_service_Livestream,
  },
  findLivestream: {
    path: '/backend.livestream_service.LivestreamService/FindLivestream',
    requestStream: false,
    responseStream: false,
    requestType: livestream_service_pb.FindLivestreamRequest,
    responseType: livestream_service_pb.Livestream,
    requestSerialize: serialize_backend_livestream_service_FindLivestreamRequest,
    requestDeserialize: deserialize_backend_livestream_service_FindLivestreamRequest,
    responseSerialize: serialize_backend_livestream_service_Livestream,
    responseDeserialize: deserialize_backend_livestream_service_Livestream,
  },
  searchLivestream: {
    path: '/backend.livestream_service.LivestreamService/SearchLivestream',
    requestStream: false,
    responseStream: false,
    requestType: livestream_service_pb.SearchLivestreamsRequest,
    responseType: livestream_service_pb.Livestreams,
    requestSerialize: serialize_backend_livestream_service_SearchLivestreamsRequest,
    requestDeserialize: deserialize_backend_livestream_service_SearchLivestreamsRequest,
    responseSerialize: serialize_backend_livestream_service_Livestreams,
    responseDeserialize: deserialize_backend_livestream_service_Livestreams,
  },
};

exports.LivestreamServiceClient = grpc.makeGenericClientConstructor(LivestreamServiceService);
