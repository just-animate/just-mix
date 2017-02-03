import { numbers } from './numbers';
import { mixer, IMixer, nil, inToPx, cmToPx, mmToPx, ptToPx, pcToPx, qToPx } from '../internal';

export type LengthValue = [number, string | undefined];

const unitExpression = /^([\-]{0,1}[0-9]*[\.]{0,1}[0-9]*){1}(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|q|%){0,1}$/i;
const px = 'px';

const types = {
  px: 1,
  in: 2,
  cm: 4,
  mm: 8,
  pt: 16,
  pc: 32,
  q: 64,
  em: 128,
  rem: 256,
  ex: 512,
  vw: 1024,
  vh: 2048,
  vmin: 4096,
  vmax: 8192,
  ch: 16384
};

const isSquare = (n: number) => n && (n & (n - 1)) === 0;

const getTypes = (values: LengthValue[]) => {
  let result = 0;
  for (let i = 0, len = values.length; i < len; i++) {
    result |= types[values[i][1] as string];
  }
  return result;
};

const toPixels = (length: LengthValue): LengthValue => {
  const value = length[0];
  const unit = length[1];
  const co = unit === 'in'
    ? inToPx : unit === 'cm'
      ? cmToPx : unit === 'mm'
        ? mmToPx : unit === 'pt'
          ? ptToPx : unit === 'pc'
            ? pcToPx : unit === 'q'
              ? qToPx : 1;

  return [value * co, px];
};

export const lengths: IMixer<string, LengthValue> = mixer({
  parse(value: string): LengthValue {
    const match = unitExpression.exec(value) as RegExpExecArray;
    const n = numbers.parse(match[1]);
    const unit = (n === 0 ? nil : match[2]) || nil;
    return [n, unit];
  },
  format(value: LengthValue): string {
    const n = value[0];
    return n === 0 ? '0' : numbers.format(n) + (value[1] || px);
  },
  interpolate(left: LengthValue, right: LengthValue, weight: number): LengthValue {
    return [numbers.interpolate(left[0], right[0], weight), left[1] || right[1] || nil];
  },
  optimize(values: LengthValue[]): LengthValue[] {
    const valueTypes = getTypes(values);

    // all types are powers of two,
    const oneType = isSquare(valueTypes);
    const hasRelativeUnits = valueTypes >= types.em;

    // if only one type is detected, no conversion is necessary
    if (oneType) {
      return values.slice(0);
    }
    // reject multiple relative units (no path for conversion right now)
    if (hasRelativeUnits) {
      throw `Can't mix multiple relative units`;
    }
    return values.map(toPixels);
  }
});

