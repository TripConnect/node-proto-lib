// package: backend.chat_service
// file: chat_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as chat_service_pb from "./chat_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createConversation: IChatServiceService_ICreateConversation;
    findConversation: IChatServiceService_IFindConversation;
    searchConversations: IChatServiceService_ISearchConversations;
    createChatMessage: IChatServiceService_ICreateChatMessage;
    getChatMessages: IChatServiceService_IGetChatMessages;
    searchChatMessages: IChatServiceService_ISearchChatMessages;
}

interface IChatServiceService_ICreateConversation extends grpc.MethodDefinition<chat_service_pb.CreateConversationRequest, chat_service_pb.Conversation> {
    path: "/backend.chat_service.ChatService/CreateConversation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.CreateConversationRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.CreateConversationRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.Conversation>;
    responseDeserialize: grpc.deserialize<chat_service_pb.Conversation>;
}
interface IChatServiceService_IFindConversation extends grpc.MethodDefinition<chat_service_pb.FindConversationRequest, chat_service_pb.Conversation> {
    path: "/backend.chat_service.ChatService/FindConversation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.FindConversationRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.FindConversationRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.Conversation>;
    responseDeserialize: grpc.deserialize<chat_service_pb.Conversation>;
}
interface IChatServiceService_ISearchConversations extends grpc.MethodDefinition<chat_service_pb.SearchConversationsRequest, chat_service_pb.Conversations> {
    path: "/backend.chat_service.ChatService/SearchConversations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.SearchConversationsRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.SearchConversationsRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.Conversations>;
    responseDeserialize: grpc.deserialize<chat_service_pb.Conversations>;
}
interface IChatServiceService_ICreateChatMessage extends grpc.MethodDefinition<chat_service_pb.CreateChatMessageRequest, chat_service_pb.CreateChatMessageAck> {
    path: "/backend.chat_service.ChatService/CreateChatMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.CreateChatMessageRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.CreateChatMessageRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.CreateChatMessageAck>;
    responseDeserialize: grpc.deserialize<chat_service_pb.CreateChatMessageAck>;
}
interface IChatServiceService_IGetChatMessages extends grpc.MethodDefinition<chat_service_pb.GetChatMessagesRequest, chat_service_pb.ChatMessages> {
    path: "/backend.chat_service.ChatService/GetChatMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.GetChatMessagesRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.GetChatMessagesRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.ChatMessages>;
    responseDeserialize: grpc.deserialize<chat_service_pb.ChatMessages>;
}
interface IChatServiceService_ISearchChatMessages extends grpc.MethodDefinition<chat_service_pb.SearchChatMessagesRequest, chat_service_pb.ChatMessages> {
    path: "/backend.chat_service.ChatService/SearchChatMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_service_pb.SearchChatMessagesRequest>;
    requestDeserialize: grpc.deserialize<chat_service_pb.SearchChatMessagesRequest>;
    responseSerialize: grpc.serialize<chat_service_pb.ChatMessages>;
    responseDeserialize: grpc.deserialize<chat_service_pb.ChatMessages>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer extends grpc.UntypedServiceImplementation {
    createConversation: grpc.handleUnaryCall<chat_service_pb.CreateConversationRequest, chat_service_pb.Conversation>;
    findConversation: grpc.handleUnaryCall<chat_service_pb.FindConversationRequest, chat_service_pb.Conversation>;
    searchConversations: grpc.handleUnaryCall<chat_service_pb.SearchConversationsRequest, chat_service_pb.Conversations>;
    createChatMessage: grpc.handleUnaryCall<chat_service_pb.CreateChatMessageRequest, chat_service_pb.CreateChatMessageAck>;
    getChatMessages: grpc.handleUnaryCall<chat_service_pb.GetChatMessagesRequest, chat_service_pb.ChatMessages>;
    searchChatMessages: grpc.handleUnaryCall<chat_service_pb.SearchChatMessagesRequest, chat_service_pb.ChatMessages>;
}

export interface IChatServiceClient {
    createConversation(request: chat_service_pb.CreateConversationRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    createConversation(request: chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    createConversation(request: chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    findConversation(request: chat_service_pb.FindConversationRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    findConversation(request: chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    findConversation(request: chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    searchConversations(request: chat_service_pb.SearchConversationsRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    searchConversations(request: chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    searchConversations(request: chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    createChatMessage(request: chat_service_pb.CreateChatMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.CreateChatMessageAck) => void): grpc.ClientUnaryCall;
    createChatMessage(request: chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.CreateChatMessageAck) => void): grpc.ClientUnaryCall;
    createChatMessage(request: chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.CreateChatMessageAck) => void): grpc.ClientUnaryCall;
    getChatMessages(request: chat_service_pb.GetChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    getChatMessages(request: chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    getChatMessages(request: chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    searchChatMessages(request: chat_service_pb.SearchChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    searchChatMessages(request: chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    searchChatMessages(request: chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createConversation(request: chat_service_pb.CreateConversationRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public createConversation(request: chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public createConversation(request: chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public findConversation(request: chat_service_pb.FindConversationRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public findConversation(request: chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public findConversation(request: chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public searchConversations(request: chat_service_pb.SearchConversationsRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    public searchConversations(request: chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    public searchConversations(request: chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    public createChatMessage(request: chat_service_pb.CreateChatMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.CreateChatMessageAck) => void): grpc.ClientUnaryCall;
    public createChatMessage(request: chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.CreateChatMessageAck) => void): grpc.ClientUnaryCall;
    public createChatMessage(request: chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.CreateChatMessageAck) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: chat_service_pb.GetChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public searchChatMessages(request: chat_service_pb.SearchChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public searchChatMessages(request: chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public searchChatMessages(request: chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
}
