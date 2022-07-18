import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../zestchain/params";
import { AdCount } from "../zestchain/ad_count";
import { Ad } from "../zestchain/ad";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetAdCountRequest {
}
export interface QueryGetAdCountResponse {
    AdCount: AdCount | undefined;
}
export interface QueryGetAdRequest {
    index: string;
}
export interface QueryGetAdResponse {
    ad: Ad | undefined;
}
export interface QueryAllAdRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllAdResponse {
    ad: Ad[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetAdCountRequest: {
    encode(_: QueryGetAdCountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAdCountRequest;
    fromJSON(_: any): QueryGetAdCountRequest;
    toJSON(_: QueryGetAdCountRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetAdCountRequest>): QueryGetAdCountRequest;
};
export declare const QueryGetAdCountResponse: {
    encode(message: QueryGetAdCountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAdCountResponse;
    fromJSON(object: any): QueryGetAdCountResponse;
    toJSON(message: QueryGetAdCountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAdCountResponse>): QueryGetAdCountResponse;
};
export declare const QueryGetAdRequest: {
    encode(message: QueryGetAdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAdRequest;
    fromJSON(object: any): QueryGetAdRequest;
    toJSON(message: QueryGetAdRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAdRequest>): QueryGetAdRequest;
};
export declare const QueryGetAdResponse: {
    encode(message: QueryGetAdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAdResponse;
    fromJSON(object: any): QueryGetAdResponse;
    toJSON(message: QueryGetAdResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAdResponse>): QueryGetAdResponse;
};
export declare const QueryAllAdRequest: {
    encode(message: QueryAllAdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAdRequest;
    fromJSON(object: any): QueryAllAdRequest;
    toJSON(message: QueryAllAdRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAdRequest>): QueryAllAdRequest;
};
export declare const QueryAllAdResponse: {
    encode(message: QueryAllAdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAdResponse;
    fromJSON(object: any): QueryAllAdResponse;
    toJSON(message: QueryAllAdResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllAdResponse>): QueryAllAdResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a AdCount by index. */
    AdCount(request: QueryGetAdCountRequest): Promise<QueryGetAdCountResponse>;
    /** Queries a Ad by index. */
    Ad(request: QueryGetAdRequest): Promise<QueryGetAdResponse>;
    /** Queries a list of Ad items. */
    AdAll(request: QueryAllAdRequest): Promise<QueryAllAdResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    AdCount(request: QueryGetAdCountRequest): Promise<QueryGetAdCountResponse>;
    Ad(request: QueryGetAdRequest): Promise<QueryGetAdResponse>;
    AdAll(request: QueryAllAdRequest): Promise<QueryAllAdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
