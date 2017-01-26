export const clamp = (min: number, max: number, n: number) => n < min ? min : n > max ? max : n;

export const formatNumber = (n: number) => n.toFixed(3).replace('.000', '');
