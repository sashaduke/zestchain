import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
export interface Ad {
    index: string;
    title: string;
    pot: string;
    url: string;
    msg: string;
    tags: string;
    prefs: string;
    creator: string;
}
export declare const Ad: {
    encode(message: Ad, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Ad;
    fromJSON(object: any): Ad;
    toJSON(message: Ad): unknown;
    fromPartial(object: DeepPartial<Ad>): Ad;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
