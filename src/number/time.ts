export const StringProperties = ['msToS', 'sToMs', 'msToMin', 'minToMs', 'msToH', 'hToMs', 'msToD', 'dToMs', 'msToM', 'mToMs', 'msToY', 'yToMs', 'sToMin', 'minToS', 'sToH', 'hToS', 'sToD', 'dToS', 'sToM', 'mToS', 'sToY', 'yToS', 'minToH', 'hToMin', 'minToD', 'dToMin', 'minToM', 'mToMin']
const exist = StringProperties.some(p =>
    Object.getOwnPropertyDescriptor(String.prototype, p)
);

if (!exist) {
    Object.defineProperties(Number.prototype, {
        // Milliseconds
        'msToS': { enumerable: true, get() { return this / 1000 } },
        'sToMs': { enumerable: true, get() { return this * 1000 } },

        'msToMin': { enumerable: true, get() { return this / 60000 } },
        'minToMs': { enumerable: true, get() { return this * 60000 } },

        'msToH': { enumerable: true, get() { return this / 3600000 } },
        'hToMs': { enumerable: true, get() { return this * 3600000 } },

        'msToD': { enumerable: true, get() { return this / 86400000 } },
        'dToMs': { enumerable: true, get() { return this * 86400000 } },

        'msToM': { enumerable: true, get() { return this / 2592000000 } },
        'mToMs': { enumerable: true, get() { return this * 2592000000 } },

        'msToY': { enumerable: true, get() { return this / 31536000000 } },
        'yToMs': { enumerable: true, get() { return this * 31536000000 } },

        // Seconds
        'sToMin': { enumerable: true, get() { return this / 60 } },
        'minToS': { enumerable: true, get() { return this * 60 } },

        'sToH': { enumerable: true, get() { return this / 3600 } },
        'hToS': { enumerable: true, get() { return this * 3600 } },

        'sToD': { enumerable: true, get() { return this / 86400 } },
        'dToS': { enumerable: true, get() { return this * 86400 } },

        'sToM': { enumerable: true, get() { return this / 2592000 } }, // 30 días
        'mToS': { enumerable: true, get() { return this * 2592000 } },

        'sToY': { enumerable: true, get() { return this / 31536000 } }, // 365 días
        'yToS': { enumerable: true, get() { return this * 31536000 } },

        // Minutes
        'minToH': { enumerable: true, get() { return this / 60 } },
        'hToMin': { enumerable: true, get() { return this * 60 } },

        'minToD': { enumerable: true, get() { return this / 1440 } }, // 24*60
        'dToMin': { enumerable: true, get() { return this * 1440 } },

        'minToM': { enumerable: true, get() { return this / 43200 } }, // 30*24*60
        'mToMin': { enumerable: true, get() { return this * 43200 } },

        'minToY': { enumerable: true, get() { return this / 525600 } }, // 365*24*60
        'yToMin': { enumerable: true, get() { return this * 525600 } },

        // Hours
        'hToD': { enumerable: true, get() { return this / 24 } },
        'dToH': { enumerable: true, get() { return this * 24 } },

        'hToM': { enumerable: true, get() { return this / 720 } }, // 30*24
        'mToH': { enumerable: true, get() { return this * 720 } },

        'hToY': { enumerable: true, get() { return this / 8760 } }, // 365*24
        'yToH': { enumerable: true, get() { return this * 8760 } },

        // Days
        'dToM': { enumerable: true, get() { return this / 30 } },
        'mToD': { enumerable: true, get() { return this * 30 } },

        'dToY': { enumerable: true, get() { return this / 365 } },
        'yToD': { enumerable: true, get() { return this * 365 } },

        // Months
        'mToY': { enumerable: true, get() { return this / 12 } },
        'yToM': { enumerable: true, get() { return this * 12 } },

    })
}

