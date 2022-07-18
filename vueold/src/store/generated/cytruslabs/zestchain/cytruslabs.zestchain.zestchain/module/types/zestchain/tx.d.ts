import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
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
export interface MsgPromoViewedResponse {
}
export interface MsgPromoClicked {
    creator: string;
    id: string;
    addr: string;
}
export interface MsgPromoClickedResponse {
}
export declare const MsgCreatePromo: {
    encode(message: MsgCreatePromo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePromo;
    fromJSON(object: any): MsgCreatePromo;
    toJSON(message: MsgCreatePromo): unknown;
    fromPartial(object: DeepPartial<MsgCreatePromo>): MsgCreatePromo;
};
export declare const MsgCreatePromoResponse: {
    encode(message: MsgCreatePromoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePromoResponse;
    fromJSON(object: any): MsgCreatePromoResponse;
    toJSON(message: MsgCreatePromoResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePromoResponse>): MsgCreatePromoResponse;
};
export declare const MsgPromoViewed: {
    encode(message: MsgPromoViewed, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPromoViewed;
    fromJSON(object: any): MsgPromoViewed;
    toJSON(message: MsgPromoViewed): unknown;
    fromPartial(object: DeepPartial<MsgPromoViewed>): MsgPromoViewed;
};
export declare const MsgPromoViewedResponse: {
    encode(_: MsgPromoViewedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPromoViewedResponse;
    fromJSON(_: any): MsgPromoViewedResponse;
    toJSON(_: MsgPromoViewedResponse): unknown;
    fromPartial(_: DeepPartial<MsgPromoViewedResponse>): MsgPromoViewedResponse;
};
export declare const MsgPromoClicked: {
    encode(message: MsgPromoClicked, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPromoClicked;
    fromJSON(object: any): MsgPromoClicked;
    toJSON(message: MsgPromoClicked): unknown;
    fromPartial(object: DeepPartial<MsgPromoClicked>): MsgPromoClicked;
};
export declare const MsgPromoClickedResponse: {
    encode(_: MsgPromoClickedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPromoClickedResponse;
    fromJSON(_: any): MsgPromoClickedResponse;
    toJSON(_: MsgPromoClickedResponse): unknown;
    fromPartial(_: DeepPartial<MsgPromoClickedResponse>): MsgPromoClickedResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreatePromo(request: MsgCreatePromo): Promise<MsgCreatePromoResponse>;
    PromoViewed(request: MsgPromoViewed): Promise<MsgPromoViewedResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    PromoClicked(request: MsgPromoClicked): Promise<MsgPromoClickedResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePromo(request: MsgCreatePromo): Promise<MsgCreatePromoResponse>;
    PromoViewed(request: MsgPromoViewed): Promise<MsgPromoViewedResponse>;
    PromoClicked(request: MsgPromoClicked): Promise<MsgPromoClickedResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
