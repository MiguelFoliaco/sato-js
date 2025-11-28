"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reg_1 = require("../utils/reg");
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
//# sourceMappingURL=is-type.js.map