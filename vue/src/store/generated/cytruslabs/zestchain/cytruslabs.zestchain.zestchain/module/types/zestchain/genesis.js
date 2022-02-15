/* eslint-disable */
import { Params } from "../zestchain/params";
import { AdCount } from "../zestchain/ad_count";
import { Ad } from "../zestchain/ad";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cytruslabs.zestchain.zestchain";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.adCount !== undefined) {
            AdCount.encode(message.adCount, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.adList) {
            Ad.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
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
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.adList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.adCount !== undefined && object.adCount !== null) {
            message.adCount = AdCount.fromJSON(object.adCount);
        }
        else {
            message.adCount = undefined;
        }
        if (object.adList !== undefined && object.adList !== null) {
            for (const e of object.adList) {
                message.adList.push(Ad.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.adCount !== undefined &&
            (obj.adCount = message.adCount
                ? AdCount.toJSON(message.adCount)
                : undefined);
        if (message.adList) {
            obj.adList = message.adList.map((e) => (e ? Ad.toJSON(e) : undefined));
        }
        else {
            obj.adList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.adList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.adCount !== undefined && object.adCount !== null) {
            message.adCount = AdCount.fromPartial(object.adCount);
        }
        else {
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
