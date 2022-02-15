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
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateAd(request: MsgCreateAd): Promise<MsgCreateAdResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateAd(request: MsgCreateAd): Promise<MsgCreateAdResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
