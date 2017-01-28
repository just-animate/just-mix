import { mixer } from '../internal';

export const numbers = mixer({
  parse(n: string): number {
    return parseFloat(n);
  },
  format(n: number): string {
    return n.toFixed(3).replace('.000', '');
  },
  interpolate(l: number, r: number, o: number): number {
    return l + ((r - l) * o);
  }
});
