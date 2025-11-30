import { defineNumberGetter } from "../utils/defineGetter";

// Milliseconds
defineNumberGetter("msToS", function (this: number) { return this / 1000 });
defineNumberGetter("sToMs", function (this: number) { return this * 1000 });

defineNumberGetter("msToMin", function (this: number) { return this / 60000 });
defineNumberGetter("minToMs", function (this: number) { return this * 60000 });

defineNumberGetter("msToH", function (this: number) { return this / 3600000 });
defineNumberGetter("hToMs", function (this: number) { return this * 3600000 });

defineNumberGetter("msToD", function (this: number) { return this / 86400000 });
defineNumberGetter("dToMs", function (this: number) { return this * 86400000 });

defineNumberGetter("msToM", function (this: number) { return this / 2592000000 });
defineNumberGetter("mToMs", function (this: number) { return this * 2592000000 });

defineNumberGetter("msToY", function (this: number) { return this / 31536000000 });
defineNumberGetter("yToMs", function (this: number) { return this * 31536000000 });

// Seconds
defineNumberGetter("sToMin", function (this: number) { return this / 60 });
defineNumberGetter("minToS", function (this: number) { return this * 60 });

defineNumberGetter("sToH", function (this: number) { return this / 3600 });
defineNumberGetter("hToS", function (this: number) { return this * 3600 });

defineNumberGetter("sToD", function (this: number) { return this / 86400 });
defineNumberGetter("dToS", function (this: number) { return this * 86400 });

defineNumberGetter("sToM", function (this: number) { return this / 2592000 });
defineNumberGetter("mToS", function (this: number) { return this * 2592000 });

defineNumberGetter("sToY", function (this: number) { return this / 31536000 });
defineNumberGetter("yToS", function (this: number) { return this * 31536000 });

// Minutes
defineNumberGetter("minToH", function (this: number) { return this / 60 });
defineNumberGetter("hToMin", function (this: number) { return this * 60 });

defineNumberGetter("minToD", function (this: number) { return this / 1440 });
defineNumberGetter("dToMin", function (this: number) { return this * 1440 });

defineNumberGetter("minToM", function (this: number) { return this / 43200 });
defineNumberGetter("mToMin", function (this: number) { return this * 43200 });

defineNumberGetter("minToY", function (this: number) { return this / 525600 });
defineNumberGetter("yToMin", function (this: number) { return this * 525600 });

// Hours
defineNumberGetter("hToD", function (this: number) { return this / 24 });
defineNumberGetter("dToH", function (this: number) { return this * 24 });

defineNumberGetter("hToM", function (this: number) { return this / 720 });
defineNumberGetter("mToH", function (this: number) { return this * 720 });

defineNumberGetter("hToY", function (this: number) { return this / 8760 });
defineNumberGetter("yToH", function (this: number) { return this * 8760 });

// Days
defineNumberGetter("dToM", function (this: number) { return this / 30 });
defineNumberGetter("mToD", function (this: number) { return this * 30 });

defineNumberGetter("dToY", function (this: number) { return this / 365 });
defineNumberGetter("yToD", function (this: number) { return this * 365 });

// Months
defineNumberGetter("mToY", function (this: number) { return this / 12 });
defineNumberGetter("yToM", function (this: number) { return this * 12 });
