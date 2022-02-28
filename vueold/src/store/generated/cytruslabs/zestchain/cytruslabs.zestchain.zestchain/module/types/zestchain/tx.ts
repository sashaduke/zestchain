/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "cytruslabs.zestchain.zestchain";

export interface MsgCreatePromo {
  creator: string;
  title: string;
  pot: number;
  url: string;
  message: string;
  tags: string;
  prefs: string;
}

export interface MsgCreatePromoResponse {
  total: string;
}

export interface MsgPromoViewed {
  creator: string;
  id: string;
  addr: string;
}

export interface MsgPromoViewedResponse {}

export interface MsgPromoClicked {
  creator: string;
  id: string;
  addr: string;
}

export interface MsgPromoClickedResponse {}

const baseMsgCreatePromo: object = {
  creator: "",
  title: "",
  pot: 0,
  url: "",
  message: "",
  tags: "",
  prefs: "",
};

export const MsgCreatePromo = {
  encode(message: MsgCreatePromo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.pot !== 0) {
      writer.uint32(24).uint64(message.pot);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.message !== "") {
      writer.uint32(42).string(message.message);
    }
    if (message.tags !== "") {
      writer.uint32(50).string(message.tags);
    }
    if (message.prefs !== "") {
      writer.uint32(58).string(message.prefs);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePromo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePromo } as MsgCreatePromo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.pot = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.message = reader.string();
          break;
        case 6:
          message.tags = reader.string();
          break;
        case 7:
          message.prefs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePromo {
    const message = { ...baseMsgCreatePromo } as MsgCreatePromo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.pot !== undefined && object.pot !== null) {
      message.pot = Number(object.pot);
    } else {
      message.pot = 0;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = String(object.tags);
    } else {
      message.tags = "";
    }
    if (object.prefs !== undefined && object.prefs !== null) {
      message.prefs = String(object.prefs);
    } else {
      message.prefs = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePromo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.pot !== undefined && (obj.pot = message.pot);
    message.url !== undefined && (obj.url = message.url);
    message.message !== undefined && (obj.message = message.message);
    message.tags !== undefined && (obj.tags = message.tags);
    message.prefs !== undefined && (obj.prefs = message.prefs);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePromo>): MsgCreatePromo {
    const message = { ...baseMsgCreatePromo } as MsgCreatePromo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.pot !== undefined && object.pot !== null) {
      message.pot = object.pot;
    } else {
      message.pot = 0;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = object.tags;
    } else {
      message.tags = "";
    }
    if (object.prefs !== undefined && object.prefs !== null) {
      message.prefs = object.prefs;
    } else {
      message.prefs = "";
    }
    return message;
  },
};

const baseMsgCreatePromoResponse: object = { total: "" };

export const MsgCreatePromoResponse = {
  encode(
    message: MsgCreatePromoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.total !== "") {
      writer.uint32(10).string(message.total);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePromoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePromoResponse } as MsgCreatePromoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePromoResponse {
    const message = { ...baseMsgCreatePromoResponse } as MsgCreatePromoResponse;
    if (object.total !== undefined && object.total !== null) {
      message.total = String(object.total);
    } else {
      message.total = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePromoResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePromoResponse>
  ): MsgCreatePromoResponse {
    const message = { ...baseMsgCreatePromoResponse } as MsgCreatePromoResponse;
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    } else {
      message.total = "";
    }
    return message;
  },
};

const baseMsgPromoViewed: object = { creator: "", id: "", addr: "" };

export const MsgPromoViewed = {
  encode(message: MsgPromoViewed, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.addr !== "") {
      writer.uint32(26).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPromoViewed {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPromoViewed } as MsgPromoViewed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPromoViewed {
    const message = { ...baseMsgPromoViewed } as MsgPromoViewed;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: MsgPromoViewed): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPromoViewed>): MsgPromoViewed {
    const message = { ...baseMsgPromoViewed } as MsgPromoViewed;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseMsgPromoViewedResponse: object = {};

export const MsgPromoViewedResponse = {
  encode(_: MsgPromoViewedResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPromoViewedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPromoViewedResponse } as MsgPromoViewedResponse;
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

  fromJSON(_: any): MsgPromoViewedResponse {
    const message = { ...baseMsgPromoViewedResponse } as MsgPromoViewedResponse;
    return message;
  },

  toJSON(_: MsgPromoViewedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPromoViewedResponse>): MsgPromoViewedResponse {
    const message = { ...baseMsgPromoViewedResponse } as MsgPromoViewedResponse;
    return message;
  },
};

const baseMsgPromoClicked: object = { creator: "", id: "", addr: "" };

export const MsgPromoClicked = {
  encode(message: MsgPromoClicked, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.addr !== "") {
      writer.uint32(26).string(message.addr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPromoClicked {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPromoClicked } as MsgPromoClicked;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPromoClicked {
    const message = { ...baseMsgPromoClicked } as MsgPromoClicked;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = String(object.addr);
    } else {
      message.addr = "";
    }
    return message;
  },

  toJSON(message: MsgPromoClicked): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPromoClicked>): MsgPromoClicked {
    const message = { ...baseMsgPromoClicked } as MsgPromoClicked;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.addr !== undefined && object.addr !== null) {
      message.addr = object.addr;
    } else {
      message.addr = "";
    }
    return message;
  },
};

const baseMsgPromoClickedResponse: object = {};

export const MsgPromoClickedResponse = {
  encode(_: MsgPromoClickedResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPromoClickedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgPromoClickedResponse,
    } as MsgPromoClickedResponse;
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

  fromJSON(_: any): MsgPromoClickedResponse {
    const message = {
      ...baseMsgPromoClickedResponse,
    } as MsgPromoClickedResponse;
    return message;
  },

  toJSON(_: MsgPromoClickedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgPromoClickedResponse>
  ): MsgPromoClickedResponse {
    const message = {
      ...baseMsgPromoClickedResponse,
    } as MsgPromoClickedResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePromo(request: MsgCreatePromo): Promise<MsgCreatePromoResponse>;
  PromoViewed(request: MsgPromoViewed): Promise<MsgPromoViewedResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  PromoClicked(request: MsgPromoClicked): Promise<MsgPromoClickedResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePromo(request: MsgCreatePromo): Promise<MsgCreatePromoResponse> {
    const data = MsgCreatePromo.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Msg",
      "CreatePromo",
      data
    );
    return promise.then((data) =>
      MsgCreatePromoResponse.decode(new Reader(data))
    );
  }

  PromoViewed(request: MsgPromoViewed): Promise<MsgPromoViewedResponse> {
    const data = MsgPromoViewed.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Msg",
      "PromoViewed",
      data
    );
    return promise.then((data) =>
      MsgPromoViewedResponse.decode(new Reader(data))
    );
  }

  PromoClicked(request: MsgPromoClicked): Promise<MsgPromoClickedResponse> {
    const data = MsgPromoClicked.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Msg",
      "PromoClicked",
      data
    );
    return promise.then((data) =>
      MsgPromoClickedResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
