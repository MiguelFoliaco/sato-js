export const StringProperties = ['truncate'];

const truncateDescriptor = Object.getOwnPropertyDescriptor(String.prototype, 'truncate');

if (!truncateDescriptor) {
    Object.defineProperty(String.prototype, 'truncate', {
        configurable: true,
        writable: true,
        enumerable: true,
        value: function (length: number, end: string = '...') {
            const text = this as string;
            return text.length > length
                ? text.substring(0, length) + end
                : text;
        }
    });
}
