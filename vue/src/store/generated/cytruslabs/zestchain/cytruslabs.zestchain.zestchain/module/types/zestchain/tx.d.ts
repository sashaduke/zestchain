import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
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
export interface MsgPayView {
    creator: string;
    id: string;
}
export interface MsgPayViewResponse {
}
export interface MsgPayClick {
    creator: string;
    id: string;
}
export interface MsgPayClickResponse {
}
export declare const MsgCreateAd: {
    encode(message: MsgCreateAd, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAd;
    fromJSON(object: any): MsgCreateAd;
    toJSON(message: MsgCreateAd): unknown;
    fromPartial(object: DeepPartial<MsgCreateAd>): MsgCreateAd;
};
export declare const MsgCreateAdResponse: {
    encode(message: MsgCreateAdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAdResponse;
    fromJSON(object: any): MsgCreateAdResponse;
    toJSON(message: MsgCreateAdResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAdResponse>): MsgCreateAdResponse;
};
export declare const MsgPayView: {
    encode(message: MsgPayView, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPayView;
    fromJSON(object: any): MsgPayView;
    toJSON(message: MsgPayView): unknown;
    fromPartial(object: DeepPartial<MsgPayView>): MsgPayView;
};
export declare const MsgPayViewResponse: {
    encode(_: MsgPayViewResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPayViewResponse;
    fromJSON(_: any): MsgPayViewResponse;
    toJSON(_: MsgPayViewResponse): unknown;
    fromPartial(_: DeepPartial<MsgPayViewResponse>): MsgPayViewResponse;
};
export declare const MsgPayClick: {
    encode(message: MsgPayClick, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPayClick;
    fromJSON(object: any): MsgPayClick;
    toJSON(message: MsgPayClick): unknown;
    fromPartial(object: DeepPartial<MsgPayClick>): MsgPayClick;
};
export declare const MsgPayClickResponse: {
    encode(_: MsgPayClickResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgPayClickResponse;
    fromJSON(_: any): MsgPayClickResponse;
    toJSON(_: MsgPayClickResponse): unknown;
    fromPartial(_: DeepPartial<MsgPayClickResponse>): MsgPayClickResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateAd(request: MsgCreateAd): Promise<MsgCreateAdResponse>;
    PayView(request: MsgPayView): Promise<MsgPayViewResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    PayClick(request: MsgPayClick): Promise<MsgPayClickResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateAd(request: MsgCreateAd): Promise<MsgCreateAdResponse>;
    PayView(request: MsgPayView): Promise<MsgPayViewResponse>;
    PayClick(request: MsgPayClick): Promise<MsgPayClickResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
