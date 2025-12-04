"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.defineStringGetter = exports.defineNumberGetter = void 0;
require("./string");
require("./number");
var defineGetter_1 = require("./utils/defineGetter");
Object.defineProperty(exports, "defineNumberGetter", { enumerable: true, get: function () { return defineGetter_1.defineNumberGetter; } });
Object.defineProperty(exports, "defineStringGetter", { enumerable: true, get: function () { return defineGetter_1.defineStringGetter; } });
const version = '1.0.15';
exports.version = version;
//# sourceMappingURL=index.js.map