if (!Object.getOwnPropertyDescriptor(String.prototype, "isFormat")) {
    Object.defineProperty(String.prototype, "isFormat", {
        configurable: true,
        writable: true,
        value: function (sequence: string, separator: string = '-') {
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
        value: function (sequence: string, separator = '-') {
            const parts = sequence.split(separator);
            let newText = '';
            let pos = 0;

            parts.forEach((part, index) => {
                const len = part.length;
                const item = (this as string).slice(pos, pos + len);
                newText += item + (index === parts.length - 1 ? '' : separator);
                pos += len;
            });

            return newText;
        }
    });
}

if (!Object.getOwnPropertyDescriptor(String.prototype, "toSlug")) {
    Object.defineProperty(String.prototype, "toSlug", {
        configurable: true,
        writable: true,
        value: function (): string {
            return (this as string).replaceAll(' ', '-').toLowerCase();
        }
    })
}

if (!Object.getOwnPropertyDescriptor(String.prototype, "lengthWithoutSpaces")) {
    Object.defineProperty(String.prototype, "lengthWithoutSpaces", {
        configurable: true,
        writable: true,
        value: function (): number {
            return (this as string).replaceAll(' ', '').length;
        }
    })
}