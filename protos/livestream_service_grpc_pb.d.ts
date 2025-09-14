// package: backend.livestream_service
// file: livestream_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as livestream_service_pb from "./livestream_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ILivestreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createLivestream: ILivestreamServiceService_ICreateLivestream;
    endLivestream: ILivestreamServiceService_IEndLivestream;
    findLivestream: ILivestreamServiceService_IFindLivestream;
    searchLivestream: ILivestreamServiceService_ISearchLivestream;
}

interface ILivestreamServiceService_ICreateLivestream extends grpc.MethodDefinition<livestream_service_pb.CreateLivestreamRequest, livestream_service_pb.Livestream> {
    path: "/backend.livestream_service.LivestreamService/CreateLivestream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<livestream_service_pb.CreateLivestreamRequest>;
    requestDeserialize: grpc.deserialize<livestream_service_pb.CreateLivestreamRequest>;
    responseSerialize: grpc.serialize<livestream_service_pb.Livestream>;
    responseDeserialize: grpc.deserialize<livestream_service_pb.Livestream>;
}
interface ILivestreamServiceService_IEndLivestream extends grpc.MethodDefinition<livestream_service_pb.EndLivestreamRequest, livestream_service_pb.Livestream> {
    path: "/backend.livestream_service.LivestreamService/EndLivestream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<livestream_service_pb.EndLivestreamRequest>;
    requestDeserialize: grpc.deserialize<livestream_service_pb.EndLivestreamRequest>;
    responseSerialize: grpc.serialize<livestream_service_pb.Livestream>;
    responseDeserialize: grpc.deserialize<livestream_service_pb.Livestream>;
}
interface ILivestreamServiceService_IFindLivestream extends grpc.MethodDefinition<livestream_service_pb.FindLivestreamRequest, livestream_service_pb.Livestream> {
    path: "/backend.livestream_service.LivestreamService/FindLivestream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<livestream_service_pb.FindLivestreamRequest>;
    requestDeserialize: grpc.deserialize<livestream_service_pb.FindLivestreamRequest>;
    responseSerialize: grpc.serialize<livestream_service_pb.Livestream>;
    responseDeserialize: grpc.deserialize<livestream_service_pb.Livestream>;
}
interface ILivestreamServiceService_ISearchLivestream extends grpc.MethodDefinition<livestream_service_pb.SearchLivestreamsRequest, livestream_service_pb.Livestreams> {
    path: "/backend.livestream_service.LivestreamService/SearchLivestream";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<livestream_service_pb.SearchLivestreamsRequest>;
    requestDeserialize: grpc.deserialize<livestream_service_pb.SearchLivestreamsRequest>;
    responseSerialize: grpc.serialize<livestream_service_pb.Livestreams>;
    responseDeserialize: grpc.deserialize<livestream_service_pb.Livestreams>;
}

export const LivestreamServiceService: ILivestreamServiceService;

export interface ILivestreamServiceServer extends grpc.UntypedServiceImplementation {
    createLivestream: grpc.handleUnaryCall<livestream_service_pb.CreateLivestreamRequest, livestream_service_pb.Livestream>;
    endLivestream: grpc.handleUnaryCall<livestream_service_pb.EndLivestreamRequest, livestream_service_pb.Livestream>;
    findLivestream: grpc.handleUnaryCall<livestream_service_pb.FindLivestreamRequest, livestream_service_pb.Livestream>;
    searchLivestream: grpc.handleUnaryCall<livestream_service_pb.SearchLivestreamsRequest, livestream_service_pb.Livestreams>;
}

export interface ILivestreamServiceClient {
    createLivestream(request: livestream_service_pb.CreateLivestreamRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    createLivestream(request: livestream_service_pb.CreateLivestreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    createLivestream(request: livestream_service_pb.CreateLivestreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    endLivestream(request: livestream_service_pb.EndLivestreamRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    endLivestream(request: livestream_service_pb.EndLivestreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    endLivestream(request: livestream_service_pb.EndLivestreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    findLivestream(request: livestream_service_pb.FindLivestreamRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    findLivestream(request: livestream_service_pb.FindLivestreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    findLivestream(request: livestream_service_pb.FindLivestreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    searchLivestream(request: livestream_service_pb.SearchLivestreamsRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestreams) => void): grpc.ClientUnaryCall;
    searchLivestream(request: livestream_service_pb.SearchLivestreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestreams) => void): grpc.ClientUnaryCall;
    searchLivestream(request: livestream_service_pb.SearchLivestreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestreams) => void): grpc.ClientUnaryCall;
}

export class LivestreamServiceClient extends grpc.Client implements ILivestreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createLivestream(request: livestream_service_pb.CreateLivestreamRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public createLivestream(request: livestream_service_pb.CreateLivestreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public createLivestream(request: livestream_service_pb.CreateLivestreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public endLivestream(request: livestream_service_pb.EndLivestreamRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public endLivestream(request: livestream_service_pb.EndLivestreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public endLivestream(request: livestream_service_pb.EndLivestreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public findLivestream(request: livestream_service_pb.FindLivestreamRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public findLivestream(request: livestream_service_pb.FindLivestreamRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public findLivestream(request: livestream_service_pb.FindLivestreamRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestream) => void): grpc.ClientUnaryCall;
    public searchLivestream(request: livestream_service_pb.SearchLivestreamsRequest, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestreams) => void): grpc.ClientUnaryCall;
    public searchLivestream(request: livestream_service_pb.SearchLivestreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestreams) => void): grpc.ClientUnaryCall;
    public searchLivestream(request: livestream_service_pb.SearchLivestreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: livestream_service_pb.Livestreams) => void): grpc.ClientUnaryCall;
}
