/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../zestchain/params";
import { PromoCount } from "../zestchain/promo_count";
import { Promo } from "../zestchain/promo";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "cytruslabs.zestchain.zestchain";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetPromoCountRequest = {};
export const QueryGetPromoCountRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPromoCountRequest,
        };
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
        const message = {
            ...baseQueryGetPromoCountRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetPromoCountRequest,
        };
        return message;
    },
};
const baseQueryGetPromoCountResponse = {};
export const QueryGetPromoCountResponse = {
    encode(message, writer = Writer.create()) {
        if (message.PromoCount !== undefined) {
            PromoCount.encode(message.PromoCount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPromoCountResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetPromoCountResponse,
        };
        if (object.PromoCount !== undefined && object.PromoCount !== null) {
            message.PromoCount = PromoCount.fromJSON(object.PromoCount);
        }
        else {
            message.PromoCount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.PromoCount !== undefined &&
            (obj.PromoCount = message.PromoCount
                ? PromoCount.toJSON(message.PromoCount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPromoCountResponse,
        };
        if (object.PromoCount !== undefined && object.PromoCount !== null) {
            message.PromoCount = PromoCount.fromPartial(object.PromoCount);
        }
        else {
            message.PromoCount = undefined;
        }
        return message;
    },
};
const baseQueryGetPromoRequest = { index: "" };
export const QueryGetPromoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPromoRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetPromoRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPromoRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetPromoResponse = {};
export const QueryGetPromoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.promo !== undefined) {
            Promo.encode(message.promo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPromoResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetPromoResponse };
        if (object.promo !== undefined && object.promo !== null) {
            message.promo = Promo.fromJSON(object.promo);
        }
        else {
            message.promo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.promo !== undefined &&
            (obj.promo = message.promo ? Promo.toJSON(message.promo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPromoResponse };
        if (object.promo !== undefined && object.promo !== null) {
            message.promo = Promo.fromPartial(object.promo);
        }
        else {
            message.promo = undefined;
        }
        return message;
    },
};
const baseQueryAllPromoRequest = {};
export const QueryAllPromoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPromoRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPromoRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPromoRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPromoResponse = {};
export const QueryAllPromoResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.promo) {
            Promo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPromoResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPromoResponse };
        message.promo = [];
        if (object.promo !== undefined && object.promo !== null) {
            for (const e of object.promo) {
                message.promo.push(Promo.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.promo) {
            obj.promo = message.promo.map((e) => (e ? Promo.toJSON(e) : undefined));
        }
        else {
            obj.promo = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPromoResponse };
        message.promo = [];
        if (object.promo !== undefined && object.promo !== null) {
            for (const e of object.promo) {
                message.promo.push(Promo.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    PromoCount(request) {
        const data = QueryGetPromoCountRequest.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Query", "PromoCount", data);
        return promise.then((data) => QueryGetPromoCountResponse.decode(new Reader(data)));
    }
    Promo(request) {
        const data = QueryGetPromoRequest.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Query", "Promo", data);
        return promise.then((data) => QueryGetPromoResponse.decode(new Reader(data)));
    }
    PromoAll(request) {
        const data = QueryAllPromoRequest.encode(request).finish();
        const promise = this.rpc.request("cytruslabs.zestchain.zestchain.Query", "PromoAll", data);
        return promise.then((data) => QueryAllPromoResponse.decode(new Reader(data)));
    }
}
