/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "cytruslabs.zestchain.zestchain";

export interface MsgCreateAd {
  creator: string;
  title: string;
  pot: string;
  url: string;
  msg: string;
  tags: string;
  prefs: string;
}

export interface MsgCreateAdResponse {
  counter: string;
}

const baseMsgCreateAd: object = {
  creator: "",
  title: "",
  pot: "",
  url: "",
  msg: "",
  tags: "",
  prefs: "",
};

export const MsgCreateAd = {
  encode(message: MsgCreateAd, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.pot !== "") {
      writer.uint32(26).string(message.pot);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.msg !== "") {
      writer.uint32(42).string(message.msg);
    }
    if (message.tags !== "") {
      writer.uint32(50).string(message.tags);
    }
    if (message.prefs !== "") {
      writer.uint32(58).string(message.prefs);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAd {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAd } as MsgCreateAd;
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
          message.pot = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.msg = reader.string();
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

  fromJSON(object: any): MsgCreateAd {
    const message = { ...baseMsgCreateAd } as MsgCreateAd;
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
      message.pot = String(object.pot);
    } else {
      message.pot = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
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

  toJSON(message: MsgCreateAd): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.pot !== undefined && (obj.pot = message.pot);
    message.url !== undefined && (obj.url = message.url);
    message.msg !== undefined && (obj.msg = message.msg);
    message.tags !== undefined && (obj.tags = message.tags);
    message.prefs !== undefined && (obj.prefs = message.prefs);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAd>): MsgCreateAd {
    const message = { ...baseMsgCreateAd } as MsgCreateAd;
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
      message.pot = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
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

const baseMsgCreateAdResponse: object = { counter: "" };

export const MsgCreateAdResponse = {
  encode(
    message: MsgCreateAdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.counter !== "") {
      writer.uint32(10).string(message.counter);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAdResponse } as MsgCreateAdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAdResponse {
    const message = { ...baseMsgCreateAdResponse } as MsgCreateAdResponse;
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = String(object.counter);
    } else {
      message.counter = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAdResponse): unknown {
    const obj: any = {};
    message.counter !== undefined && (obj.counter = message.counter);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAdResponse>): MsgCreateAdResponse {
    const message = { ...baseMsgCreateAdResponse } as MsgCreateAdResponse;
    if (object.counter !== undefined && object.counter !== null) {
      message.counter = object.counter;
    } else {
      message.counter = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateAd(request: MsgCreateAd): Promise<MsgCreateAdResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateAd(request: MsgCreateAd): Promise<MsgCreateAdResponse> {
    const data = MsgCreateAd.encode(request).finish();
    const promise = this.rpc.request(
      "cytruslabs.zestchain.zestchain.Msg",
      "CreateAd",
      data
    );
    return promise.then((data) => MsgCreateAdResponse.decode(new Reader(data)));
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
