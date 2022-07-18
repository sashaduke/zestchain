import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
export interface Promo {
    index: string;
    title: string;
    pot: number;
    url: string;
    msg: string;
    tags: string;
    prefs: string;
}
export declare const Promo: {
    encode(message: Promo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Promo;
    fromJSON(object: any): Promo;
    toJSON(message: Promo): unknown;
    fromPartial(object: DeepPartial<Promo>): Promo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
