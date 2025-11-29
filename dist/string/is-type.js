"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringProperties = void 0;
const reg_1 = require("../utils/reg");
exports.StringProperties = ['isEmail', 'isDate'];
const keys = Object.keys(String.prototype);
const exist = keys.filter(key => exports.StringProperties.includes(key));
if (exist.length == 0) {
    Object.defineProperties(String.prototype, {
        'isEmail': {
            get() {
                return reg_1.EMAIL_REGEXP.test(this);
            }
        },
        'isDate': {
            get() {
                return !isNaN(Date.parse(this));
            }
        }
    });
}
//# sourceMappingURL=is-type.js.map