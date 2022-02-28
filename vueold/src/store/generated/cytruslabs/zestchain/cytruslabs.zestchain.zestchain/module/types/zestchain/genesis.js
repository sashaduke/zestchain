/* eslint-disable */
import { Params } from "../zestchain/params";
import { PromoCount } from "../zestchain/promo_count";
import { Promo } from "../zestchain/promo";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cytruslabs.zestchain.zestchain";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.promoCount !== undefined) {
            PromoCount.encode(message.promoCount, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.promoList) {
            Promo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.promoList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.promoCount = PromoCount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.promoList.push(Promo.decode(reader, reader.uint32()));
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
        message.promoList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.promoCount !== undefined && object.promoCount !== null) {
            message.promoCount = PromoCount.fromJSON(object.promoCount);
        }
        else {
            message.promoCount = undefined;
        }
        if (object.promoList !== undefined && object.promoList !== null) {
            for (const e of object.promoList) {
                message.promoList.push(Promo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.promoCount !== undefined &&
            (obj.promoCount = message.promoCount
                ? PromoCount.toJSON(message.promoCount)
                : undefined);
        if (message.promoList) {
            obj.promoList = message.promoList.map((e) => e ? Promo.toJSON(e) : undefined);
        }
        else {
            obj.promoList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.promoList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.promoCount !== undefined && object.promoCount !== null) {
            message.promoCount = PromoCount.fromPartial(object.promoCount);
        }
        else {
            message.promoCount = undefined;
        }
        if (object.promoList !== undefined && object.promoList !== null) {
            for (const e of object.promoList) {
                message.promoList.push(Promo.fromPartial(e));
            }
        }
        return message;
    },
};
