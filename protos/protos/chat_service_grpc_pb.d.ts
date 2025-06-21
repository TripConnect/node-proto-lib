// package: backend.chat_service
// file: protos/chat_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_chat_service_pb from "../protos/chat_service_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createConversation: IChatServiceService_ICreateConversation;
    findConversation: IChatServiceService_IFindConversation;
    searchConversations: IChatServiceService_ISearchConversations;
    createChatMessage: IChatServiceService_ICreateChatMessage;
    getChatMessages: IChatServiceService_IGetChatMessages;
    searchChatMessages: IChatServiceService_ISearchChatMessages;
}

interface IChatServiceService_ICreateConversation extends grpc.MethodDefinition<protos_chat_service_pb.CreateConversationRequest, protos_chat_service_pb.Conversation> {
    path: "/backend.chat_service.ChatService/CreateConversation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_chat_service_pb.CreateConversationRequest>;
    requestDeserialize: grpc.deserialize<protos_chat_service_pb.CreateConversationRequest>;
    responseSerialize: grpc.serialize<protos_chat_service_pb.Conversation>;
    responseDeserialize: grpc.deserialize<protos_chat_service_pb.Conversation>;
}
interface IChatServiceService_IFindConversation extends grpc.MethodDefinition<protos_chat_service_pb.FindConversationRequest, protos_chat_service_pb.Conversation> {
    path: "/backend.chat_service.ChatService/FindConversation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_chat_service_pb.FindConversationRequest>;
    requestDeserialize: grpc.deserialize<protos_chat_service_pb.FindConversationRequest>;
    responseSerialize: grpc.serialize<protos_chat_service_pb.Conversation>;
    responseDeserialize: grpc.deserialize<protos_chat_service_pb.Conversation>;
}
interface IChatServiceService_ISearchConversations extends grpc.MethodDefinition<protos_chat_service_pb.SearchConversationsRequest, protos_chat_service_pb.Conversations> {
    path: "/backend.chat_service.ChatService/SearchConversations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_chat_service_pb.SearchConversationsRequest>;
    requestDeserialize: grpc.deserialize<protos_chat_service_pb.SearchConversationsRequest>;
    responseSerialize: grpc.serialize<protos_chat_service_pb.Conversations>;
    responseDeserialize: grpc.deserialize<protos_chat_service_pb.Conversations>;
}
interface IChatServiceService_ICreateChatMessage extends grpc.MethodDefinition<protos_chat_service_pb.CreateChatMessageRequest, protos_chat_service_pb.ChatMessage> {
    path: "/backend.chat_service.ChatService/CreateChatMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_chat_service_pb.CreateChatMessageRequest>;
    requestDeserialize: grpc.deserialize<protos_chat_service_pb.CreateChatMessageRequest>;
    responseSerialize: grpc.serialize<protos_chat_service_pb.ChatMessage>;
    responseDeserialize: grpc.deserialize<protos_chat_service_pb.ChatMessage>;
}
interface IChatServiceService_IGetChatMessages extends grpc.MethodDefinition<protos_chat_service_pb.GetChatMessagesRequest, protos_chat_service_pb.ChatMessages> {
    path: "/backend.chat_service.ChatService/GetChatMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_chat_service_pb.GetChatMessagesRequest>;
    requestDeserialize: grpc.deserialize<protos_chat_service_pb.GetChatMessagesRequest>;
    responseSerialize: grpc.serialize<protos_chat_service_pb.ChatMessages>;
    responseDeserialize: grpc.deserialize<protos_chat_service_pb.ChatMessages>;
}
interface IChatServiceService_ISearchChatMessages extends grpc.MethodDefinition<protos_chat_service_pb.SearchChatMessagesRequest, protos_chat_service_pb.ChatMessages> {
    path: "/backend.chat_service.ChatService/SearchChatMessages";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_chat_service_pb.SearchChatMessagesRequest>;
    requestDeserialize: grpc.deserialize<protos_chat_service_pb.SearchChatMessagesRequest>;
    responseSerialize: grpc.serialize<protos_chat_service_pb.ChatMessages>;
    responseDeserialize: grpc.deserialize<protos_chat_service_pb.ChatMessages>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer extends grpc.UntypedServiceImplementation {
    createConversation: grpc.handleUnaryCall<protos_chat_service_pb.CreateConversationRequest, protos_chat_service_pb.Conversation>;
    findConversation: grpc.handleUnaryCall<protos_chat_service_pb.FindConversationRequest, protos_chat_service_pb.Conversation>;
    searchConversations: grpc.handleUnaryCall<protos_chat_service_pb.SearchConversationsRequest, protos_chat_service_pb.Conversations>;
    createChatMessage: grpc.handleUnaryCall<protos_chat_service_pb.CreateChatMessageRequest, protos_chat_service_pb.ChatMessage>;
    getChatMessages: grpc.handleUnaryCall<protos_chat_service_pb.GetChatMessagesRequest, protos_chat_service_pb.ChatMessages>;
    searchChatMessages: grpc.handleUnaryCall<protos_chat_service_pb.SearchChatMessagesRequest, protos_chat_service_pb.ChatMessages>;
}

export interface IChatServiceClient {
    createConversation(request: protos_chat_service_pb.CreateConversationRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    createConversation(request: protos_chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    createConversation(request: protos_chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    findConversation(request: protos_chat_service_pb.FindConversationRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    findConversation(request: protos_chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    findConversation(request: protos_chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    searchConversations(request: protos_chat_service_pb.SearchConversationsRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    searchConversations(request: protos_chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    searchConversations(request: protos_chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    createChatMessage(request: protos_chat_service_pb.CreateChatMessageRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessage) => void): grpc.ClientUnaryCall;
    createChatMessage(request: protos_chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessage) => void): grpc.ClientUnaryCall;
    createChatMessage(request: protos_chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessage) => void): grpc.ClientUnaryCall;
    getChatMessages(request: protos_chat_service_pb.GetChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    getChatMessages(request: protos_chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    getChatMessages(request: protos_chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    searchChatMessages(request: protos_chat_service_pb.SearchChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    searchChatMessages(request: protos_chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    searchChatMessages(request: protos_chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createConversation(request: protos_chat_service_pb.CreateConversationRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public createConversation(request: protos_chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public createConversation(request: protos_chat_service_pb.CreateConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public findConversation(request: protos_chat_service_pb.FindConversationRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public findConversation(request: protos_chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public findConversation(request: protos_chat_service_pb.FindConversationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversation) => void): grpc.ClientUnaryCall;
    public searchConversations(request: protos_chat_service_pb.SearchConversationsRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    public searchConversations(request: protos_chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    public searchConversations(request: protos_chat_service_pb.SearchConversationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.Conversations) => void): grpc.ClientUnaryCall;
    public createChatMessage(request: protos_chat_service_pb.CreateChatMessageRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessage) => void): grpc.ClientUnaryCall;
    public createChatMessage(request: protos_chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessage) => void): grpc.ClientUnaryCall;
    public createChatMessage(request: protos_chat_service_pb.CreateChatMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessage) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: protos_chat_service_pb.GetChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: protos_chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public getChatMessages(request: protos_chat_service_pb.GetChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public searchChatMessages(request: protos_chat_service_pb.SearchChatMessagesRequest, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public searchChatMessages(request: protos_chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
    public searchChatMessages(request: protos_chat_service_pb.SearchChatMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_chat_service_pb.ChatMessages) => void): grpc.ClientUnaryCall;
}
