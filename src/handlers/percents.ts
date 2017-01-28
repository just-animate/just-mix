import { numbers } from './numbers';
import { mixer } from '../internal';

export const percents = mixer({
  parse(value: string): number {
    return numbers.parse(value) * .01;
  },
  format(value: number): string {
    return numbers.format(value * 100) + '%';
  },
  interpolate: numbers.interpolate
});
