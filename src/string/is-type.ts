import { EMAIL_REGEXP } from "../utils/reg";

export const StringProperties = ['isEmail', 'isDate'];

const descIsEmail = Object.getOwnPropertyDescriptor(String.prototype, 'isEmail');

if (!descIsEmail) {
    Object.defineProperty(String.prototype, 'isEmail', {
        configurable: true,
        enumerable: true,
        get() {
            return EMAIL_REGEXP.test(this as string);
        }
    });
}

const descIsDate = Object.getOwnPropertyDescriptor(String.prototype, 'isDate');

if (!descIsDate) {
    Object.defineProperty(String.prototype, 'isDate', {
        configurable: true,
        enumerable: true,
        get() {
            return !isNaN(Date.parse(this as string));
        }
    });
}
