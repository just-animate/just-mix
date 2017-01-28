interface IMixer<T1> {
  (left: string, right: string, weight: number): string;
  format(val: T1): string;
  interpolate(left: T1, right: T1, weight: number): T1;
  parse(val: string): T1;
  optimize(values: T1[]): T1[];
}

const returnValue = <T1>(t1: T1) => t1;

export const mixer = <T>({parse, format, interpolate, optimize}: {
  parse(t: string): T;
  format(t: T): string;
  interpolate(left: T, right: T, weight: number): T;
  optimize?: (values: T[]) => T[];
}) => {
  const optimizeFn = optimize || returnValue;

  const fn = ((left: string, right: string, weight: number) => {
    const values = optimizeFn([parse(left), parse(right)]);
    return format(interpolate(values[0], values[1], weight));
  }) as IMixer<T>;

  fn.parse = parse;
  fn.format = format;
  fn.interpolate = interpolate;
  fn.optimize = optimizeFn;
  return fn;
};
