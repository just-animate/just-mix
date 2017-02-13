export const round = Math.round;
export const cos = Math.cos;
export const sin = Math.sin;
export const max = Math.max;
export const sqrt = Math.sqrt;

export const clamp = (min: number, max: number, n: number) => n < min ? min : n > max ? max : n;
export const isSquare = (n: number) => n && (n & (n - 1)) === 0;

export const ceil = (n: number) => {
  const x = n | 0;
  return x === n ? x : x + 1;
};

export const floor = (n: number) => n | 0;
