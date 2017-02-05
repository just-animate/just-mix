import { colors, colorFormat, colorParse, colorInterpolate, Channels } from '../../src/handlers';
import * as assert from 'assert';

describe('color', () => {

  describe('format()', () => {
    it('formats [255,0,0,1] as rgba(255,0,0,1)', () => {
      assert.equal('rgba(255,0,0,1)', colorFormat([255, 0, 0, 1]));
    });
  });

  describe('parse()', () => {
    it('parses #FFF as white', () => {
      assert.deepEqual([255, 255, 255, 1], colorParse('#FFF'));
    });

    it('parses #0000ff as blue', () => {
      assert.deepEqual([0, 0, 255, 1], colorParse('#0000ff'));
    });

    it('parses "red" as red', () => {
      assert.deepEqual([255, 0, 0, 1], colorParse('red'));
    });

    it('parses rgb(0, 255, 0) as green', () => {
      assert.deepEqual([0, 255, 0, 1], colorParse('rgb(0,255,0)'));
    });

    it('parses rgba(0, 255, 0, 1) as green', () => {
      assert.deepEqual([0, 255, 0, 1], colorParse('rgba(0,255,0,1)'));
    });

    it('parses hsl(0, 100%, 50%) as red', () => {
      assert.deepEqual([255, 0, 0, 1], colorParse('hsl(0,100%,50%)'));
    });

    it('parses hsla(0, 100%, 50%, 1) as red', () => {
      assert.deepEqual([255, 0, 0, 1], colorParse('hsl(0,100%,50%,1)'));
    });
  });

  describe('interpolate()', () => {
    it('[255, 0, 0, 1], [255, 128, 128, 1], 0 = [255, 0, 0, 1]', () => {
      const out = [0, 0, 0, 0] as Channels;
      colorInterpolate([255, 0, 0, 1], [255, 128, 128, 1], 0, out);
      assert.deepEqual([255, 0, 0, 1], out);
    });
    it('[255, 64, 64, 1], [255, 128, 128, 1], .5 = [255, 0, 0, 1]', () => {
      const out = [0, 0, 0, 0] as Channels;
      colorInterpolate([255, 0, 0, 1], [255, 128, 128, 1], .5, out);
      assert.deepEqual([255, 64, 64, 1], out);
    });
    it('[255, 96, 96, 1], [255, 128, 128, 1], .5 = [255, 0, 0, 1]', () => {
      const out = [0, 0, 0, 0] as Channels;
      colorInterpolate([255, 0, 0, 1], [255, 128, 128, 1], .75, out);
      assert.deepEqual([255, 96, 96, 1], out);
    });
    it('[255, 128, 128, 1], [255, 128, 128, 1], .5 = [255, 0, 0, 1]', () => {
      const out = [0, 0, 0, 0] as Channels;
      colorInterpolate([255, 0, 0, 1], [255, 128, 128, 1], 1, out);
      assert.deepEqual([255, 128, 128, 1], out);
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
