export const clamp = (min: number, max: number, n: number) => n < min ? min : n > max ? max : n;
export const isSquare = (n: number) => n && (n & (n - 1)) === 0;
