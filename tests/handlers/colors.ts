import { colors } from '../../src/handlers';
import * as assert from 'assert';
const jsdom = require('mocha-jsdom');


describe('color', () => {
  jsdom();

  describe('formatColor()', () => {
    it('formats [255,0,0,1] as rgba(255,0,0,1)', () => {
      assert.equal('rgba(255,0,0,1)', colors.format([255, 0, 0, 1]));
    });
  });

  describe('parseColor()', () => {
    it('parses #FFF as white', () => {
      assert.deepEqual([255, 255, 255, 1], colors.parse('#FFF'));
    });

    it('parses #0000ff as blue', () => {
      assert.deepEqual([0, 0, 255, 1], colors.parse('#0000ff'));
    });

    it('parses "red" as red', () => {
      assert.deepEqual([255, 0, 0, 1], colors.parse('red'));
    });

    it('parses rgb(0, 255, 0) as green', () => {
      assert.deepEqual([0, 255, 0, 1], colors.parse('rgb(0,255,0)'));
    });

    it('parses rgba(0, 255, 0, 1) as green', () => {
      assert.deepEqual([0, 255, 0, 1], colors.parse('rgba(0,255,0,1)'));
    });

    it('parses hsl(0, 100%, 50%) as red', () => {
      assert.deepEqual([255, 0, 0, 1], colors.parse('hsl(0,100%,50%)'));
    });

    it('parses hsla(0, 100%, 50%, 1) as red', () => {
      assert.deepEqual([255, 0, 0, 1], colors.parse('hsl(0,100%,50%,1)'));
    });
  });
});
