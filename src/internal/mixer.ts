export interface IMixer {
  (...values: string[]): (weight: number) => string;
}

export interface IMixerOptions<TValue> {
  parse(t: string): TValue;
  format(t: TValue): string;
  interpolate(left: TValue, right: TValue, weight: number, out: TValue): TValue;
  optimize(values: TValue[]): void;
  getDefault(): TValue;
};

const noop = () => { /* do nothing */ };

export const mixer = <TValue>({ parse, format, interpolate, optimize, getDefault }: IMixerOptions<TValue>) => {
  const optimizeFn = optimize || noop;
  let out = getDefault();

  const fn = (function (): (weight: number) => string {
    const values = Array.prototype.map.call(arguments, parse);
    const lastIndex = values.length - 1;

    optimizeFn(values);

    return (weight: number) => {
      const pos = lastIndex * weight;
      const left = Math.floor(pos);
      const right = Math.ceil(pos);
      const offset = pos - left;
      out = interpolate(values[left], values[right], offset, out);
      return format(out);
    };
  }) as IMixer;

  return fn;
};
