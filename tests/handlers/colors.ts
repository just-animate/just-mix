import { colors, colorFormat, colorParse, colorInterpolate, Channels } from '../../src/handlers';
import * as assert from 'assert';

describe('color', () => {

  describe('format()', () => {
    it('formats [255,0,0,1] as rgba(255,0,0,1)', () => {
      assert.equal('rgba(255,0,0,1)', colorFormat({ r: 255, g: 0, b: 0, a: 1 }));
    });
  });

  describe('parse()', () => {
    it('parses #FFF as white', () => {
      assert.deepEqual({ r: 255, g: 255, b: 255, a: 1 }, colorParse('#FFF'));
    });

    it('parses #0000ff as blue', () => {
      assert.deepEqual({ r: 0, g: 0, b: 255, a: 1 }, colorParse('#0000ff'));
    });

    it('parses "red" as red', () => {
      assert.deepEqual({ r: 255, g: 0, b: 0, a: 1 }, colorParse('red'));
    });

    it('parses rgb(0, 255, 0) as green', () => {
      assert.deepEqual({ r: 0, g: 255, b: 0, a: 1 }, colorParse('rgb(0,255,0)'));
    });

    it('parses rgba(0, 255, 0, 1) as green', () => {
      assert.deepEqual({ r: 0, g: 255, b: 0, a: 1 }, colorParse('rgba(0,255,0,1)'));
    });

    it('parses hsl(0, 100%, 50%) as red', () => {
      assert.deepEqual({ r: 255, g: 0, b: 0, a: 1 }, colorParse('hsl(0,100%,50%)'));
    });

    it('parses hsla(0, 100%, 50%, 1) as red', () => {
      assert.deepEqual({ r: 255, g: 0, b: 0, a: 1 }, colorParse('hsl(0,100%,50%,1)'));
    });
  });

  describe('interpolate()', () => {
    it('{ r: 255, g: 0, b: 0, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, 0 = { r: 255, g: 0, b: 0, a: 1 }', () => {
      const out = { r: 0, g: 0, b: 0, a: 1 } as Channels;
      colorInterpolate({ r: 255, g: 0, b: 0, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, 0, out);
      assert.deepEqual({ r: 255, g: 0, b: 0, a: 1 }, out);
    });
    it('{ r: 255, g: 64, b: 64, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, .5 = { r: 255, g: 0, b: 0, a: 1 }', () => {
      const out = { r: 0, g: 0, b: 0, a: 1 } as Channels;
      colorInterpolate({ r: 255, g: 0, b: 0, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, .5, out);
      assert.deepEqual({ r: 255, g: 64, b: 64, a: 1 }, out);
    });
    it('{ r: 255, g: 96, b: 96, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, .5 = { r: 255, g: 0, b: 0, a: 1 }', () => {
      const out = { r: 0, g: 0, b: 0, a: 1 } as Channels;
      colorInterpolate({ r: 255, g: 0, b: 0, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, .75, out);
      assert.deepEqual({ r: 255, g: 96, b: 96, a: 1 }, out);
    });
    it('{ r: 255, g: 128, b: 128, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, .5 = { r: 255, g: 0, b: 0, a: 1 }', () => {
      const out = { r: 0, g: 0, b: 0, a: 1 } as Channels;
      colorInterpolate({ r: 255, g: 0, b: 0, a: 1 }, { r: 255, g: 128, b: 128, a: 1 }, 1, out);
      assert.deepEqual({ r: 255, g: 128, b: 128, a: 1 }, out);
    });
  });

  describe('colors()', () => {
    it('At 50%, blue and hsl(0, 100%, 50%) output rgba(128,0,128,1)', () => {
      assert.equal('rgba(128,0,128,1)', colors('blue', 'hsl(0, 100%, 50%)')(.5));
    });
    it('At 25%, rgba(255, 0, 0, 1) and hsl(0, 100%, 50%, 0) output rgba(255,0,0,0.5)', () => {
      assert.equal('rgba(255,0,0,0.250)', colors('hsl(0, 100%, 50%, 0)', 'rgba(255, 0, 0, 1)')(.25));
    });
  });
});
