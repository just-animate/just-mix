import { clamp, formatNumber } from '../internal';


// canvas context needed for color conversion
let context: CanvasRenderingContext2D;

/**
 * Parses the color string into RGBA channels 
 */
export const parseColor = (str: string): [number, number, number, number] => {
  str = str.trim();

  // initialize canvas element for testing if first time
  if (!context) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    context = canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  context.fillStyle = '#000';
  context.fillStyle = str;
  context.fillRect(0, 0, 1, 1);
  const px = context.getImageData(0, 0, 1, 1).data;
  context.clearRect(0, 0, 1, 1);

  const alpha = Math.round(px[3] / 255);
  return [px[0] * alpha, px[1] * alpha, px[2] * alpha, alpha];
};

/**
 * Combines two colors and returns in rgba() format
 */
export const mixColor = (x: [number, number, number, number]) => {
  const a = x[3];

  return 'rgba('
    + (a ? clamp(0, 255, x[0] / a) : x[0]) + ','
    + (a ? clamp(0, 255, x[1] / a) : x[1]) + ','
    + (a ? clamp(0, 255, x[2] / a) : x[2]) + ','
    + formatNumber(clamp(0, 1, a)) + ')';
};
