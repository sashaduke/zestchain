import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cytruslabs.zestchain.zestchain";
export interface PromoCount {
    total: number;
}
export declare const PromoCount: {
    encode(message: PromoCount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PromoCount;
    fromJSON(object: any): PromoCount;
    toJSON(message: PromoCount): unknown;
    fromPartial(object: DeepPartial<PromoCount>): PromoCount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
