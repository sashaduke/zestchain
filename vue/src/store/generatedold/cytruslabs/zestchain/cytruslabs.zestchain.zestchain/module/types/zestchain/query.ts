/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../zestchain/params";
import { AdCount } from "../zestchain/ad_count";
import { Ad } from "../zestchain/ad";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "cytruslabs.zestchain.zestchain";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAdCountRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetAdCountRequest: object = {};

export const QueryGetAdCountRequest = {
  encode(_: QueryGetAdCountRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdCountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdCountRequest } as QueryGetAdCountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetAdCountRequest {
    const message = { ...baseQueryGetAdCountRequest } as QueryGetAdCountRequest;
    return message;
  },

  toJSON(_: QueryGetAdCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetAdCountRequest>): QueryGetAdCountRequest {
    const message = { ...baseQueryGetAdCountRequest } as QueryGetAdCountRequest;
    return message;
  },
};

const baseQueryGetAdCountResponse: object = {};

export const QueryGetAdCountResponse = {
  encode(
    message: QueryGetAdCountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.AdCount !== undefined) {
      AdCount.encode(message.AdCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdCountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAdCountResponse,
    } as QueryGetAdCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AdCount = AdCount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAdCountResponse {
    const message = {
      ...baseQueryGetAdCountResponse,
    } as QueryGetAdCountResponse;
    if (object.AdCount !== undefined && object.AdCount !== null) {
      message.AdCount = AdCount.fromJSON(object.AdCount);
    } else {
      message.AdCount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAdCountResponse): unknown {
    const obj: any = {};
    message.AdCount !== undefined &&
      (obj.AdCount = message.AdCount
        ? AdCount.toJSON(message.AdCount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAdCountResponse>
  ): QueryGetAdCountResponse {
    const message = {
      ...baseQueryGetAdCountResponse,
    } as QueryGetAdCountResponse;
    if (object.AdCount !== undefined && object.AdCount !== null) {
      message.AdCount = AdCount.fromPartial(object.AdCount);
    } else {
      message.AdCount = undefined;
    }
    return message;
  },
};

const baseQueryGetAdRequest: object = { index: "" };

export const QueryGetAdRequest = {
  encode(message: QueryGetAdRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdRequest } as QueryGetAdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAdRequest {
    const message = { ...baseQueryGetAdRequest } as QueryGetAdRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetAdRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetAdRequest>): QueryGetAdRequest {
    const message = { ...baseQueryGetAdRequest } as QueryGetAdRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetAdResponse: object = {};

export const QueryGetAdResponse = {
  encode(
    message: QueryGetAdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ad !== undefined) {
      Ad.encode(message.ad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAdResponse } as QueryGetAdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ad = Ad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAdResponse {
    const message = { ...baseQueryGetAdResponse } as QueryGetAdResponse;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromJSON(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAdResponse): unknown {
    const obj: any = {};
    message.ad !== undefined &&
      (obj.ad = message.ad ? Ad.toJSON(message.ad) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetAdResponse>): QueryGetAdResponse {
    const message = { ...baseQueryGetAdResponse } as QueryGetAdResponse;
    if (object.ad !== undefined && object.ad !== null) {
      message.ad = Ad.fromPartial(object.ad);
    } else {
      message.ad = undefined;
    }
    return message;
  },
};

const baseQueryAllAdRequest: object = {};

export const QueryAllAdRequest = {
  encode(message: QueryAllAdRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAdRequest } as QueryAllAdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAdRequest {
    const message = { ...baseQueryAllAdRequest } as QueryAllAdRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAdRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllAdRequest>): QueryAllAdRequest {
    const message = { ...baseQueryAllAdRequest } as QueryAllAdRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAdResponse: object = {};

export const QueryAllAdResponse = {
  encode(
    message: QueryAllAdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ad) {
      Ad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAdResponse } as QueryAllAdResponse;
    message.ad = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ad.push(Ad.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAdResponse {
    const message = { ...baseQueryAllAdResponse } as QueryAllAdResponse;
    message.ad = [];
    if (object.ad !== undefined && object.ad !== null) {
      for (const e of object.ad) {
        message.ad.push(Ad.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAdResponse): unknown {
    const obj: any = {};
    if (message.ad) {
      obj.ad = message.ad.map((e) => (e ? Ad.toJSON(e) : undefined));
    } else {
      obj.ad = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllAdResponse>): QueryAllAdResponse {
    const message = { ...baseQueryAllAdResponse } as QueryAllAdResponse;
    message.ad = [];
    if (object.ad !== undefined && object.ad !== null) {
      for (const e of object.ad) {
        message.ad.push(Ad.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
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

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  AdCount(request: QueryGetAdCountRequest): Promise<QueryGetAdCountResponse> {
    const data = QueryGetAdCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "AdCount",
      data
    );
    return promise.then((data) =>
      QueryGetAdCountResponse.decode(new Reader(data))
    );
  }

  Ad(request: QueryGetAdRequest): Promise<QueryGetAdResponse> {
    const data = QueryGetAdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "Ad",
      data
    );
    return promise.then((data) => QueryGetAdResponse.decode(new Reader(data)));
  }

  AdAll(request: QueryAllAdRequest): Promise<QueryAllAdResponse> {
    const data = QueryAllAdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "AdAll",
      data
    );
    return promise.then((data) => QueryAllAdResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
