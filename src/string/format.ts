
Object.defineProperties(String.prototype, {
    'isFormat': {
        value: function (sequence: string, separator: string = '-') {
            const parts = this.split(separator)
            const length = sequence.split(separator).length
            return parts.length === length;
        }
    },
    'format': {
        value: function (sequence: string, separator: string = '-') {
            const parts = sequence.split(separator)
            let newText = ''
            let pos = 0
            parts.forEach((part, index) => {
                const lenCurrentPart = part.length;
                const item = (this as string).slice(pos, pos + lenCurrentPart);
                newText += item + (index === parts.length - 1 ? '' : separator)
                pos += lenCurrentPart
            })
            return newText;
        }
    }
})

