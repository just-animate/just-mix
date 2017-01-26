import { clamp, formatNumber } from './number';

const canvas = document.createElement('canvas');
canvas.width = canvas.height = 1;

const context = canvas.getContext('2d') as CanvasRenderingContext2D;

export const parseColor = (str: string): [number, number, number, number] => {
  str = str.trim();

  context.fillStyle = '#000';
  context.fillStyle = str;
  context.fillRect(0, 0, 1, 1);
  const px = context.getImageData(0, 0, 1, 1).data;
  context.clearRect(0, 0, 1, 1);

  let alpha = Math.round(px[3] / 255);
  return [px[0] * alpha, px[1] * alpha, px[2] * alpha, alpha];
};

export const mixColor = (x: [number, number, number, number]) => {
  const a = x[3];

  return 'rgba('
    + (a ? clamp(0, 255, x[0] / a) : x[0]) + ','
    + (a ? clamp(0, 255, x[1] / a) : x[1]) + ','
    + (a ? clamp(0, 255, x[2] / a) : x[2]) + ','
    + formatNumber(clamp(0, 1, a)) + ')';
};
