/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cytruslabs.zestchain.zestchain";

export interface Promo {
  index: string;
  creator: string;
  pot: number;
  url: string;
  title: string;
  msg: string;
  tags: string;
  prefs: string;
}

const basePromo: object = {
  index: "",
  creator: "",
  pot: 0,
  url: "",
  title: "",
  msg: "",
  tags: "",
  prefs: "",
};

export const Promo = {
  encode(message: Promo, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.pot !== 0) {
      writer.uint32(24).uint64(message.pot);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.msg !== "") {
      writer.uint32(50).string(message.msg);
    }
    if (message.tags !== "") {
      writer.uint32(58).string(message.tags);
    }
    if (message.prefs !== "") {
      writer.uint32(66).string(message.prefs);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Promo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePromo } as Promo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.pot = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.msg = reader.string();
          break;
        case 7:
          message.tags = reader.string();
          break;
        case 8:
          message.prefs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Promo {
    const message = { ...basePromo } as Promo;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
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

  toJSON(message: Promo): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.creator !== undefined && (obj.creator = message.creator);
    message.pot !== undefined && (obj.pot = message.pot);
    message.url !== undefined && (obj.url = message.url);
    message.title !== undefined && (obj.title = message.title);
    message.msg !== undefined && (obj.msg = message.msg);
    message.tags !== undefined && (obj.tags = message.tags);
    message.prefs !== undefined && (obj.prefs = message.prefs);
    return obj;
  },

  fromPartial(object: DeepPartial<Promo>): Promo {
    const message = { ...basePromo } as Promo;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
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
