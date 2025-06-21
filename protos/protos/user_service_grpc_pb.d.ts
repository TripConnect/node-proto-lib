// package: backend.user_service
// file: protos/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_user_service_pb from "../protos/user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signIn: IUserServiceService_ISignIn;
    signUp: IUserServiceService_ISignUp;
    findUser: IUserServiceService_IFindUser;
    getUsers: IUserServiceService_IGetUsers;
    searchUser: IUserServiceService_ISearchUser;
}

interface IUserServiceService_ISignIn extends grpc.MethodDefinition<protos_user_service_pb.SignInRequest, protos_user_service_pb.AuthenticatedInfo> {
    path: "/backend.user_service.UserService/SignIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_service_pb.SignInRequest>;
    requestDeserialize: grpc.deserialize<protos_user_service_pb.SignInRequest>;
    responseSerialize: grpc.serialize<protos_user_service_pb.AuthenticatedInfo>;
    responseDeserialize: grpc.deserialize<protos_user_service_pb.AuthenticatedInfo>;
}
interface IUserServiceService_ISignUp extends grpc.MethodDefinition<protos_user_service_pb.SignUpRequest, protos_user_service_pb.AuthenticatedInfo> {
    path: "/backend.user_service.UserService/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_service_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<protos_user_service_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<protos_user_service_pb.AuthenticatedInfo>;
    responseDeserialize: grpc.deserialize<protos_user_service_pb.AuthenticatedInfo>;
}
interface IUserServiceService_IFindUser extends grpc.MethodDefinition<protos_user_service_pb.FindUserRequest, protos_user_service_pb.UserInfo> {
    path: "/backend.user_service.UserService/FindUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_service_pb.FindUserRequest>;
    requestDeserialize: grpc.deserialize<protos_user_service_pb.FindUserRequest>;
    responseSerialize: grpc.serialize<protos_user_service_pb.UserInfo>;
    responseDeserialize: grpc.deserialize<protos_user_service_pb.UserInfo>;
}
interface IUserServiceService_IGetUsers extends grpc.MethodDefinition<protos_user_service_pb.GetUsersRequest, protos_user_service_pb.UsersInfo> {
    path: "/backend.user_service.UserService/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_service_pb.GetUsersRequest>;
    requestDeserialize: grpc.deserialize<protos_user_service_pb.GetUsersRequest>;
    responseSerialize: grpc.serialize<protos_user_service_pb.UsersInfo>;
    responseDeserialize: grpc.deserialize<protos_user_service_pb.UsersInfo>;
}
interface IUserServiceService_ISearchUser extends grpc.MethodDefinition<protos_user_service_pb.SearchUserRequest, protos_user_service_pb.UsersInfo> {
    path: "/backend.user_service.UserService/SearchUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_service_pb.SearchUserRequest>;
    requestDeserialize: grpc.deserialize<protos_user_service_pb.SearchUserRequest>;
    responseSerialize: grpc.serialize<protos_user_service_pb.UsersInfo>;
    responseDeserialize: grpc.deserialize<protos_user_service_pb.UsersInfo>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    signIn: grpc.handleUnaryCall<protos_user_service_pb.SignInRequest, protos_user_service_pb.AuthenticatedInfo>;
    signUp: grpc.handleUnaryCall<protos_user_service_pb.SignUpRequest, protos_user_service_pb.AuthenticatedInfo>;
    findUser: grpc.handleUnaryCall<protos_user_service_pb.FindUserRequest, protos_user_service_pb.UserInfo>;
    getUsers: grpc.handleUnaryCall<protos_user_service_pb.GetUsersRequest, protos_user_service_pb.UsersInfo>;
    searchUser: grpc.handleUnaryCall<protos_user_service_pb.SearchUserRequest, protos_user_service_pb.UsersInfo>;
}

export interface IUserServiceClient {
    signIn(request: protos_user_service_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    signIn(request: protos_user_service_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    signIn(request: protos_user_service_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    signUp(request: protos_user_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    signUp(request: protos_user_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    signUp(request: protos_user_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    findUser(request: protos_user_service_pb.FindUserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UserInfo) => void): grpc.ClientUnaryCall;
    findUser(request: protos_user_service_pb.FindUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UserInfo) => void): grpc.ClientUnaryCall;
    findUser(request: protos_user_service_pb.FindUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UserInfo) => void): grpc.ClientUnaryCall;
    getUsers(request: protos_user_service_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    getUsers(request: protos_user_service_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    getUsers(request: protos_user_service_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    searchUser(request: protos_user_service_pb.SearchUserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    searchUser(request: protos_user_service_pb.SearchUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    searchUser(request: protos_user_service_pb.SearchUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public signIn(request: protos_user_service_pb.SignInRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    public signIn(request: protos_user_service_pb.SignInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    public signIn(request: protos_user_service_pb.SignInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    public signUp(request: protos_user_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    public signUp(request: protos_user_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    public signUp(request: protos_user_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.AuthenticatedInfo) => void): grpc.ClientUnaryCall;
    public findUser(request: protos_user_service_pb.FindUserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UserInfo) => void): grpc.ClientUnaryCall;
    public findUser(request: protos_user_service_pb.FindUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UserInfo) => void): grpc.ClientUnaryCall;
    public findUser(request: protos_user_service_pb.FindUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UserInfo) => void): grpc.ClientUnaryCall;
    public getUsers(request: protos_user_service_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    public getUsers(request: protos_user_service_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    public getUsers(request: protos_user_service_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    public searchUser(request: protos_user_service_pb.SearchUserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    public searchUser(request: protos_user_service_pb.SearchUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
    public searchUser(request: protos_user_service_pb.SearchUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_service_pb.UsersInfo) => void): grpc.ClientUnaryCall;
}
