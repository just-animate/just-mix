export const formatNumber = (n: number) => n.toFixed(3).replace('.000', '');

export const parseNumber = (n: string) => parseFloat(n);
