import { webcrypto } from "node:crypto";
import "./types/sato.d.ts";

if (!globalThis.crypto?.getRandomValues) {
    Object.defineProperty(globalThis.crypto, "getRandomValues", {
        value: webcrypto.getRandomValues,
        configurable: true,
        writable: true,
    });
}