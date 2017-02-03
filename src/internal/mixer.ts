export interface IMixer<TFormat, TValue> {
  (...values: TFormat[]): (weight: number) => TFormat;
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

  const fn = (function (): (weight: number) => TFormat {
    const args = arguments;
    const values = optimizeFn(Array.prototype.map.call(args, parse));
    const lastIndex = values.length - 1;
    return (weight: number) => {
      const pos = lastIndex * weight;
      const left = Math.floor(pos);
      const right = Math.ceil(pos);
      const offset = pos - left;
      return format(interpolate(values[left], values[right], offset));
    };
  }) as IMixer<TFormat, TValue>;

  fn.parse = parse;
  fn.format = format;
  fn.interpolate = interpolate;
  fn.optimize = optimizeFn;
  return fn;
};
