# Just Mix

*Mix and interpolate colors, css units, and more!*

[![npm version](https://badge.fury.io/js/just-mix.svg)](https://badge.fury.io/js/just-mix)
[![Build Status](https://travis-ci.org/just-animate/just-mix.svg?branch=master)](https://travis-ci.org/just-animate/just-mix)
<!-- [![Downloads](https://img.shields.io/npm/dm/just-mix.svg)](https://www.npmjs.com/package/just-mix) -->

## Why use Just Mix?

- Simple CSS value parsing and interpolation
- Handles colors, lengths, percentages, etc.
- Small download size with no dependencies

> Power this project up with 🌟s,  [^ star it please](https://github.com/just-animate/just-mix/stargazers).

## Setup

### Setup using a CDN
Include this script
```html
<script src="https://unpkg.com/just-mix/dist/just-mix.min.js"></script>
```

### Setup for bundling (or if you need typings for TypeScript)

```bash
npm install just-mix --save
```


## API

### colors (left, right, weight) => color3
Finds a color between two colors.  Weight is a ratio between 0 and 1 to use for mixing the colors

**Browser**
```ts
const purple1 = just.mix.colors('red', 'blue', .5);
const purple2 = just.mix.colors('#ff0000', 'blue', .5);
const purple3 = just.mix.colors('rgb(255, 0, 0)', 'blue', .5);
const purple4 = just.mix.colors('hsla(0, 100%, 50%, 1)', 'blue', .5);
```

**Bundled**
```ts
import { color } from 'just-mix';

const purple1 = colors('red', 'blue', .5);
const purple2 = colors('#ff0000', 'blue', .5);
const purple3 = colors('rgb(255, 0, 0)', 'blue', .5);
const purple4 = colors('hsla(0, 100%, 50%, 1)', 'blue', .5);
```

### lengths(left, right, weight) => length
Finds a length between two lengths.  Weight is a ratio between 0 and 1 to use for mixing the lengths

**Browser**
```ts
const fivePixels = just.mix.lengths('0px', '10px', .5);
const fiveEms = just.mix.lengths('0em', '10em', .5);
const fiveRems = just.mix.lengths('0rem', '10rem', .5);
```

**Bundled**
```ts
import { lengths } from 'just-mix';

const fivePixels = lengths('0px', '10px', .5);
const fiveEms = lengths('0em', '10em', .5);
const fiveRems = lengths('0rem', '10rem', .5);
```

### numbers(left, right, weight) => number
Finds a number between two numbers.  Weight is a ratio between 0 and 1 to use for mixing the numbers

**Browser**
```ts
const fiveA = just.mix.numbers('0', '10', .5);
const fiveB = just.mix.numbers(0, 10, .5);
```

**Bundled**
```ts
import { numbers } from 'just-mix';

const fiveA = numbers('0', '10', .5);
const fiveB = numbers(0, 10, .5);
```

### percents(left, right, weight) => percentage
Finds a percentage between two percentages.  Weight is a ratio between 0 and 1 to use for mixing the percentages

**Browser**
```ts
const fivePercent = just.mix.percents('0%', '10%', .5);
```

**Bundled**
```ts
import { percents } from 'just-mix';

const fivePercent = percents('0%', '10%', .5);
```
