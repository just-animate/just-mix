import { interpolate, numberFixed, numberParse } from './numbers';
import { mixer, IMixer } from '../internal';

export const percentParse = (value: string): number => {
  return numberParse(value) * .01;
};

export const percents: IMixer = mixer({
  getDefault(): number {
    return 0;
  },
  parse: percentParse,
  format(value: number): string {
    return numberFixed(value * 100) + '%';
  },
  interpolate(left: number, right: number, weight: number, out: number): number {
    return interpolate(left, right, weight);
  },
  optimize(values: number[]): number[] {
    return values;
  }
});
