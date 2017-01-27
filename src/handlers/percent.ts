import { formatNumber, parseNumber } from './number';

export const formatPercent = (value: number) => formatNumber(value * 100) + '%';
export const parsePercent = (value: string) => parseNumber(value) * .01;

