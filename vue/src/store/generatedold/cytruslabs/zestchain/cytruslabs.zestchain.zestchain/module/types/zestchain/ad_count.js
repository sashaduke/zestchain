/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cytruslabs.zestchain.zestchain";
const baseAdCount = { counter: 0 };
export const AdCount = {
    encode(message, writer = Writer.create()) {
        if (message.counter !== 0) {
            writer.uint32(8).uint64(message.counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAdCount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.counter = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAdCount };
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = Number(object.counter);
        }
        else {
            message.counter = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.counter !== undefined && (obj.counter = message.counter);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAdCount };
        if (object.counter !== undefined && object.counter !== null) {
            message.counter = object.counter;
        }
        else {
            message.counter = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
