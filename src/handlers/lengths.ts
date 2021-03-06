import { numberFixed, numberParse } from './numbers';
import {
  mixer, IMixer, inToPx, cmToPx, mmToPx, ptToPx, pcToPx, qToPx, isSquare, flipLookup, round
} from '../internal';

export type LengthValue = { value: number, unit: number };

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

const unitExpression = /^([\-]{0,1}[0-9]*[\.]{0,1}[0-9]*){1}(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|q|%){0,1}$/i;
const unitToName = flipLookup(lengthUnits);

const reduceTypes = (values: LengthValue[]) => {
  let result = lengthUnits.none;
  for (let i = 0, len = values.length; i < len; i++) {
    result |= values[i].unit;
  }
  return result;
};


const toPixels = (length: LengthValue): LengthValue => {
  const unit = length.unit;
  const co = unit === lengthUnits.in
    ? inToPx : unit === lengthUnits.cm
      ? cmToPx : unit === lengthUnits.mm
        ? mmToPx : unit === lengthUnits.pt
          ? ptToPx : unit === lengthUnits.pc
            ? pcToPx : unit === lengthUnits.q
              ? qToPx : 1;

  length.value *= co;
  length.unit = lengthUnits.px;
  return length;
};

export const lengthParse = (value: string): LengthValue => {
  const match = unitExpression.exec(value) as RegExpExecArray;
  const n = numberParse(match[1]);
  const unit = (n === 0 ? lengthUnits.none : lengthUnits[match[2]]) || lengthUnits.none;
  return {
    value: n,
    unit: unit
  };
};

export const lengthFormat = (length: LengthValue): string => {
  const n = length.value;
  const unit = length.unit || lengthUnits.px;
  return n === 0 ? '0' : numberFixed(n) + unitToName[unit];
};

export const lengthOptimize = (values: LengthValue[]): LengthValue[] => {
  const valueTypes = reduceTypes(values);

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

export const lengthInterpolate = (l: LengthValue, r: LengthValue, o: number, out: LengthValue): LengthValue => {
  const unit = l.unit || r.unit || lengthUnits.none;

  let value = l.value + ((r.value - l.value) * o);

  // round px units (since a partial pixel is less than useful in most cases)
  if (unit === lengthUnits.px) {
      value = round(value);
  }

  out.value = value;
  out.unit = unit;
  return out;
};

export const lengths: IMixer = mixer({
  getDefault(): LengthValue {
    return {
      value: 0,
      unit: lengthUnits.none
    };
  },
  parse: lengthParse,
  format: lengthFormat,
  interpolate: lengthInterpolate,
  optimize: lengthOptimize
});

