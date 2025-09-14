// package: backend.livestream_service
// file: livestream_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Livestream extends jspb.Message { 
    getId(): string;
    setId(value: string): Livestream;
    getStatus(): string;
    setStatus(value: string): Livestream;
    getTitle(): string;
    setTitle(value: string): Livestream;
    getThumbnail(): string;
    setThumbnail(value: string): Livestream;
    getHlsLink(): string;
    setHlsLink(value: string): Livestream;

    hasCreateTime(): boolean;
    clearCreateTime(): void;
    getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Livestream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Livestream.AsObject;
    static toObject(includeInstance: boolean, msg: Livestream): Livestream.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Livestream, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Livestream;
    static deserializeBinaryFromReader(message: Livestream, reader: jspb.BinaryReader): Livestream;
}

export namespace Livestream {
    export type AsObject = {
        id: string,
        status: string,
        title: string,
        thumbnail: string,
        hlsLink: string,
        createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Livestreams extends jspb.Message { 
    clearLivestreamsList(): void;
    getLivestreamsList(): Array<Livestream>;
    setLivestreamsList(value: Array<Livestream>): Livestreams;
    addLivestreams(value?: Livestream, index?: number): Livestream;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Livestreams.AsObject;
    static toObject(includeInstance: boolean, msg: Livestreams): Livestreams.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Livestreams, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Livestreams;
    static deserializeBinaryFromReader(message: Livestreams, reader: jspb.BinaryReader): Livestreams;
}

export namespace Livestreams {
    export type AsObject = {
        livestreamsList: Array<Livestream.AsObject>,
    }
}

export class CreateLivestreamRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): CreateLivestreamRequest;
    getThumbnail(): string;
    setThumbnail(value: string): CreateLivestreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateLivestreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateLivestreamRequest): CreateLivestreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateLivestreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateLivestreamRequest;
    static deserializeBinaryFromReader(message: CreateLivestreamRequest, reader: jspb.BinaryReader): CreateLivestreamRequest;
}

export namespace CreateLivestreamRequest {
    export type AsObject = {
        title: string,
        thumbnail: string,
    }
}

export class SearchLivestreamsRequest extends jspb.Message { 
    getTerm(): string;
    setTerm(value: string): SearchLivestreamsRequest;
    getStatus(): string;
    setStatus(value: string): SearchLivestreamsRequest;
    getPageNumber(): number;
    setPageNumber(value: number): SearchLivestreamsRequest;
    getPageSize(): number;
    setPageSize(value: number): SearchLivestreamsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchLivestreamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchLivestreamsRequest): SearchLivestreamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchLivestreamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchLivestreamsRequest;
    static deserializeBinaryFromReader(message: SearchLivestreamsRequest, reader: jspb.BinaryReader): SearchLivestreamsRequest;
}

export namespace SearchLivestreamsRequest {
    export type AsObject = {
        term: string,
        status: string,
        pageNumber: number,
        pageSize: number,
    }
}

export class FindLivestreamRequest extends jspb.Message { 
    getLivestreamId(): string;
    setLivestreamId(value: string): FindLivestreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindLivestreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindLivestreamRequest): FindLivestreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindLivestreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindLivestreamRequest;
    static deserializeBinaryFromReader(message: FindLivestreamRequest, reader: jspb.BinaryReader): FindLivestreamRequest;
}

export namespace FindLivestreamRequest {
    export type AsObject = {
        livestreamId: string,
    }
}

export class EndLivestreamRequest extends jspb.Message { 
    getLivestreamId(): string;
    setLivestreamId(value: string): EndLivestreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EndLivestreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EndLivestreamRequest): EndLivestreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EndLivestreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EndLivestreamRequest;
    static deserializeBinaryFromReader(message: EndLivestreamRequest, reader: jspb.BinaryReader): EndLivestreamRequest;
}

export namespace EndLivestreamRequest {
    export type AsObject = {
        livestreamId: string,
    }
}
