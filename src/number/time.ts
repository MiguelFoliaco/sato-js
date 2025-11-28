Object.defineProperties(Number.prototype, {
    // Milliseconds
    'msToS': { get() { return this / 1000 } },
    'sToMs': { get() { return this * 1000 } },

    'msToMin': { get() { return this / 60000 } },
    'minToMs': { get() { return this * 60000 } },

    'msToH': { get() { return this / 3600000 } },
    'hToMs': { get() { return this * 3600000 } },

    'msToD': { get() { return this / 86400000 } },
    'dToMs': { get() { return this * 86400000 } },

    'msToM': { get() { return this / 2592000000 } },
    'mToMs': { get() { return this * 2592000000 } },

    'msToY': { get() { return this / 31536000000 } },
    'yToMs': { get() { return this * 31536000000 } },

    // Seconds
    'sToMin': { get() { return this / 60 } },
    'minToS': { get() { return this * 60 } },

    'sToH': { get() { return this / 3600 } },
    'hToS': { get() { return this * 3600 } },

    'sToD': { get() { return this / 86400 } },
    'dToS': { get() { return this * 86400 } },

    'sToM': { get() { return this / 2592000 } }, // 30 días
    'mToS': { get() { return this * 2592000 } },

    'sToY': { get() { return this / 31536000 } }, // 365 días
    'yToS': { get() { return this * 31536000 } },

    // Minutes
    'minToH': { get() { return this / 60 } },
    'hToMin': { get() { return this * 60 } },

    'minToD': { get() { return this / 1440 } }, // 24*60
    'dToMin': { get() { return this * 1440 } },

    'minToM': { get() { return this / 43200 } }, // 30*24*60
    'mToMin': { get() { return this * 43200 } },

    'minToY': { get() { return this / 525600 } }, // 365*24*60
    'yToMin': { get() { return this * 525600 } },

    // Hours
    'hToD': { get() { return this / 24 } },
    'dToH': { get() { return this * 24 } },

    'hToM': { get() { return this / 720 } }, // 30*24
    'mToH': { get() { return this * 720 } },

    'hToY': { get() { return this / 8760 } }, // 365*24
    'yToH': { get() { return this * 8760 } },

    // Days
    'dToM': { get() { return this / 30 } },
    'mToD': { get() { return this * 30 } },

    'dToY': { get() { return this / 365 } },
    'yToD': { get() { return this * 365 } },

    // Months
    'mToY': { get() { return this / 12 } },
    'yToM': { get() { return this * 12 } },

})
