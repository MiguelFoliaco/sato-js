"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!Object.getOwnPropertyDescriptor(String.prototype, "isFormat")) {
    Object.defineProperty(String.prototype, "isFormat", {
        configurable: true,
        writable: true,
        value: function (sequence, separator = '-') {
            const parts = this.split(separator);
            const length = sequence.split(separator).length;
            return parts.length === length;
        }
    });
}
if (!Object.getOwnPropertyDescriptor(String.prototype, "format")) {
    Object.defineProperty(String.prototype, "format", {
        configurable: true,
        writable: true,
        value: function (sequence, separator = '-') {
            const parts = sequence.split(separator);
            let newText = '';
            let pos = 0;
            parts.forEach((part, index) => {
                const len = part.length;
                const item = this.slice(pos, pos + len);
                newText += item + (index === parts.length - 1 ? '' : separator);
                pos += len;
            });
            return newText;
        }
    });
}
//# sourceMappingURL=format.js.map