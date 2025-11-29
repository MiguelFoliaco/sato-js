"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringProperties = void 0;
const reg_1 = require("../utils/reg");
exports.StringProperties = ['isEmail', 'isDate'];
const descIsEmail = Object.getOwnPropertyDescriptor(String.prototype, 'isEmail');
if (!descIsEmail) {
    Object.defineProperty(String.prototype, 'isEmail', {
        configurable: true,
        enumerable: true,
        get() {
            return reg_1.EMAIL_REGEXP.test(this);
        }
    });
}
const descIsDate = Object.getOwnPropertyDescriptor(String.prototype, 'isDate');
if (!descIsDate) {
    Object.defineProperty(String.prototype, 'isDate', {
        configurable: true,
        enumerable: true,
        get() {
            return !isNaN(Date.parse(this));
        }
    });
}
//# sourceMappingURL=is-type.js.map