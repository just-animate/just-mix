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

  describe('lengths(mm)', () => {
    it('0, 1mm, 0 = 0', () => {
      assert.equal('0', lengths('0', '1mm', 0));
    });
    it('0, 1mm, .5 = .5mm', () => {
      assert.equal('0.500mm', lengths('0', '1mm', .5));
    });
    it('.5mm, 1mm, .5 = 0.750mm', () => {
      assert.equal('0.750mm', lengths('.5mm', '1mm', .5));
    });
    it('0, 1mm, 1 = 1mm', () => {
      assert.equal('1mm', lengths('0', '1mm', 1));
    });
  });

  describe('lengths(em)', () => {
    it('0, 1em, 0 = 0', () => {
      assert.equal('0', lengths('0', '1em', 0));
    });
    it('0, 1em, .5 = .5em', () => {
      assert.equal('0.500em', lengths('0', '1em', .5));
    });
    it('.5em, 1em, .5 = 0.750em', () => {
      assert.equal('0.750em', lengths('.5em', '1em', .5));
    });
    it('0, 1em, 1 = 1em', () => {
      assert.equal('1em', lengths('0', '1em', 1));
    });
  });

  describe('lengths(rem)', () => {
    it('0, 1rem, 0 = 0', () => {
      assert.equal('0', lengths('0', '1rem', 0));
    });
    it('0, 1rem, .5 = .5rem', () => {
      assert.equal('0.500rem', lengths('0', '1rem', .5));
    });
    it('.5rem, 1rem, .5 = 0.750rem', () => {
      assert.equal('0.750rem', lengths('.5rem', '1rem', .5));
    });
    it('0, 1rem, 1 = 1rem', () => {
      assert.equal('1rem', lengths('0', '1rem', 1));
    });
  });

  describe('lengths(pt)', () => {
    it('0, 1pt, 0 = 0', () => {
      assert.equal('0', lengths('0', '1pt', 0));
    });
    it('0, 1pt, .5 = .5pt', () => {
      assert.equal('0.500pt', lengths('0', '1pt', .5));
    });
    it('.5pt, 1pt, .5 = 0.750pt', () => {
      assert.equal('0.750pt', lengths('.5pt', '1pt', .5));
    });
    it('0, 1pt, 1 = 1pt', () => {
      assert.equal('1pt', lengths('0', '1pt', 1));
    });
  });

  describe('lengths(pc)', () => {
    it('0, 1pc, 0 = 0', () => {
      assert.equal('0', lengths('0', '1pc', 0));
    });
    it('0, 1pc, .5 = .5pc', () => {
      assert.equal('0.500pc', lengths('0', '1pc', .5));
    });
    it('.5pc, 1pc, .5 = 0.750pc', () => {
      assert.equal('0.750pc', lengths('.5pc', '1pc', .5));
    });
    it('0, 1pc, 1 = 1pc', () => {
      assert.equal('1pc', lengths('0', '1pc', 1));
    });
  });

  describe('lengths(ex)', () => {
    it('0, 1ex, 0 = 0', () => {
      assert.equal('0', lengths('0', '1ex', 0));
    });
    it('0, 1ex, .5 = .5ex', () => {
      assert.equal('0.500ex', lengths('0', '1ex', .5));
    });
    it('.5ex, 1ex, .5 = 0.750ex', () => {
      assert.equal('0.750ex', lengths('.5ex', '1ex', .5));
    });
    it('0, 1ex, 1 = 1ex', () => {
      assert.equal('1ex', lengths('0', '1ex', 1));
    });
  });

  describe('lengths(ch)', () => {
    it('0, 1ch, 0 = 0', () => {
      assert.equal('0', lengths('0', '1ch', 0));
    });
    it('0, 1ch, .5 = .5ch', () => {
      assert.equal('0.500ch', lengths('0', '1ch', .5));
    });
    it('.5ch, 1ch, .5 = 0.750ch', () => {
      assert.equal('0.750ch', lengths('.5ch', '1ch', .5));
    });
    it('0, 1ch, 1 = 1ch', () => {
      assert.equal('1ch', lengths('0', '1ch', 1));
    });
  });

  describe('lengths(vw)', () => {
    it('0, 1vw, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vw', 0));
    });
    it('0, 1vw, .5 = .5vw', () => {
      assert.equal('0.500vw', lengths('0', '1vw', .5));
    });
    it('.5vw, 1vw, .5 = 0.750vw', () => {
      assert.equal('0.750vw', lengths('.5vw', '1vw', .5));
    });
    it('0, 1vw, 1 = 1vw', () => {
      assert.equal('1vw', lengths('0', '1vw', 1));
    });
  });

  describe('lengths(vh)', () => {
    it('0, 1vh, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vh', 0));
    });
    it('0, 1vh, .5 = .5vh', () => {
      assert.equal('0.500vh', lengths('0', '1vh', .5));
    });
    it('.5vh, 1vh, .5 = 0.750vh', () => {
      assert.equal('0.750vh', lengths('.5vh', '1vh', .5));
    });
    it('0, 1vh, 1 = 1vh', () => {
      assert.equal('1vh', lengths('0', '1vh', 1));
    });
  });

  describe('lengths(vmin)', () => {
    it('0, 1vmin, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vmin', 0));
    });
    it('0, 1vmin, .5 = .5vmin', () => {
      assert.equal('0.500vmin', lengths('0', '1vmin', .5));
    });
    it('.5vmin, 1vmin, .5 = 0.750vmin', () => {
      assert.equal('0.750vmin', lengths('.5vmin', '1vmin', .5));
    });
    it('0, 1vmin, 1 = 1vmin', () => {
      assert.equal('1vmin', lengths('0', '1vmin', 1));
    });
  });

  describe('lengths(vmax)', () => {
    it('0, 1vmax, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vmax', 0));
    });
    it('0, 1vmax, .5 = .5vmax', () => {
      assert.equal('0.500vmax', lengths('0', '1vmax', .5));
    });
    it('.5vmax, 1vmax, .5 = 0.750vmax', () => {
      assert.equal('0.750vmax', lengths('.5vmax', '1vmax', .5));
    });
    it('0, 1vmax, 1 = 1vmax', () => {
      assert.equal('1vmax', lengths('0', '1vmax', 1));
    });
  });

  describe('lengths(q)', () => {
    it('0, 1q, 0 = 0', () => {
      assert.equal('0', lengths('0', '1q', 0));
    });
    it('0, 1q, .5 = .5q', () => {
      assert.equal('0.500q', lengths('0', '1q', .5));
    });
    it('.5q, 1q, .5 = 0.750q', () => {
      assert.equal('0.750q', lengths('.5q', '1q', .5));
    });
    it('0, 1q, 1 = 1q', () => {
      assert.equal('1q', lengths('0', '1q', 1));
    });
  });
});
