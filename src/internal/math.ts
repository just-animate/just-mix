export const clamp = (min: number, max: number, n: number) => n < min ? min : n > max ? max : n;
export const isSquare = (n: number) => n && (n & (n - 1)) === 0;
export const round = Math.round;
export const ceil = (n: number) => {
  const x = n | 0;
  return x === n ? x : x + 1;
};

export const floor = (n: number) => n | 0;
