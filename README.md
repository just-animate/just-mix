(DO NOT USE!  It's not ready just yet!)

# Just Mix

*Mix and interpolate colors, css units, and more!*

## Why use Just Mix?

- Simple CSS datatype detection and interpolation
- Handles colors, lengths, percentages, etc.
- Small download size with no dependencies

> Power this project up with 🌟s,  [^ star it please](https://github.com/just-animate/just-mix/stargazers).

## Getting Started

### Setup from CDN
Include this script
```html
<script src="https://unpkg.com/just-mix/dist/just-mix.min.js"></script>
```

### Setup for bundling

```bash
npm install just-mix --save
```

## Mix a lot!

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

### lengths(left, right, weight) => color1
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
