import { lengths } from '../../src/handlers';
import * as assert from 'assert';

describe('number', () => {

  describe('format()', () => {
    it('formats [0, undefined] as 0', () => {
      assert.equal('-0.100px', lengths.format([-.1, undefined]));
    });
    it('formats [-.1, undefined] as -.1px', () => {
      assert.equal('-0.100px', lengths.format([-.1, undefined]));
    });
    it('formats [1, undefined] as 1px', () => {
      assert.equal('1px', lengths.format([1, undefined]));
    });
    it('formats [-.1, px] as -.1px', () => {
      assert.equal('-0.100px', lengths.format([-.1, 'px']));
    });
    it('formats [1, px] as 1px', () => {
      assert.equal('1px', lengths.format([1, 'px']));
    });
  });

  describe('parse()', () => {
    it('parses 0 as [0, undefined]', () => {
      assert.deepEqual([0, undefined], lengths.parse('0'));
    });
    it('parses 1px as [1, px]', () => {
      assert.deepEqual([1, 'px'], lengths.parse('1px'));
    });
    it('parses -.1px as [-.1, px]', () => {
      assert.deepEqual([-.1, 'px'], lengths.parse('-.1px'));
    });
    it('parses 1px as [1, px]', () => {
      assert.deepEqual([1, 'px'], lengths.parse('1px'));
    });
  });

  describe('interpolate()', () => {
    it('interpolate 0, 1px, 0 = 0', () => {
      assert.deepEqual([0, 'px'], lengths.interpolate([0, undefined], [1, 'px'], 0));
    });
    it('interpolate 0, 1px, .5 = .5px', () => {
      assert.deepEqual([.5, 'px'], lengths.interpolate([0, undefined], [1, 'px'], .5));
    });
    it('interpolate .5px, 1px, .5 = .75px', () => {
      assert.deepEqual([.75, 'px'], lengths.interpolate([.5, 'px'], [1, 'px'], .5));
    });
    it('interpolate 0, 1px, 1 = 1px', () => {
      assert.deepEqual([1, 'px'], lengths.interpolate([0, undefined], [1, 'px'], 1));
    });
  });

  describe('lengths()', () => {
    it('0, 1px, 0 = 0', () => {
      assert.equal('0', lengths('0', '1px', 0));
    });
    it('0, 1px, .5 = .5px', () => {
      assert.equal('0.500px', lengths('0', '1px', .5));
    });
    it('.5px, 1px, .5 = 0.750px', () => {
      assert.equal('0.750px', lengths('.5px', '1px', .5));
    });
    it('0, 1px, 1 = 1px', () => {
      assert.equal('1px', lengths('0', '1px', 1));
    });
  });
});
