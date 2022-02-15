import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
export interface AdCount {
    counter: number;
}
export declare const AdCount: {
    encode(message: AdCount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AdCount;
    fromJSON(object: any): AdCount;
    toJSON(message: AdCount): unknown;
    fromPartial(object: DeepPartial<AdCount>): AdCount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
