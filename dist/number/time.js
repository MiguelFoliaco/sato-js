"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defineGetter_1 = require("../utils/defineGetter");
// Milliseconds
(0, defineGetter_1.defineNumberGetter)("msToS", function () { return this / 1000; });
(0, defineGetter_1.defineNumberGetter)("sToMs", function () { return this * 1000; });
(0, defineGetter_1.defineNumberGetter)("msToMin", function () { return this / 60000; });
(0, defineGetter_1.defineNumberGetter)("minToMs", function () { return this * 60000; });
(0, defineGetter_1.defineNumberGetter)("msToH", function () { return this / 3600000; });
(0, defineGetter_1.defineNumberGetter)("hToMs", function () { return this * 3600000; });
(0, defineGetter_1.defineNumberGetter)("msToD", function () { return this / 86400000; });
(0, defineGetter_1.defineNumberGetter)("dToMs", function () { return this * 86400000; });
(0, defineGetter_1.defineNumberGetter)("msToM", function () { return this / 2592000000; });
(0, defineGetter_1.defineNumberGetter)("mToMs", function () { return this * 2592000000; });
(0, defineGetter_1.defineNumberGetter)("msToY", function () { return this / 31536000000; });
(0, defineGetter_1.defineNumberGetter)("yToMs", function () { return this * 31536000000; });
// Seconds
(0, defineGetter_1.defineNumberGetter)("sToMin", function () { return this / 60; });
(0, defineGetter_1.defineNumberGetter)("minToS", function () { return this * 60; });
(0, defineGetter_1.defineNumberGetter)("sToH", function () { return this / 3600; });
(0, defineGetter_1.defineNumberGetter)("hToS", function () { return this * 3600; });
(0, defineGetter_1.defineNumberGetter)("sToD", function () { return this / 86400; });
(0, defineGetter_1.defineNumberGetter)("dToS", function () { return this * 86400; });
(0, defineGetter_1.defineNumberGetter)("sToM", function () { return this / 2592000; });
(0, defineGetter_1.defineNumberGetter)("mToS", function () { return this * 2592000; });
(0, defineGetter_1.defineNumberGetter)("sToY", function () { return this / 31536000; });
(0, defineGetter_1.defineNumberGetter)("yToS", function () { return this * 31536000; });
// Minutes
(0, defineGetter_1.defineNumberGetter)("minToH", function () { return this / 60; });
(0, defineGetter_1.defineNumberGetter)("hToMin", function () { return this * 60; });
(0, defineGetter_1.defineNumberGetter)("minToD", function () { return this / 1440; });
(0, defineGetter_1.defineNumberGetter)("dToMin", function () { return this * 1440; });
(0, defineGetter_1.defineNumberGetter)("minToM", function () { return this / 43200; });
(0, defineGetter_1.defineNumberGetter)("mToMin", function () { return this * 43200; });
(0, defineGetter_1.defineNumberGetter)("minToY", function () { return this / 525600; });
(0, defineGetter_1.defineNumberGetter)("yToMin", function () { return this * 525600; });
// Hours
(0, defineGetter_1.defineNumberGetter)("hToD", function () { return this / 24; });
(0, defineGetter_1.defineNumberGetter)("dToH", function () { return this * 24; });
(0, defineGetter_1.defineNumberGetter)("hToM", function () { return this / 720; });
(0, defineGetter_1.defineNumberGetter)("mToH", function () { return this * 720; });
(0, defineGetter_1.defineNumberGetter)("hToY", function () { return this / 8760; });
(0, defineGetter_1.defineNumberGetter)("yToH", function () { return this * 8760; });
// Days
(0, defineGetter_1.defineNumberGetter)("dToM", function () { return this / 30; });
(0, defineGetter_1.defineNumberGetter)("mToD", function () { return this * 30; });
(0, defineGetter_1.defineNumberGetter)("dToY", function () { return this / 365; });
(0, defineGetter_1.defineNumberGetter)("yToD", function () { return this * 365; });
// Months
(0, defineGetter_1.defineNumberGetter)("mToY", function () { return this / 12; });
(0, defineGetter_1.defineNumberGetter)("yToM", function () { return this * 12; });
//# sourceMappingURL=time.js.map