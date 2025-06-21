// package: backend.twofa_service
// file: protos/twofa_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_twofa_service_pb from "../protos/twofa_service_pb";

interface ITwoFactorAuthenticationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateSetting: ITwoFactorAuthenticationServiceService_IGenerateSetting;
    createSetting: ITwoFactorAuthenticationServiceService_ICreateSetting;
    validateResource: ITwoFactorAuthenticationServiceService_IValidateResource;
}

interface ITwoFactorAuthenticationServiceService_IGenerateSetting extends grpc.MethodDefinition<protos_twofa_service_pb.Generate2faRequest, protos_twofa_service_pb.Generate2faResponse> {
    path: "/backend.twofa_service.TwoFactorAuthenticationService/GenerateSetting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_twofa_service_pb.Generate2faRequest>;
    requestDeserialize: grpc.deserialize<protos_twofa_service_pb.Generate2faRequest>;
    responseSerialize: grpc.serialize<protos_twofa_service_pb.Generate2faResponse>;
    responseDeserialize: grpc.deserialize<protos_twofa_service_pb.Generate2faResponse>;
}
interface ITwoFactorAuthenticationServiceService_ICreateSetting extends grpc.MethodDefinition<protos_twofa_service_pb.Create2faRequest, protos_twofa_service_pb.Create2faResponse> {
    path: "/backend.twofa_service.TwoFactorAuthenticationService/CreateSetting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_twofa_service_pb.Create2faRequest>;
    requestDeserialize: grpc.deserialize<protos_twofa_service_pb.Create2faRequest>;
    responseSerialize: grpc.serialize<protos_twofa_service_pb.Create2faResponse>;
    responseDeserialize: grpc.deserialize<protos_twofa_service_pb.Create2faResponse>;
}
interface ITwoFactorAuthenticationServiceService_IValidateResource extends grpc.MethodDefinition<protos_twofa_service_pb.Validate2faRequest, protos_twofa_service_pb.Validate2faResponse> {
    path: "/backend.twofa_service.TwoFactorAuthenticationService/ValidateResource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_twofa_service_pb.Validate2faRequest>;
    requestDeserialize: grpc.deserialize<protos_twofa_service_pb.Validate2faRequest>;
    responseSerialize: grpc.serialize<protos_twofa_service_pb.Validate2faResponse>;
    responseDeserialize: grpc.deserialize<protos_twofa_service_pb.Validate2faResponse>;
}

export const TwoFactorAuthenticationServiceService: ITwoFactorAuthenticationServiceService;

export interface ITwoFactorAuthenticationServiceServer extends grpc.UntypedServiceImplementation {
    generateSetting: grpc.handleUnaryCall<protos_twofa_service_pb.Generate2faRequest, protos_twofa_service_pb.Generate2faResponse>;
    createSetting: grpc.handleUnaryCall<protos_twofa_service_pb.Create2faRequest, protos_twofa_service_pb.Create2faResponse>;
    validateResource: grpc.handleUnaryCall<protos_twofa_service_pb.Validate2faRequest, protos_twofa_service_pb.Validate2faResponse>;
}

export interface ITwoFactorAuthenticationServiceClient {
    generateSetting(request: protos_twofa_service_pb.Generate2faRequest, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    generateSetting(request: protos_twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    generateSetting(request: protos_twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    createSetting(request: protos_twofa_service_pb.Create2faRequest, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    createSetting(request: protos_twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    createSetting(request: protos_twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    validateResource(request: protos_twofa_service_pb.Validate2faRequest, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    validateResource(request: protos_twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    validateResource(request: protos_twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
}

export class TwoFactorAuthenticationServiceClient extends grpc.Client implements ITwoFactorAuthenticationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generateSetting(request: protos_twofa_service_pb.Generate2faRequest, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    public generateSetting(request: protos_twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    public generateSetting(request: protos_twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    public createSetting(request: protos_twofa_service_pb.Create2faRequest, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    public createSetting(request: protos_twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    public createSetting(request: protos_twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    public validateResource(request: protos_twofa_service_pb.Validate2faRequest, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    public validateResource(request: protos_twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    public validateResource(request: protos_twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
}
