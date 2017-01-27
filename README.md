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

### color (color1, color2, weight) => color3
Finds a color between color1 and color2.  Weight is a number between 0 and 1

**Browser**
```ts
const purple = just.mix.color('#ff0000', '#0000ff', .5);
```

**Bundled**
```ts
import { color } from 'just-mix';

const purple = color('#ff0000', '#0000ff', .5);
```

### length(unit1, unit2, weight) => color1
Finds a color between unit1 and unit2.  Weight is a number between 0 and 1

**Browser**
```ts
const fivePixels = just.mix.length('0', '10px', .5);
```

**Bundled**
```ts
import { length } from 'just-mix';

const fivePixels = length('0', '10px', .5);
```
