/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cytruslabs.zestchain.zestchain";

export interface AdCount {
  counter: number;
}

const baseAdCount: object = { counter: 0 };

export const AdCount = {
  encode(message: AdCount, writer: Writer = Writer.create()): Writer {
    if (message.counter !== 0) {
      writer.uint32(8).uint64(message.counter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AdCount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAdCount } as AdCount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdCount {
    const message = { ...baseAdCount } as AdCount;
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = Number(object.counter);
    } else {
      message.counter = 0;
    }
    return message;
  },

  toJSON(message: AdCount): unknown {
    const obj: any = {};
    message.counter !== undefined && (obj.counter = message.counter);
    return obj;
  },

  fromPartial(object: DeepPartial<AdCount>): AdCount {
    const message = { ...baseAdCount } as AdCount;
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = object.counter;
    } else {
      message.counter = 0;
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
