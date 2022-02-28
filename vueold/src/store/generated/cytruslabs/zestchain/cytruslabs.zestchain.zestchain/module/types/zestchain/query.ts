/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../zestchain/params";
import { PromoCount } from "../zestchain/promo_count";
import { Promo } from "../zestchain/promo";
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

export interface QueryGetPromoCountRequest {}

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

const baseQueryGetPromoCountRequest: object = {};

export const QueryGetPromoCountRequest = {
  encode(
    _: QueryGetPromoCountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPromoCountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPromoCountRequest,
    } as QueryGetPromoCountRequest;
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

  fromJSON(_: any): QueryGetPromoCountRequest {
    const message = {
      ...baseQueryGetPromoCountRequest,
    } as QueryGetPromoCountRequest;
    return message;
  },

  toJSON(_: QueryGetPromoCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetPromoCountRequest>
  ): QueryGetPromoCountRequest {
    const message = {
      ...baseQueryGetPromoCountRequest,
    } as QueryGetPromoCountRequest;
    return message;
  },
};

const baseQueryGetPromoCountResponse: object = {};

export const QueryGetPromoCountResponse = {
  encode(
    message: QueryGetPromoCountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.PromoCount !== undefined) {
      PromoCount.encode(message.PromoCount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPromoCountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPromoCountResponse,
    } as QueryGetPromoCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.PromoCount = PromoCount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPromoCountResponse {
    const message = {
      ...baseQueryGetPromoCountResponse,
    } as QueryGetPromoCountResponse;
    if (object.PromoCount !== undefined && object.PromoCount !== null) {
      message.PromoCount = PromoCount.fromJSON(object.PromoCount);
    } else {
      message.PromoCount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPromoCountResponse): unknown {
    const obj: any = {};
    message.PromoCount !== undefined &&
      (obj.PromoCount = message.PromoCount
        ? PromoCount.toJSON(message.PromoCount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPromoCountResponse>
  ): QueryGetPromoCountResponse {
    const message = {
      ...baseQueryGetPromoCountResponse,
    } as QueryGetPromoCountResponse;
    if (object.PromoCount !== undefined && object.PromoCount !== null) {
      message.PromoCount = PromoCount.fromPartial(object.PromoCount);
    } else {
      message.PromoCount = undefined;
    }
    return message;
  },
};

const baseQueryGetPromoRequest: object = { index: "" };

export const QueryGetPromoRequest = {
  encode(
    message: QueryGetPromoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPromoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPromoRequest } as QueryGetPromoRequest;
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

  fromJSON(object: any): QueryGetPromoRequest {
    const message = { ...baseQueryGetPromoRequest } as QueryGetPromoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetPromoRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPromoRequest>): QueryGetPromoRequest {
    const message = { ...baseQueryGetPromoRequest } as QueryGetPromoRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetPromoResponse: object = {};

export const QueryGetPromoResponse = {
  encode(
    message: QueryGetPromoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.promo !== undefined) {
      Promo.encode(message.promo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPromoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPromoResponse } as QueryGetPromoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.promo = Promo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPromoResponse {
    const message = { ...baseQueryGetPromoResponse } as QueryGetPromoResponse;
    if (object.promo !== undefined && object.promo !== null) {
      message.promo = Promo.fromJSON(object.promo);
    } else {
      message.promo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPromoResponse): unknown {
    const obj: any = {};
    message.promo !== undefined &&
      (obj.promo = message.promo ? Promo.toJSON(message.promo) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPromoResponse>
  ): QueryGetPromoResponse {
    const message = { ...baseQueryGetPromoResponse } as QueryGetPromoResponse;
    if (object.promo !== undefined && object.promo !== null) {
      message.promo = Promo.fromPartial(object.promo);
    } else {
      message.promo = undefined;
    }
    return message;
  },
};

const baseQueryAllPromoRequest: object = {};

export const QueryAllPromoRequest = {
  encode(
    message: QueryAllPromoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPromoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPromoRequest } as QueryAllPromoRequest;
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

  fromJSON(object: any): QueryAllPromoRequest {
    const message = { ...baseQueryAllPromoRequest } as QueryAllPromoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPromoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPromoRequest>): QueryAllPromoRequest {
    const message = { ...baseQueryAllPromoRequest } as QueryAllPromoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPromoResponse: object = {};

export const QueryAllPromoResponse = {
  encode(
    message: QueryAllPromoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.promo) {
      Promo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPromoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPromoResponse } as QueryAllPromoResponse;
    message.promo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.promo.push(Promo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPromoResponse {
    const message = { ...baseQueryAllPromoResponse } as QueryAllPromoResponse;
    message.promo = [];
    if (object.promo !== undefined && object.promo !== null) {
      for (const e of object.promo) {
        message.promo.push(Promo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPromoResponse): unknown {
    const obj: any = {};
    if (message.promo) {
      obj.promo = message.promo.map((e) => (e ? Promo.toJSON(e) : undefined));
    } else {
      obj.promo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPromoResponse>
  ): QueryAllPromoResponse {
    const message = { ...baseQueryAllPromoResponse } as QueryAllPromoResponse;
    message.promo = [];
    if (object.promo !== undefined && object.promo !== null) {
      for (const e of object.promo) {
        message.promo.push(Promo.fromPartial(e));
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
  /** Queries a PromoCount by index. */
  PromoCount(
    request: QueryGetPromoCountRequest
  ): Promise<QueryGetPromoCountResponse>;
  /** Queries a Promo by index. */
  Promo(request: QueryGetPromoRequest): Promise<QueryGetPromoResponse>;
  /** Queries a list of Promo items. */
  PromoAll(request: QueryAllPromoRequest): Promise<QueryAllPromoResponse>;
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

  PromoCount(
    request: QueryGetPromoCountRequest
  ): Promise<QueryGetPromoCountResponse> {
    const data = QueryGetPromoCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "PromoCount",
      data
    );
    return promise.then((data) =>
      QueryGetPromoCountResponse.decode(new Reader(data))
    );
  }

  Promo(request: QueryGetPromoRequest): Promise<QueryGetPromoResponse> {
    const data = QueryGetPromoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "Promo",
      data
    );
    return promise.then((data) =>
      QueryGetPromoResponse.decode(new Reader(data))
    );
  }

  PromoAll(request: QueryAllPromoRequest): Promise<QueryAllPromoResponse> {
    const data = QueryAllPromoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Query",
      "PromoAll",
      data
    );
    return promise.then((data) =>
      QueryAllPromoResponse.decode(new Reader(data))
    );
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
