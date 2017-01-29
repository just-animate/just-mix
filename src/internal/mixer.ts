export interface IMixer<TFormat, TValue> {
  (left: TFormat, right: TFormat, weight: number): TFormat;
  format(val: TValue): TFormat;
  interpolate(left: TValue, right: TValue, weight: number): TValue;
  parse(val: TFormat): TValue;
  optimize(values: TValue[]): TValue[];
}

const returnValue = <T1>(t1: T1) => t1;

export const mixer = <TFormat, TValue>({parse, format, interpolate, optimize}: {
  parse(t: TFormat): TValue;
  format(t: TValue): TFormat;
  interpolate(left: TValue, right: TValue, weight: number): TValue;
  optimize?: (values: TValue[]) => TValue[];
}) => {
  const optimizeFn = optimize || returnValue;

  const fn = ((left: TFormat, right: TFormat, weight: number) => {
    const values = optimizeFn([parse(left), parse(right)]);
    return format(interpolate(values[0], values[1], weight));
  }) as IMixer<TFormat, TValue>;

  fn.parse = parse;
  fn.format = format;
  fn.interpolate = interpolate;
  fn.optimize = optimizeFn;
  return fn;
};
