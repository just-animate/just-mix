import { numberFixed, numberParse, interpolate } from './numbers';
import {
  flipLookup,
  gradToDegree,
  IMixer,
  isSquare,
  mixer,
  radToDegree,
  turnToDegree
} from '../internal';


const unitExpression = /^([\-]{0,1}[0-9]*[\.]{0,1}[0-9]*){1}(deg|rad|grad|turn){0,1}$/i;

export type NoUnit = 0;
export type DegreeUnit = 1;
export type RadUnit = 2;
export type GradUnit = 4;
export type TurnUnit = 8;
export type AngleUnit = NoUnit | DegreeUnit | RadUnit | GradUnit | TurnUnit;

export const angleUnits = {
  none: 0 as NoUnit,
  deg: 1 as DegreeUnit,
  rad: 2 as RadUnit,
  grad: 4 as GradUnit,
  turn: 8 as TurnUnit
};

const unitToName = flipLookup(angleUnits);

export type AngleValue = { value: number, unit: AngleUnit };

const reduceTypes = (values: AngleValue[]) => {
  let result = angleUnits.none;
  for (let i = 0, len = values.length; i < len; i++) {
    result |= values[i].unit;
  }
  return result;
};

const toDegrees = (length: AngleValue): void => {
  const unit = length.unit;
  const co = unit === angleUnits.rad
    ? radToDegree : unit === angleUnits.grad
      ? gradToDegree : unit === angleUnits.turn
        ? turnToDegree : 1;

  length.value *= co;
  length.unit = angleUnits.deg;
};

export const angles: IMixer = mixer<AngleValue>({
  getDefault(): AngleValue {
    return { value: 0, unit: angleUnits.none };
  },
  parse(value: string): AngleValue {
    const match = unitExpression.exec(value) as RegExpExecArray;
    const n = numberParse(match[1]);
    const unit = (n === 0 ? angleUnits.none : angleUnits[match[2]] || angleUnits.deg);
    return {
      value: n,
      unit: unit
    };
  },
  format(value: AngleValue): string {
    const n = value.value;
    const unit = value.unit || angleUnits.deg;
    return n === 0 ? '0' : numberFixed(n) + unitToName[unit];
  },
  interpolate(left: AngleValue, right: AngleValue, weight: number, out: AngleValue): AngleValue {
    const value = interpolate(left.value, right.value, weight);
    const unit = value === 0 ? angleUnits.none : left.unit || right.unit || angleUnits.none;
    out.unit = unit;
    out.value = value;
    return out;
  },
  optimize(values: AngleValue[]): void {
    const valueTypes = reduceTypes(values);

    // all types are powers of two,
    const oneType = isSquare(valueTypes);

    // if only one type is detected, no conversion is necessary
    if (oneType) {
      return;
    }
    // reject multiple relative units (no path for conversion right now)
    for (let i = 0, len = values.length; i < len; i++) {
      toDegrees(values[i]);
    }
  }
});
