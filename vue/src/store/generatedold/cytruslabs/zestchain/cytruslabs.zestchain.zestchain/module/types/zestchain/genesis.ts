/* eslint-disable */
import { Params } from "../zestchain/params";
import { AdCount } from "../zestchain/ad_count";
import { Ad } from "../zestchain/ad";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cytruslabs.zestchain.zestchain";

/** GenesisState defines the zestchain module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  adCount: AdCount | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  adList: Ad[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.adCount !== undefined) {
      AdCount.encode(message.adCount, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.adList) {
      Ad.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.adList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.adCount = AdCount.decode(reader, reader.uint32());
          break;
        case 3:
          message.adList.push(Ad.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.adList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.adCount !== undefined && object.adCount !== null) {
      message.adCount = AdCount.fromJSON(object.adCount);
    } else {
      message.adCount = undefined;
    }
    if (object.adList !== undefined && object.adList !== null) {
      for (const e of object.adList) {
        message.adList.push(Ad.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.adCount !== undefined &&
      (obj.adCount = message.adCount
        ? AdCount.toJSON(message.adCount)
        : undefined);
    if (message.adList) {
      obj.adList = message.adList.map((e) => (e ? Ad.toJSON(e) : undefined));
    } else {
      obj.adList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.adList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.adCount !== undefined && object.adCount !== null) {
      message.adCount = AdCount.fromPartial(object.adCount);
    } else {
      message.adCount = undefined;
    }
    if (object.adList !== undefined && object.adList !== null) {
      for (const e of object.adList) {
        message.adList.push(Ad.fromPartial(e));
      }
    }
    return message;
  },
};

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
