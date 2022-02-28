import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../zestchain/params";
import { PromoCount } from "../zestchain/promo_count";
import { Promo } from "../zestchain/promo";
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
export interface QueryGetPromoCountRequest {
}
export interface QueryGetPromoCountResponse {
    PromoCount: PromoCount | undefined;
}
export interface QueryGetPromoRequest {
    index: string;
}
export interface QueryGetPromoResponse {
    promo: Promo | undefined;
}
export interface QueryAllPromoRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPromoResponse {
    promo: Promo[];
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
export declare const QueryGetPromoCountRequest: {
    encode(_: QueryGetPromoCountRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPromoCountRequest;
    fromJSON(_: any): QueryGetPromoCountRequest;
    toJSON(_: QueryGetPromoCountRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetPromoCountRequest>): QueryGetPromoCountRequest;
};
export declare const QueryGetPromoCountResponse: {
    encode(message: QueryGetPromoCountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPromoCountResponse;
    fromJSON(object: any): QueryGetPromoCountResponse;
    toJSON(message: QueryGetPromoCountResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPromoCountResponse>): QueryGetPromoCountResponse;
};
export declare const QueryGetPromoRequest: {
    encode(message: QueryGetPromoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPromoRequest;
    fromJSON(object: any): QueryGetPromoRequest;
    toJSON(message: QueryGetPromoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPromoRequest>): QueryGetPromoRequest;
};
export declare const QueryGetPromoResponse: {
    encode(message: QueryGetPromoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPromoResponse;
    fromJSON(object: any): QueryGetPromoResponse;
    toJSON(message: QueryGetPromoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPromoResponse>): QueryGetPromoResponse;
};
export declare const QueryAllPromoRequest: {
    encode(message: QueryAllPromoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPromoRequest;
    fromJSON(object: any): QueryAllPromoRequest;
    toJSON(message: QueryAllPromoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPromoRequest>): QueryAllPromoRequest;
};
export declare const QueryAllPromoResponse: {
    encode(message: QueryAllPromoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPromoResponse;
    fromJSON(object: any): QueryAllPromoResponse;
    toJSON(message: QueryAllPromoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPromoResponse>): QueryAllPromoResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a PromoCount by index. */
    PromoCount(request: QueryGetPromoCountRequest): Promise<QueryGetPromoCountResponse>;
    /** Queries a Promo by index. */
    Promo(request: QueryGetPromoRequest): Promise<QueryGetPromoResponse>;
    /** Queries a list of Promo items. */
    PromoAll(request: QueryAllPromoRequest): Promise<QueryAllPromoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    PromoCount(request: QueryGetPromoCountRequest): Promise<QueryGetPromoCountResponse>;
    Promo(request: QueryGetPromoRequest): Promise<QueryGetPromoResponse>;
    PromoAll(request: QueryAllPromoRequest): Promise<QueryAllPromoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
