import { numberFixed, numberParse, interpolate } from './numbers';
import { mixer, IMixer, inToPx, cmToPx, mmToPx, ptToPx, pcToPx, qToPx, isSquare, flipLookup } from '../internal';

const unitExpression = /^([\-]{0,1}[0-9]*[\.]{0,1}[0-9]*){1}(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|q|%){0,1}$/i;

export const lengthUnits = {
  none: 0,
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
  ch: 16384,
  '%': 32768
};

const unitToName = flipLookup(lengthUnits);

export type LengthValue = [number, number];

const getTypes = (values: LengthValue[]) => {
  let result = lengthUnits.none;
  for (let i = 0, len = values.length; i < len; i++) {
    result |= values[i][1];
  }
  return result;
};

const toPixels = (length: LengthValue): LengthValue => {
  const unit = length[1];
  const co = unit === lengthUnits.in
    ? inToPx : unit === lengthUnits.cm
      ? cmToPx : unit === lengthUnits.mm
        ? mmToPx : unit === lengthUnits.pt
          ? ptToPx : unit === lengthUnits.pc
            ? pcToPx : unit === lengthUnits.q
              ? qToPx : 1;

  length[0] *= co;
  length[1] = lengthUnits.px;
  return length;
};

export const lengthParse = (value: string): LengthValue => {
  const match = unitExpression.exec(value) as RegExpExecArray;
  const n = numberParse(match[1]);
  const unit = (n === 0 ? lengthUnits.none : lengthUnits[match[2]]) || lengthUnits.none;
  return [n, unit];
};

export const lengthFormat = (value: LengthValue): string => {
  const n = value[0];
  const unit = value[1];
  return n === 0 ? '0' : numberFixed(n) + unitToName[(unit ? unit : lengthUnits.px)];
};

export const lengthOptimize = (values: LengthValue[]): LengthValue[] => {
  const valueTypes = getTypes(values);

  // all types are powers of two,
  const oneType = isSquare(valueTypes);

  // if only one type is detected, no conversion is necessary
  if (oneType) {
    return values;
  }

  // reject multiple relative units (no path for conversion right now)
  const hasRelativeUnits = valueTypes >= lengthUnits.em;
  if (hasRelativeUnits) {
    throw `Can't mix multiple relative units`;
  }

  for (let i = 0, len = values.length; i < len; i++) {
    toPixels(values[i]);
  }

  return values;
};

export const lengthInterpolate = (left: LengthValue, right: LengthValue, weight: number, out: LengthValue): LengthValue => {
  out[0] = interpolate(left[0], right[0], weight);
  out[1] = left[1] || right[1] || lengthUnits.none;
  return out;
};

export const lengths: IMixer = mixer({
  getDefault(): LengthValue {
    return [0, lengthUnits.none];
  },
  parse: lengthParse,
  format: lengthFormat,
  interpolate: lengthInterpolate,
  optimize: lengthOptimize
});

