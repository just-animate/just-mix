import { ceil, floor } from '../internal';

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

export const mixer = <TValue>({ parse, format, interpolate, optimize, getDefault }: IMixerOptions<TValue>) => {
  let out = getDefault();

  return function (): (weight: number) => string {
    const args = arguments;
    const len = args.length;
    const lastIndex = len - 1;

    const values: TValue[] = [];
    let i = -1;
    while (++i < len) {
      values[i] = parse(args[i]);
    }

    optimize(values as TValue[]);

    return (weight: number) => {
      const pos = lastIndex * weight;
      const left = floor(pos);

      return format(
        interpolate(
          values[left],
          values[ceil(pos)],
          pos - left,
          out
        )
      );
    };
  };
};
