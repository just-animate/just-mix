import { numbers } from './numbers';
import {
  flipLookup,
  gradToDegree,
  IMixer,
  isSquare,
  mixer,
  nil,
  radToDegree,
  turnToDegree
} from '../internal';

export type AngleValue = [number, number | undefined];

const unitExpression = /^([\-]{0,1}[0-9]*[\.]{0,1}[0-9]*){1}(deg|rad|grad|turn){0,1}$/i;

export const angleUnits = {
  deg: 1,
  rad: 2,
  grad: 4,
  turn: 8
};

const unitToName = flipLookup(angleUnits);

const reduceTypes = (n: AngleValue[]) => n.reduce((c: number, next: AngleValue) => c | (next[1] || 0), 0);

const toDegrees = (length: AngleValue): AngleValue => {
  const unit = length[1];
  const co = unit === angleUnits.rad
    ? radToDegree : unit === angleUnits.grad
      ? gradToDegree : unit === angleUnits.turn
        ? turnToDegree : 1;

  return [length[0] * co, angleUnits.deg];
};

export const angles: IMixer<string, AngleValue> = mixer({
  parse(value: string): AngleValue {
    const match = unitExpression.exec(value) as RegExpExecArray;
    const n = numbers.parse(match[1]);
    const unit = (n === 0 ? nil : angleUnits[match[2]] || angleUnits.deg);
    return [n, unit];
  },
  format(value: AngleValue): string {
    const n = value[0];
    const unit = value[1] || angleUnits.deg;
    return n === 0 ? '0' : numbers.format(n) + unitToName[unit];
  },
  interpolate(left: AngleValue, right: AngleValue, weight: number): AngleValue {
    const val = numbers.interpolate(left[0], right[0], weight);
    const unit = val === 0 ? nil : left[1] || right[1] || angleUnits.deg;
    return [val, unit];
  },
  optimize(values: AngleValue[]): AngleValue[] {
    const valueTypes = reduceTypes(values);

    // all types are powers of two,
    const oneType = isSquare(valueTypes);

    // if only one type is detected, no conversion is necessary
    if (oneType) {
      return values;
    }
    // reject multiple relative units (no path for conversion right now)
    return values.map(toDegrees);
  }
});
