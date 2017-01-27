export const formatNumber = (n: number) => n.toFixed(3).replace('.000', '');

export const parseNumber = (n: string) => parseFloat(n);

export const interpolateNumber = (l: number, r: number, o: number) => {
  return l + ((r - l) * o);
};
