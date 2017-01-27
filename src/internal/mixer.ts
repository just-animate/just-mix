import { flow } from './flow';

interface IMixer<T1> {
  (left: string, right: string, weight: number): string;
  format(val: T1): string;
  interpolate(left: T1, right: T1, weight: number): T1;
  parse(val: string): T1;
}

export const mixer = <T>(
  parsers: { (input: string): any; }[],
  formatter: { (t: T): string },
  interpolate: { (left: T, right: T, weight: number): T }
) => {
  const parse = flow(parsers) as (val: string) => T;
  const fn = ((left: string, right: string, weight: number) => formatter(interpolate(parse(left), parse(right), weight))) as IMixer<T>;
  fn.format = formatter;
  fn.interpolate = interpolate;
  fn.parse = parse;
  return fn;
};
