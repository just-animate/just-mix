# JustMix

*Mix and interpolate colors, css units, and more!*

[![npm version](https://badge.fury.io/js/just-mix.svg)](https://badge.fury.io/js/just-mix)
[![Build Status](https://travis-ci.org/just-animate/just-mix.svg?branch=master)](https://travis-ci.org/just-animate/just-mix)
[![Downloads](https://img.shields.io/npm/dm/just-mix.svg)](https://www.npmjs.com/package/just-mix)

## Why use JustMix?

- Simple CSS value parsing and interpolation
- Interpolates colors, lengths, percentages, etc.
- Animate from the ground up with a performant advanced API
- Small download size with no dependencies

> Power this project up with 🌟s,  [^ star it please](https://github.com/just-animate/just-mix/stargazers).

## Setup

### Setup for use in the browser
Include this script
```html
<script src="https://unpkg.com/just-mix/dist/just-mix.min.js"></script>
```

### Setup for bundling (or if you want typings for TypeScript)

```bash
npm install just-mix --save
```

## Getting Started

Each CSS type in JustMix accepts two or more values and returns a function that can be called to get the value at each offset. The offset is a number between 0 and 1 representing 0% to 100%.

```ts
var tween = just.mix.lengths('0px', '10px');
var onePixel = tween(.1);
var twoPixels = tween(.2);
var tenPixels = tween(1);
```

In this example, 1px is .1 or 10% of the way between 0px and 10px.

## API

Using JustMix is easy to use. Each css type has a simple function that two or more parameters.  This returns a function that accepts a number between 0 and 1.

### angles ()
Finds a color between two angles

[Demo on CodePen](http://codepen.io/notoriousb1t/pen/zNjXbP/?editors=0110)

**Browser**
```ts
const ninety = just.mix.angles('0', '180deg')(.5);
const oneEighty = just.mix.angles('0', '1turn')(.5);
const twoSeventy = just.mix.angles('180deg', '6.2832rad')(.5);
const zero = just.mix.angles('300grad', '.25turn')(.5);
```

**Bundled**
```ts
import { angles } from 'just-mix';

const ninety = angles('0', '180deg')(.5);
const oneEighty = angles('0', '1turn')(.5);
const twoSeventy = angles('180deg', '6.2832rad')(.5);
const zero = angles('300grad', '.25turn')(.5);
```

### colors ()
Finds a color between two colors

[Demo on CodePen](http://codepen.io/notoriousb1t/pen/vgjXaP/?editors=0010)

**Browser**
```ts
const purple1 = just.mix.colors('red', 'blue')(.5);
const purple2 = just.mix.colors('#ff0000', 'blue')(.5);
const purple3 = just.mix.colors('rgb(255, 0, 0)', 'blue')(.5);
const purple4 = just.mix.colors('hsla(0, 100%, 50%, 1)', 'blue')(.5);
```

**Bundled**
```ts
import { color } from 'just-mix';

const purple1 = colors('red', 'blue')(.5);
const purple2 = colors('#ff0000', 'blue')(.5);
const purple3 = colors('rgb(255, 0, 0)', 'blue')(.5);
const purple4 = colors('hsla(0, 100%, 50%, 1)', 'blue')(.5);
```

### lengths ()
Finds a length between two lengths

**Browser**
```ts
const fivePixels = just.mix.lengths('0px', '10px')(.5);
const fiveEms = just.mix.lengths('0em', '10em')(.5);
const fiveRems = just.mix.lengths('0rem', '10rem', .5);
```

**Bundled**
```ts
import { lengths } from 'just-mix';

const fivePixels = lengths('0px', '10px')(.5);
const fiveEms = lengths('0em', '10em')(.5);
const fiveRems = lengths('0rem', '10rem')(.5);
```

### numbers ()
Finds a number between two numbers

**Browser**
```ts
const fiveA = just.mix.numbers('0', '10')(.5);
const fiveB = just.mix.numbers(0, 10)(.5);
```

**Bundled**
```ts
import { numbers } from 'just-mix';

const fiveA = numbers('0', '10')(.5);
const fiveB = numbers(0, 10)(.5);
```

### percents ()
Finds a percentage between two percentages

**Browser**
```ts
const fivePercent = just.mix.percents('0%', '10%')(.5);
```

**Bundled**
```ts
import { percents } from 'just-mix';

const fivePercent = percents('0%', '10%')(.5);
```



## Advanced functions
Each css type has 4 additional functions that make up its simple function.  The four functions are as follows: ```parse()```,  ```format()```,  ```optimize()```, and  ```interpolate()```.  Normally, it is not necessary to use these directly, but for completeness, here they are.

### ```parse(val) => obj```

The parse function takes in each value and reduces it to an internal representation.  This is most often an array. In the case of ```lengths```, it is a two part array: [number, unitString].

### ```format(obj) => val```

The format function takes the internal representation and "formats" it back.  This normally returns a string.

### ```optimize(obj[]) => obj[]```

The optimize function takes a series of objects (the internal representations of the values) and makes edits so that they are in the most efficent format possible relative to each other.  For performance reasons, the original array is mutated.

### ```interpolate(obj, obj, weight) => obj```

The interpolate function mixes the two internal representations together relative to the weight provided and returns the result.

## What's next?

Next up is adding support for angles.   Stay tuned!
