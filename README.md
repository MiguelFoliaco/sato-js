# Sato.js — Syntactic sugar for primitives

Sato.js is a small utility library that extends native `String` and `Number` prototypes with convenient, expressive properties and methods. It's designed as a tiny syntactic sugar layer for working with strings and time-related number conversions.

> ⚠️ Note: This library augments built-in prototypes. While this can make code concise and expressive, it modifies global objects and may conflict with other libraries. Consider this before using it in shared environments.

---
[![Run Tests](https://github.com/MiguelFoliaco/sato-js/actions/workflows/test.yml/badge.svg)](https://github.com/MiguelFoliaco/sato-js/actions/workflows/test.yml)

## Features

- String utilities:
  - `isEmail` (getter): detect whether a string is a valid email
  - `isDate` (getter): test whether a string is a parsable date
  - `isFormat(sequence, separator='-')` (method): check if string matches a pattern sequence
  - `format(sequence, separator='-')` (method): format the string according to a pattern

- Number utilities (time conversions, exposed as getters):
  - Millisecond/second/minute/hour/day/month/year conversions: `msToS`, `sToMs`, `minToMs`, `hToMs`, `dToMs`, `mToMs`, `yToMs`, and the inverse conversions `sToMin`, `msToMin`, etc.

---

## Installation

Install from npm (or use your own local or private registry):

```bash
npm install sato.js
# or dev-time
npm install -D sato.js
```

---

## Quick Examples

JavaScript:

```js
import 'sato.js/string'; // or `import 'sato.js'` if you export both modules

console.log('test@example.com'.isEmail); // true
console.log('2020-01-01'.isDate); // true
console.log('2312-1212'.isFormat('####-####', '-'));
console.log('23121212'.format('####-####'));

console.log((5000).msToS); // 5
console.log((2).hToMs); // 7200000
```

TypeScript (recommended):

1. Make sure TypeScript knows about the prototype extensions. Add a `global.d.ts` or a `types augmentation` with content similar to:

```ts
declare global {
  interface String {
    readonly isEmail: boolean;
    readonly isDate: boolean;
    isFormat(sequence: string, separator?: string): boolean;
    format(sequence: string, separator?: string): string;
  }

  interface Number {
    readonly msToS: number;
    readonly sToMs: number;
    // ... add other getters as needed
  }
}

export {};
```

2. Then import the library (so side effects register prototypes):

```ts
import 'sato.js/string';
import 'sato.js/number';

// now you can use the new properties and methods in TypeScript
console.log('test@example.com'.isEmail);
```

---

## API (JSDoc-style)

### String.prototype.isEmail
```ts
/**
 * Get whether the string is a valid email.
 * @type {boolean}
 */
```

### String.prototype.isDate
```ts
/**
 * Returns true if the string parses to a Date.
 * @type {boolean}
 */
```

### String.prototype.isFormat(sequence, separator)
```ts
/**
 * Test whether a string matches a format pattern. The pattern is a sequence where segments are separated by a `separator` (default `-`).
 * @param {string} sequence - A format sequence like `####-####`.
 * @param {string} [separator='-'] - The separator for parts used to split.
 * @returns {boolean}
 */
```

### String.prototype.format(sequence, separator)
```ts
/**
 * Format the string into a new string following `sequence` segmentation using `separator`.
 * @param {string} sequence - A format sequence like `###-###`.
 * @param {string} [separator='-'] - The separator for parts used to split.
 * @returns {string} The formatted string.
 */
```

### Number.prototype conversions
```ts
/**
 * Converts values using readable getters. Example: `(1000).msToS // 1`.
 * All conversion getters are `number`s.
 */
```

See `src/number/time.ts` for the full list of conversion getters.

---

## TypeScript & Tests

- Add `tsconfig.test.json` (already present in this repo) to include test files and extend the main `tsconfig.json`. That file typically adds `types: ["vitest/globals"]` for a clean dev experience when using Vitest.
- Ensure test files aren't compiled by the library build by adding an `exclude` in your main `tsconfig.json` for test paths.
- Run tests with:

```bash
npm test
# for watch
npm run test:watch
```

---

## Contributing

Contributions are welcome. Before creating PRs:

- Add or modify tests under `test/`.
- Run `npm run test`.
- Follow the code style in the project and prefer JSDoc comments for new public API additions.

---

## License

MIT
