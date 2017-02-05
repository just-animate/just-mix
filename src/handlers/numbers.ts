export const numberParse = (n: string | number): number => {
  return typeof n === 'number' ? n : parseFloat(n);
};

export const numberFixed = (n: number): string => {
  return n.toFixed(3).replace('.000', '');
};

export const interpolate = (l: number, r: number, o: number): number => {
  return l + ((r - l) * o);
};

export const numbers = (function (): (weight: number) => string {
  const values = Array.prototype.map.call(arguments, numberParse);
  const lastIndex = values.length - 1;

  return (weight: number): string => {
    const pos = lastIndex * weight;
    const left = Math.floor(pos);
    const right = Math.ceil(pos);
    const offset = pos - left;
    const out = interpolate(values[left], values[right], offset);

    return numberFixed(out);
  };
}) as {
  (...values: number[]): (weight: number) => string;
};
