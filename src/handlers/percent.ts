import { formatNumber } from './number';

export const parsePercent = (value: string): number => {
  return parseFloat(value) * .01;
};

export const formatPercent = (value: number): string => {
  return formatNumber(value * 100) + '%';
};
