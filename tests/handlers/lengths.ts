import { lengths } from '../../src/handlers';
import * as assert from 'assert';

describe('lengths', () => {

  describe('format(no-unit)', () => {
    it('formats [0, undefined] as 0', () => {
      assert.equal('-0.100px', lengths.format([-.1, undefined]));
    });
    it('formats [-.1, undefined] as -.1px', () => {
      assert.equal('-0.100px', lengths.format([-.1, undefined]));
    });
    it('formats [1, undefined] as 1px', () => {
      assert.equal('1px', lengths.format([1, undefined]));
    });
  });

  describe('format(px)', () => {
    it('formats [-.1, px] as -.1px', () => {
      assert.equal('-0.100px', lengths.format([-.1, 'px']));
    });
    it('formats [1, px] as 1px', () => {
      assert.equal('1px', lengths.format([1, 'px']));
    });
  });

  describe('format(in)', () => {
    it('formats [-.1, in] as -.1in', () => {
      assert.equal('-0.100in', lengths.format([-.1, 'in']));
    });
    it('formats [1, in] as 1in', () => {
      assert.equal('1in', lengths.format([1, 'in']));
    });
  });

  describe('format(cm)', () => {
    it('formats [-.1, cm] as -.1cm', () => {
      assert.equal('-0.100cm', lengths.format([-.1, 'cm']));
    });
    it('formats [1, cm] as 1cm', () => {
      assert.equal('1cm', lengths.format([1, 'cm']));
    });
  });

  describe('parse(0)', () => {
    it('parses 0 as [0, undefined]', () => {
      assert.deepEqual([0, undefined], lengths.parse('0'));
    });
  });

  describe('parse(px)', () => {
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

  describe('parse(in)', () => {
    it('parses 1in as [1, in]', () => {
      assert.deepEqual([1, 'in'], lengths.parse('1in'));
    });
    it('parses -.1in as [-.1, in]', () => {
      assert.deepEqual([-.1, 'in'], lengths.parse('-.1in'));
    });
    it('parses 1in as [1, in]', () => {
      assert.deepEqual([1, 'in'], lengths.parse('1in'));
    });
  });

  describe('parse(cm)', () => {
    it('parses 1cm as [1, cm]', () => {
      assert.deepEqual([1, 'cm'], lengths.parse('1cm'));
    });
    it('parses -.1cm as [-.1, cm]', () => {
      assert.deepEqual([-.1, 'cm'], lengths.parse('-.1cm'));
    });
    it('parses 1cm as [1, cm]', () => {
      assert.deepEqual([1, 'cm'], lengths.parse('1cm'));
    });
  });

  describe('interpolate(px)', () => {
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

  describe('interpolate(in)', () => {
    it('interpolate 0, 1in, 0 = 0', () => {
      assert.deepEqual([0, 'in'], lengths.interpolate([0, undefined], [1, 'in'], 0));
    });
    it('interpolate 0, 1in, .5 = .5in', () => {
      assert.deepEqual([.5, 'in'], lengths.interpolate([0, undefined], [1, 'in'], .5));
    });
    it('interpolate .5in, 1in, .5 = .75in', () => {
      assert.deepEqual([.75, 'in'], lengths.interpolate([.5, 'in'], [1, 'in'], .5));
    });
    it('interpolate 0, 1in, 1 = 1in', () => {
      assert.deepEqual([1, 'in'], lengths.interpolate([0, undefined], [1, 'in'], 1));
    });
  });

  describe('interpolate(cm)', () => {
    it('interpolate 0, 1cm, 0 = 0', () => {
      assert.deepEqual([0, 'cm'], lengths.interpolate([0, undefined], [1, 'cm'], 0));
    });
    it('interpolate 0, 1cm, .5 = .5cm', () => {
      assert.deepEqual([.5, 'cm'], lengths.interpolate([0, undefined], [1, 'cm'], .5));
    });
    it('interpolate .5cm, 1cm, .5 = .75cm', () => {
      assert.deepEqual([.75, 'cm'], lengths.interpolate([.5, 'cm'], [1, 'cm'], .5));
    });
    it('interpolate 0, 1cm, 1 = 1cm', () => {
      assert.deepEqual([1, 'cm'], lengths.interpolate([0, undefined], [1, 'cm'], 1));
    });
  });

  describe('lengths(px)', () => {
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

  describe('lengths(in)', () => {
    it('0, 1in, 0 = 0', () => {
      assert.equal('0', lengths('0', '1in', 0));
    });
    it('0, 1in, .5 = .5in', () => {
      assert.equal('0.500in', lengths('0', '1in', .5));
    });
    it('.5in, 1in, .5 = 0.750in', () => {
      assert.equal('0.750in', lengths('.5in', '1in', .5));
    });
    it('0, 1in, 1 = 1in', () => {
      assert.equal('1in', lengths('0', '1in', 1));
    });
  });

  describe('lengths(cm)', () => {
    it('0, 1cm, 0 = 0', () => {
      assert.equal('0', lengths('0', '1cm', 0));
    });
    it('0, 1cm, .5 = .5cm', () => {
      assert.equal('0.500cm', lengths('0', '1cm', .5));
    });
    it('.5cm, 1cm, .5 = 0.750cm', () => {
      assert.equal('0.750cm', lengths('.5cm', '1cm', .5));
    });
    it('0, 1cm, 1 = 1cm', () => {
      assert.equal('1cm', lengths('0', '1cm', 1));
    });
  });
});
