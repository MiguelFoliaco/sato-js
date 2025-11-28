"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(String.prototype, {
    'isFormat': {
        value: function (sequence, separator = '-') {
            const parts = this.split(separator);
            const length = sequence.split(separator).length;
            return parts.length === length;
        }
    },
    'format': {
        value: function (sequence, separator = '-') {
            const parts = sequence.split(separator);
            let newText = '';
            let pos = 0;
            parts.forEach((part, index) => {
                const lenCurrentPart = part.length;
                const item = this.slice(pos, pos + lenCurrentPart);
                newText += item + (index === parts.length - 1 ? '' : separator);
                pos += lenCurrentPart;
            });
            return newText;
        }
    }
});
//# sourceMappingURL=format.js.map