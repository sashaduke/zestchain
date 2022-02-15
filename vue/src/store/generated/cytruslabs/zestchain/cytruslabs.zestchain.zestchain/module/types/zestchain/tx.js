/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "cytruslabs.zestchain.zestchain";
const baseMsgCreateAd = {
    creator: "",
    title: "",
    pot: "",
    url: "",
    msg: "",
    tags: "",
    prefs: "",
};
export const MsgCreateAd = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAd };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateAd };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.pot !== undefined && object.pot !== null) {
            message.pot = String(object.pot);
        }
        else {
            message.pot = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        if (object.tags !== undefined && object.tags !== null) {
            message.tags = String(object.tags);
        }
        else {
            message.tags = "";
        }
        if (object.prefs !== undefined && object.prefs !== null) {
            message.prefs = String(object.prefs);
        }
        else {
            message.prefs = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.title !== undefined && (obj.title = message.title);
        message.pot !== undefined && (obj.pot = message.pot);
        message.url !== undefined && (obj.url = message.url);
        message.msg !== undefined && (obj.msg = message.msg);
        message.tags !== undefined && (obj.tags = message.tags);
        message.prefs !== undefined && (obj.prefs = message.prefs);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAd };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.pot !== undefined && object.pot !== null) {
            message.pot = object.pot;
        }
        else {
            message.pot = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        if (object.tags !== undefined && object.tags !== null) {
            message.tags = object.tags;
        }
        else {
            message.tags = "";
        }
        if (object.prefs !== undefined && object.prefs !== null) {
            message.prefs = object.prefs;
        }
        else {
            message.prefs = "";
        }
        return message;
    },
};
const baseMsgCreateAdResponse = { counter: "" };
export const MsgCreateAdResponse = {
    encode(message, writer = Writer.create()) {
        if (message.counter !== "") {
            writer.uint32(10).string(message.counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAdResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateAdResponse };
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = String(object.counter);
        }
        else {
            message.counter = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.counter !== undefined && (obj.counter = message.counter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAdResponse };
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = object.counter;
        }
        else {
            message.counter = "";
        }
        return message;
    },
};
const baseMsgPayView = { creator: "", id: "" };
export const MsgPayView = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPayView };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgPayView };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgPayView };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
};
const baseMsgPayViewResponse = {};
export const MsgPayViewResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPayViewResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgPayViewResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgPayViewResponse };
        return message;
    },
};
const baseMsgPayClick = { creator: "", id: "" };
export const MsgPayClick = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPayClick };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgPayClick };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgPayClick };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    },
};
const baseMsgPayClickResponse = {};
export const MsgPayClickResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgPayClickResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgPayClickResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgPayClickResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateAd(request) {
        const data = MsgCreateAd.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Msg", "CreateAd", data);
        return promise.then((data) => MsgCreateAdResponse.decode(new Reader(data)));
    }
    PayView(request) {
        const data = MsgPayView.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Msg", "PayView", data);
        return promise.then((data) => MsgPayViewResponse.decode(new Reader(data)));
    }
    PayClick(request) {
        const data = MsgPayClick.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Msg", "PayClick", data);
        return promise.then((data) => MsgPayClickResponse.decode(new Reader(data)));
    }
}
