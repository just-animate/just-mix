import { clamp } from '../internal';
import { formatNumber, interpolateNumber, parseCssFunction, parsePercent } from '../handlers';

const hexRegex = /#(([a-f0-9]{6})|([a-f0-9]{3}))$/i;

const
  R = 0, G = 1, B = 2,
  H = 0, S = 1, L = 2;

type Channels = [number, number, number, number];

const namedColors: { [key: string]: [number, number, number] } = {
  aliceblue: [240, 248, 245],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 35],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  silver: [192, 192, 192],
  teal: [0, 128, 128],
  transparent: [0, 0, 0, 0],
  white: [255, 255, 255],
  yellow: [255, 255, 0]
};


const parseNamedColor = (stringValue: string): Channels | undefined => {
  const c = namedColors[stringValue.toLowerCase()];
  return !c ? undefined : [c[0], c[1], c[2], c.length === 4 ? c[4] : 1];
};

const parseHexCode = (stringValue: string): Channels | undefined  => {
  const match = stringValue.match(hexRegex);
  if (!match) {
    return undefined;
  }

  const hex = match[1];
  const hexColor = parseInt(
    hex.length === 3
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex,
    16
  );
  const r = (hexColor >> 16) & 0xFF;
  const g = (hexColor >> 8) & 0xFF;
  const b = hexColor & 0xFF;

  return [r, g, b, 1];
};

const toRGB = (cc: Channels): void => {
  const s = cc[S];

  // when saturation is 0, all channels equal lightness * 255
  if (s === 0) {
    cc[R] = cc[G] = cc[B] = cc[L] * 255;
    return;
  }

  const h = cc[H] / 360;
  const l = cc[L];

  const t2 = l < .5 ? l * (1 + s) : l + s - l * s;
  const t1 = 2 * l - t2;

  let r = 0, g = 0, b = 0;
  let i = -1;
  while (++i < 3) {
    let t3 = h + 1 / 3 * -(i - 1);
    if (t3 < 0) {
      ++t3;
    }
    if (t3 > 1) {
      --t3;
    }

    const val = 255 * (6 * t3 < 1
      ? t1 + (t2 - t1) * 6 * t3 : 2 * t3 < 1
        ? t2 : 3 * t3 < 2
          ? t1 + (t2 - t1) * (2 / 3 - t3) * 6 : t1);

    // manually set variables instead of using an array
    if (i === 0) {
      r = val;
    } else if (i === 1) {
      g = val;
    } else {
      b = val;
    }
  }

  cc[R] = r;
  cc[G] = g;
  cc[B] = b;
};

const parseColorFunction = (colorString: string): Channels | undefined => {
  const c = parseCssFunction(colorString);
  if (!c) {
    return undefined;
  }
  const len = c.length;
  const hasAlpha = len === 5;
  if (!c || !(len === 4 || hasAlpha)) {
    return undefined;
  }

  const fn = c[0];
  if (fn === 'rgba' || fn === 'rgb') {
    return [
      parseFloat(c[1]),
      parseFloat(c[2]),
      parseFloat(c[3]),
      hasAlpha ? parseFloat(c[4]) : 1
    ];
  }

  if (fn === 'hsla' || fn === 'hsl') {
    const hsla: Channels = [
      parseFloat(c[1]),
      parsePercent(c[2]),
      parsePercent(c[3]),
      hasAlpha ? parseFloat(c[4]) : 1
    ];
    toRGB(hsla);
    return hsla;
  }

  return undefined;
};

/**
 * Combines two colors and returns in rgba() format
 */
export const formatColor = (x: Channels) => {
  const a = x[3];

  return 'rgba('
    + (a ? clamp(0, 255, x[0] / a) : x[0]) + ','
    + (a ? clamp(0, 255, x[1] / a) : x[1]) + ','
    + (a ? clamp(0, 255, x[2] / a) : x[2]) + ','
    + formatNumber(clamp(0, 1, a)) + ')';
};

export const interpolateColor = (l: Channels, r: Channels, o: number): Channels => {
  return [
    interpolateNumber(l[0], r[0], o),
    interpolateNumber(l[1], r[1], o),
    interpolateNumber(l[2], r[2], o),
    interpolateNumber(l[3], r[3], o)
  ]
}

/**
 * Parses the color string into RGBA channels
 */
export const parseColor = (input: string): Channels => {
  const str = input.trim().toLowerCase();
  return parseNamedColor(str) || parseHexCode(str) || parseColorFunction(str) || [0, 0, 0, 1];
};

