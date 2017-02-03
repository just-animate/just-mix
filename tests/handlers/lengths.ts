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

  describe('format(mm)', () => {
    it('formats [-.1, mm] as -.1mm', () => {
      assert.equal('-0.100mm', lengths.format([-.1, 'mm']));
    });
    it('formats [1, mm] as 1mm', () => {
      assert.equal('1mm', lengths.format([1, 'mm']));
    });
  });
  describe('format(pt)', () => {
    it('formats [-.1, pt] as -.1pt', () => {
      assert.equal('-0.100pt', lengths.format([-.1, 'pt']));
    });
    it('formats [1, pt] as 1pt', () => {
      assert.equal('1pt', lengths.format([1, 'pt']));
    });
  });
  describe('format(pc)', () => {
    it('formats [-.1, pc] as -.1pc', () => {
      assert.equal('-0.100pc', lengths.format([-.1, 'pc']));
    });
    it('formats [1, pc] as 1pc', () => {
      assert.equal('1pc', lengths.format([1, 'pc']));
    });
  });
  describe('format(q)', () => {
    it('formats [-.1, q] as -.1q', () => {
      assert.equal('-0.100q', lengths.format([-.1, 'q']));
    });
    it('formats [1, q] as 1q', () => {
      assert.equal('1q', lengths.format([1, 'q']));
    });
  });
  describe('format(em)', () => {
    it('formats [-.1, em] as -.1em', () => {
      assert.equal('-0.100em', lengths.format([-.1, 'em']));
    });
    it('formats [1, em] as 1em', () => {
      assert.equal('1em', lengths.format([1, 'em']));
    });
  });
  describe('format(rem)', () => {
    it('formats [-.1, rem] as -.1rem', () => {
      assert.equal('-0.100rem', lengths.format([-.1, 'rem']));
    });
    it('formats [1, rem] as 1rem', () => {
      assert.equal('1rem', lengths.format([1, 'rem']));
    });
  });
  describe('format(ex)', () => {
    it('formats [-.1, ex] as -.1ex', () => {
      assert.equal('-0.100ex', lengths.format([-.1, 'ex']));
    });
    it('formats [1, ex] as 1ex', () => {
      assert.equal('1ex', lengths.format([1, 'ex']));
    });
  });
  describe('format(vw)', () => {
    it('formats [-.1, vw] as -.1vw', () => {
      assert.equal('-0.100vw', lengths.format([-.1, 'vw']));
    });
    it('formats [1, vw] as 1vw', () => {
      assert.equal('1vw', lengths.format([1, 'vw']));
    });
  });
  describe('format(vh)', () => {
    it('formats [-.1, vh] as -.1vh', () => {
      assert.equal('-0.100vh', lengths.format([-.1, 'vh']));
    });
    it('formats [1, vh] as 1vh', () => {
      assert.equal('1vh', lengths.format([1, 'vh']));
    });
  });
  describe('format(vmin)', () => {
    it('formats [-.1, vmin] as -.1vmin', () => {
      assert.equal('-0.100vmin', lengths.format([-.1, 'vmin']));
    });
    it('formats [1, vmin] as 1vmin', () => {
      assert.equal('1vmin', lengths.format([1, 'vmin']));
    });
  });
  describe('format(vmax)', () => {
    it('formats [-.1, vmax] as -.1vmax', () => {
      assert.equal('-0.100vmax', lengths.format([-.1, 'vmax']));
    });
    it('formats [1, vmax] as 1vmax', () => {
      assert.equal('1vmax', lengths.format([1, 'vmax']));
    });
  });
  describe('format(ch)', () => {
    it('formats [-.1, ch] as -.1ch', () => {
      assert.equal('-0.100ch', lengths.format([-.1, 'ch']));
    });
    it('formats [1, ch] as 1ch', () => {
      assert.equal('1ch', lengths.format([1, 'ch']));
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

  describe('parse(mm)', () => {
    it('parses 1mm as [1, mm]', () => {
      assert.deepEqual([1, 'mm'], lengths.parse('1mm'));
    });
    it('parses -.1mm as [-.1, mm]', () => {
      assert.deepEqual([-.1, 'mm'], lengths.parse('-.1mm'));
    });
    it('parses 1mm as [1, mm]', () => {
      assert.deepEqual([1, 'mm'], lengths.parse('1mm'));
    });
  });
  describe('parse(pt)', () => {
    it('parses 1pt as [1, pt]', () => {
      assert.deepEqual([1, 'pt'], lengths.parse('1pt'));
    });
    it('parses -.1pt as [-.1, pt]', () => {
      assert.deepEqual([-.1, 'pt'], lengths.parse('-.1pt'));
    });
    it('parses 1pt as [1, pt]', () => {
      assert.deepEqual([1, 'pt'], lengths.parse('1pt'));
    });
  });
  describe('parse(pc)', () => {
    it('parses 1pc as [1, pc]', () => {
      assert.deepEqual([1, 'pc'], lengths.parse('1pc'));
    });
    it('parses -.1pc as [-.1, pc]', () => {
      assert.deepEqual([-.1, 'pc'], lengths.parse('-.1pc'));
    });
    it('parses 1pc as [1, pc]', () => {
      assert.deepEqual([1, 'pc'], lengths.parse('1pc'));
    });
  });
  describe('parse(q)', () => {
    it('parses 1q as [1, q]', () => {
      assert.deepEqual([1, 'q'], lengths.parse('1q'));
    });
    it('parses -.1q as [-.1, q]', () => {
      assert.deepEqual([-.1, 'q'], lengths.parse('-.1q'));
    });
    it('parses 1q as [1, q]', () => {
      assert.deepEqual([1, 'q'], lengths.parse('1q'));
    });
  });
  describe('parse(em)', () => {
    it('parses 1em as [1, em]', () => {
      assert.deepEqual([1, 'em'], lengths.parse('1em'));
    });
    it('parses -.1em as [-.1, em]', () => {
      assert.deepEqual([-.1, 'em'], lengths.parse('-.1em'));
    });
    it('parses 1em as [1, em]', () => {
      assert.deepEqual([1, 'em'], lengths.parse('1em'));
    });
  });
  describe('parse(rem)', () => {
    it('parses 1rem as [1, rem]', () => {
      assert.deepEqual([1, 'rem'], lengths.parse('1rem'));
    });
    it('parses -.1rem as [-.1, rem]', () => {
      assert.deepEqual([-.1, 'rem'], lengths.parse('-.1rem'));
    });
    it('parses 1rem as [1, rem]', () => {
      assert.deepEqual([1, 'rem'], lengths.parse('1rem'));
    });
  });
  describe('parse(ex)', () => {
    it('parses 1ex as [1, ex]', () => {
      assert.deepEqual([1, 'ex'], lengths.parse('1ex'));
    });
    it('parses -.1ex as [-.1, ex]', () => {
      assert.deepEqual([-.1, 'ex'], lengths.parse('-.1ex'));
    });
    it('parses 1ex as [1, ex]', () => {
      assert.deepEqual([1, 'ex'], lengths.parse('1ex'));
    });
  });
  describe('parse(vw)', () => {
    it('parses 1vw as [1, vw]', () => {
      assert.deepEqual([1, 'vw'], lengths.parse('1vw'));
    });
    it('parses -.1vw as [-.1, vw]', () => {
      assert.deepEqual([-.1, 'vw'], lengths.parse('-.1vw'));
    });
    it('parses 1vw as [1, vw]', () => {
      assert.deepEqual([1, 'vw'], lengths.parse('1vw'));
    });
  });
  describe('parse(vh)', () => {
    it('parses 1vh as [1, vh]', () => {
      assert.deepEqual([1, 'vh'], lengths.parse('1vh'));
    });
    it('parses -.1vh as [-.1, vh]', () => {
      assert.deepEqual([-.1, 'vh'], lengths.parse('-.1vh'));
    });
    it('parses 1vh as [1, vh]', () => {
      assert.deepEqual([1, 'vh'], lengths.parse('1vh'));
    });
  });
  describe('parse(vmin)', () => {
    it('parses 1vmin as [1, vmin]', () => {
      assert.deepEqual([1, 'vmin'], lengths.parse('1vmin'));
    });
    it('parses -.1vmin as [-.1, vmin]', () => {
      assert.deepEqual([-.1, 'vmin'], lengths.parse('-.1vmin'));
    });
    it('parses 1vmin as [1, vmin]', () => {
      assert.deepEqual([1, 'vmin'], lengths.parse('1vmin'));
    });
  });
  describe('parse(vmax)', () => {
    it('parses 1vmax as [1, vmax]', () => {
      assert.deepEqual([1, 'vmax'], lengths.parse('1vmax'));
    });
    it('parses -.1vmax as [-.1, vmax]', () => {
      assert.deepEqual([-.1, 'vmax'], lengths.parse('-.1vmax'));
    });
    it('parses 1vmax as [1, vmax]', () => {
      assert.deepEqual([1, 'vmax'], lengths.parse('1vmax'));
    });
  });
  describe('parse(ch)', () => {
    it('parses 1ch as [1, ch]', () => {
      assert.deepEqual([1, 'ch'], lengths.parse('1ch'));
    });
    it('parses -.1ch as [-.1, ch]', () => {
      assert.deepEqual([-.1, 'ch'], lengths.parse('-.1ch'));
    });
    it('parses 1ch as [1, ch]', () => {
      assert.deepEqual([1, 'ch'], lengths.parse('1ch'));
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

  describe('interpolate(mm)', () => {
    it('interpolate 0, 1mm, 0 = 0', () => {
      assert.deepEqual([0, 'mm'], lengths.interpolate([0, undefined], [1, 'mm'], 0));
    });
    it('interpolate 0, 1mm, .5 = .5mm', () => {
      assert.deepEqual([.5, 'mm'], lengths.interpolate([0, undefined], [1, 'mm'], .5));
    });
    it('interpolate .5mm, 1mm, .5 = .75mm', () => {
      assert.deepEqual([.75, 'mm'], lengths.interpolate([.5, 'mm'], [1, 'mm'], .5));
    });
    it('interpolate 0, 1mm, 1 = 1mm', () => {
      assert.deepEqual([1, 'mm'], lengths.interpolate([0, undefined], [1, 'mm'], 1));
    });
  });
  describe('interpolate(pt)', () => {
    it('interpolate 0, 1pt, 0 = 0', () => {
      assert.deepEqual([0, 'pt'], lengths.interpolate([0, undefined], [1, 'pt'], 0));
    });
    it('interpolate 0, 1pt, .5 = .5pt', () => {
      assert.deepEqual([.5, 'pt'], lengths.interpolate([0, undefined], [1, 'pt'], .5));
    });
    it('interpolate .5pt, 1pt, .5 = .75pt', () => {
      assert.deepEqual([.75, 'pt'], lengths.interpolate([.5, 'pt'], [1, 'pt'], .5));
    });
    it('interpolate 0, 1pt, 1 = 1pt', () => {
      assert.deepEqual([1, 'pt'], lengths.interpolate([0, undefined], [1, 'pt'], 1));
    });
  });
  describe('interpolate(pc)', () => {
    it('interpolate 0, 1pc, 0 = 0', () => {
      assert.deepEqual([0, 'pc'], lengths.interpolate([0, undefined], [1, 'pc'], 0));
    });
    it('interpolate 0, 1pc, .5 = .5pc', () => {
      assert.deepEqual([.5, 'pc'], lengths.interpolate([0, undefined], [1, 'pc'], .5));
    });
    it('interpolate .5pc, 1pc, .5 = .75pc', () => {
      assert.deepEqual([.75, 'pc'], lengths.interpolate([.5, 'pc'], [1, 'pc'], .5));
    });
    it('interpolate 0, 1pc, 1 = 1pc', () => {
      assert.deepEqual([1, 'pc'], lengths.interpolate([0, undefined], [1, 'pc'], 1));
    });
  });
  describe('interpolate(q)', () => {
    it('interpolate 0, 1q, 0 = 0', () => {
      assert.deepEqual([0, 'q'], lengths.interpolate([0, undefined], [1, 'q'], 0));
    });
    it('interpolate 0, 1q, .5 = .5q', () => {
      assert.deepEqual([.5, 'q'], lengths.interpolate([0, undefined], [1, 'q'], .5));
    });
    it('interpolate .5q, 1q, .5 = .75q', () => {
      assert.deepEqual([.75, 'q'], lengths.interpolate([.5, 'q'], [1, 'q'], .5));
    });
    it('interpolate 0, 1q, 1 = 1q', () => {
      assert.deepEqual([1, 'q'], lengths.interpolate([0, undefined], [1, 'q'], 1));
    });
  });
  describe('interpolate(em)', () => {
    it('interpolate 0, 1em, 0 = 0', () => {
      assert.deepEqual([0, 'em'], lengths.interpolate([0, undefined], [1, 'em'], 0));
    });
    it('interpolate 0, 1em, .5 = .5em', () => {
      assert.deepEqual([.5, 'em'], lengths.interpolate([0, undefined], [1, 'em'], .5));
    });
    it('interpolate .5em, 1em, .5 = .75em', () => {
      assert.deepEqual([.75, 'em'], lengths.interpolate([.5, 'em'], [1, 'em'], .5));
    });
    it('interpolate 0, 1em, 1 = 1em', () => {
      assert.deepEqual([1, 'em'], lengths.interpolate([0, undefined], [1, 'em'], 1));
    });
  });
  describe('interpolate(rem)', () => {
    it('interpolate 0, 1rem, 0 = 0', () => {
      assert.deepEqual([0, 'rem'], lengths.interpolate([0, undefined], [1, 'rem'], 0));
    });
    it('interpolate 0, 1rem, .5 = .5rem', () => {
      assert.deepEqual([.5, 'rem'], lengths.interpolate([0, undefined], [1, 'rem'], .5));
    });
    it('interpolate .5rem, 1rem, .5 = .75rem', () => {
      assert.deepEqual([.75, 'rem'], lengths.interpolate([.5, 'rem'], [1, 'rem'], .5));
    });
    it('interpolate 0, 1rem, 1 = 1rem', () => {
      assert.deepEqual([1, 'rem'], lengths.interpolate([0, undefined], [1, 'rem'], 1));
    });
  });
  describe('interpolate(ex)', () => {
    it('interpolate 0, 1ex, 0 = 0', () => {
      assert.deepEqual([0, 'ex'], lengths.interpolate([0, undefined], [1, 'ex'], 0));
    });
    it('interpolate 0, 1ex, .5 = .5ex', () => {
      assert.deepEqual([.5, 'ex'], lengths.interpolate([0, undefined], [1, 'ex'], .5));
    });
    it('interpolate .5ex, 1ex, .5 = .75ex', () => {
      assert.deepEqual([.75, 'ex'], lengths.interpolate([.5, 'ex'], [1, 'ex'], .5));
    });
    it('interpolate 0, 1ex, 1 = 1ex', () => {
      assert.deepEqual([1, 'ex'], lengths.interpolate([0, undefined], [1, 'ex'], 1));
    });
  });
  describe('interpolate(vw)', () => {
    it('interpolate 0, 1vw, 0 = 0', () => {
      assert.deepEqual([0, 'vw'], lengths.interpolate([0, undefined], [1, 'vw'], 0));
    });
    it('interpolate 0, 1vw, .5 = .5vw', () => {
      assert.deepEqual([.5, 'vw'], lengths.interpolate([0, undefined], [1, 'vw'], .5));
    });
    it('interpolate .5vw, 1vw, .5 = .75vw', () => {
      assert.deepEqual([.75, 'vw'], lengths.interpolate([.5, 'vw'], [1, 'vw'], .5));
    });
    it('interpolate 0, 1vw, 1 = 1vw', () => {
      assert.deepEqual([1, 'vw'], lengths.interpolate([0, undefined], [1, 'vw'], 1));
    });
  });
  describe('interpolate(vh)', () => {
    it('interpolate 0, 1vh, 0 = 0', () => {
      assert.deepEqual([0, 'vh'], lengths.interpolate([0, undefined], [1, 'vh'], 0));
    });
    it('interpolate 0, 1vh, .5 = .5vh', () => {
      assert.deepEqual([.5, 'vh'], lengths.interpolate([0, undefined], [1, 'vh'], .5));
    });
    it('interpolate .5vh, 1vh, .5 = .75vh', () => {
      assert.deepEqual([.75, 'vh'], lengths.interpolate([.5, 'vh'], [1, 'vh'], .5));
    });
    it('interpolate 0, 1vh, 1 = 1vh', () => {
      assert.deepEqual([1, 'vh'], lengths.interpolate([0, undefined], [1, 'vh'], 1));
    });
  });
  describe('interpolate(vmin)', () => {
    it('interpolate 0, 1vmin, 0 = 0', () => {
      assert.deepEqual([0, 'vmin'], lengths.interpolate([0, undefined], [1, 'vmin'], 0));
    });
    it('interpolate 0, 1vmin, .5 = .5vmin', () => {
      assert.deepEqual([.5, 'vmin'], lengths.interpolate([0, undefined], [1, 'vmin'], .5));
    });
    it('interpolate .5vmin, 1vmin, .5 = .75vmin', () => {
      assert.deepEqual([.75, 'vmin'], lengths.interpolate([.5, 'vmin'], [1, 'vmin'], .5));
    });
    it('interpolate 0, 1vmin, 1 = 1vmin', () => {
      assert.deepEqual([1, 'vmin'], lengths.interpolate([0, undefined], [1, 'vmin'], 1));
    });
  });
  describe('interpolate(vmax)', () => {
    it('interpolate 0, 1vmax, 0 = 0', () => {
      assert.deepEqual([0, 'vmax'], lengths.interpolate([0, undefined], [1, 'vmax'], 0));
    });
    it('interpolate 0, 1vmax, .5 = .5vmax', () => {
      assert.deepEqual([.5, 'vmax'], lengths.interpolate([0, undefined], [1, 'vmax'], .5));
    });
    it('interpolate .5vmax, 1vmax, .5 = .75vmax', () => {
      assert.deepEqual([.75, 'vmax'], lengths.interpolate([.5, 'vmax'], [1, 'vmax'], .5));
    });
    it('interpolate 0, 1vmax, 1 = 1vmax', () => {
      assert.deepEqual([1, 'vmax'], lengths.interpolate([0, undefined], [1, 'vmax'], 1));
    });
  });
  describe('interpolate(ch)', () => {
    it('interpolate 0, 1ch, 0 = 0', () => {
      assert.deepEqual([0, 'ch'], lengths.interpolate([0, undefined], [1, 'ch'], 0));
    });
    it('interpolate 0, 1ch, .5 = .5ch', () => {
      assert.deepEqual([.5, 'ch'], lengths.interpolate([0, undefined], [1, 'ch'], .5));
    });
    it('interpolate .5ch, 1ch, .5 = .75ch', () => {
      assert.deepEqual([.75, 'ch'], lengths.interpolate([.5, 'ch'], [1, 'ch'], .5));
    });
    it('interpolate 0, 1ch, 1 = 1ch', () => {
      assert.deepEqual([1, 'ch'], lengths.interpolate([0, undefined], [1, 'ch'], 1));
    });
  });

  describe('lengths(px)', () => {
    it('0, 1px, 0 = 0', () => {
      assert.equal('0', lengths('0', '1px')(0));
    });
    it('0, 1px, .5 = .5px', () => {
      assert.equal('0.500px', lengths('0', '1px')(.5));
    });
    it('.5px, 1px, .5 = 0.750px', () => {
      assert.equal('0.750px', lengths('.5px', '1px')(.5));
    });
    it('0, 1px, 1 = 1px', () => {
      assert.equal('1px', lengths('0', '1px')(1));
    });
  });

  describe('lengths(in)', () => {
    it('0, 1in, 0 = 0', () => {
      assert.equal('0', lengths('0', '1in')(0));
    });
    it('0, 1in, .5 = .5in', () => {
      assert.equal('0.500in', lengths('0', '1in')(.5));
    });
    it('.5in, 1in, .5 = 0.750in', () => {
      assert.equal('0.750in', lengths('.5in', '1in')(.5));
    });
    it('0, 1in, 1 = 1in', () => {
      assert.equal('1in', lengths('0', '1in')(1));
    });
  });

  describe('lengths(cm)', () => {
    it('0, 1cm, 0 = 0', () => {
      assert.equal('0', lengths('0', '1cm')(0));
    });
    it('0, 1cm, .5 = .5cm', () => {
      assert.equal('0.500cm', lengths('0', '1cm')(.5));
    });
    it('.5cm, 1cm, .5 = 0.750cm', () => {
      assert.equal('0.750cm', lengths('.5cm', '1cm')(.5));
    });
    it('0, 1cm, 1 = 1cm', () => {
      assert.equal('1cm', lengths('0', '1cm')(1));
    });
  });

  describe('lengths(mm)', () => {
    it('0, 1mm, 0 = 0', () => {
      assert.equal('0', lengths('0', '1mm')(0));
    });
    it('0, 1mm, .5 = .5mm', () => {
      assert.equal('0.500mm', lengths('0', '1mm')(.5));
    });
    it('.5mm, 1mm, .5 = 0.750mm', () => {
      assert.equal('0.750mm', lengths('.5mm', '1mm')(.5));
    });
    it('0, 1mm, 1 = 1mm', () => {
      assert.equal('1mm', lengths('0', '1mm')(1));
    });
  });

  describe('lengths(em)', () => {
    it('0, 1em, 0 = 0', () => {
      assert.equal('0', lengths('0', '1em')(0));
    });
    it('0, 1em, .5 = .5em', () => {
      assert.equal('0.500em', lengths('0', '1em')(.5));
    });
    it('.5em, 1em, .5 = 0.750em', () => {
      assert.equal('0.750em', lengths('.5em', '1em')(.5));
    });
    it('0, 1em, 1 = 1em', () => {
      assert.equal('1em', lengths('0', '1em')(1));
    });
  });

  describe('lengths(rem)', () => {
    it('0, 1rem, 0 = 0', () => {
      assert.equal('0', lengths('0', '1rem')(0));
    });
    it('0, 1rem, .5 = .5rem', () => {
      assert.equal('0.500rem', lengths('0', '1rem')(.5));
    });
    it('.5rem, 1rem, .5 = 0.750rem', () => {
      assert.equal('0.750rem', lengths('.5rem', '1rem')(.5));
    });
    it('0, 1rem, 1 = 1rem', () => {
      assert.equal('1rem', lengths('0', '1rem')(1));
    });
  });

  describe('lengths(pt)', () => {
    it('0, 1pt, 0 = 0', () => {
      assert.equal('0', lengths('0', '1pt')(0));
    });
    it('0, 1pt, .5 = .5pt', () => {
      assert.equal('0.500pt', lengths('0', '1pt')(.5));
    });
    it('.5pt, 1pt, .5 = 0.750pt', () => {
      assert.equal('0.750pt', lengths('.5pt', '1pt')(.5));
    });
    it('0, 1pt, 1 = 1pt', () => {
      assert.equal('1pt', lengths('0', '1pt')(1));
    });
  });

  describe('lengths(pc)', () => {
    it('0, 1pc, 0 = 0', () => {
      assert.equal('0', lengths('0', '1pc')(0));
    });
    it('0, 1pc, .5 = .5pc', () => {
      assert.equal('0.500pc', lengths('0', '1pc')(.5));
    });
    it('.5pc, 1pc, .5 = 0.750pc', () => {
      assert.equal('0.750pc', lengths('.5pc', '1pc')(.5));
    });
    it('0, 1pc, 1 = 1pc', () => {
      assert.equal('1pc', lengths('0', '1pc')(1));
    });
  });

  describe('lengths(ex)', () => {
    it('0, 1ex, 0 = 0', () => {
      assert.equal('0', lengths('0', '1ex')(0));
    });
    it('0, 1ex, .5 = .5ex', () => {
      assert.equal('0.500ex', lengths('0', '1ex')(.5));
    });
    it('.5ex, 1ex, .5 = 0.750ex', () => {
      assert.equal('0.750ex', lengths('.5ex', '1ex')(.5));
    });
    it('0, 1ex, 1 = 1ex', () => {
      assert.equal('1ex', lengths('0', '1ex')(1));
    });
  });

  describe('lengths(ch)', () => {
    it('0, 1ch, 0 = 0', () => {
      assert.equal('0', lengths('0', '1ch')(0));
    });
    it('0, 1ch, .5 = .5ch', () => {
      assert.equal('0.500ch', lengths('0', '1ch')(.5));
    });
    it('.5ch, 1ch, .5 = 0.750ch', () => {
      assert.equal('0.750ch', lengths('.5ch', '1ch')(.5));
    });
    it('0, 1ch, 1 = 1ch', () => {
      assert.equal('1ch', lengths('0', '1ch')(1));
    });
  });

  describe('lengths(vw)', () => {
    it('0, 1vw, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vw')(0));
    });
    it('0, 1vw, .5 = .5vw', () => {
      assert.equal('0.500vw', lengths('0', '1vw')(.5));
    });
    it('.5vw, 1vw, .5 = 0.750vw', () => {
      assert.equal('0.750vw', lengths('.5vw', '1vw')(.5));
    });
    it('0, 1vw, 1 = 1vw', () => {
      assert.equal('1vw', lengths('0', '1vw')(1));
    });
  });

  describe('lengths(vh)', () => {
    it('0, 1vh, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vh')(0));
    });
    it('0, 1vh, .5 = .5vh', () => {
      assert.equal('0.500vh', lengths('0', '1vh')(.5));
    });
    it('.5vh, 1vh, .5 = 0.750vh', () => {
      assert.equal('0.750vh', lengths('.5vh', '1vh')(.5));
    });
    it('0, 1vh, 1 = 1vh', () => {
      assert.equal('1vh', lengths('0', '1vh')(1));
    });
  });

  describe('lengths(vmin)', () => {
    it('0, 1vmin, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vmin')(0));
    });
    it('0, 1vmin, .5 = .5vmin', () => {
      assert.equal('0.500vmin', lengths('0', '1vmin')(.5));
    });
    it('.5vmin, 1vmin, .5 = 0.750vmin', () => {
      assert.equal('0.750vmin', lengths('.5vmin', '1vmin')(.5));
    });
    it('0, 1vmin, 1 = 1vmin', () => {
      assert.equal('1vmin', lengths('0', '1vmin')(1));
    });
  });

  describe('lengths(vmax)', () => {
    it('0, 1vmax, 0 = 0', () => {
      assert.equal('0', lengths('0', '1vmax')(0));
    });
    it('0, 1vmax, .5 = .5vmax', () => {
      assert.equal('0.500vmax', lengths('0', '1vmax')(.5));
    });
    it('.5vmax, 1vmax, .5 = 0.750vmax', () => {
      assert.equal('0.750vmax', lengths('.5vmax', '1vmax')(.5));
    });
    it('0, 1vmax, 1 = 1vmax', () => {
      assert.equal('1vmax', lengths('0', '1vmax')(1));
    });
  });

  describe('lengths(q)', () => {
    it('0, 1q, 0 = 0', () => {
      assert.equal('0', lengths('0', '1q')(0));
    });
    it('0, 1q, .5 = .5q', () => {
      assert.equal('0.500q', lengths('0', '1q')(.5));
    });
    it('.5q, 1q, .5 = 0.750q', () => {
      assert.equal('0.750q', lengths('.5q', '1q')(.5));
    });
    it('0, 1q, 1 = 1q', () => {
      assert.equal('1q', lengths('0', '1q')(1));
    });
  });

  describe('lengths(multiple)', () => {
    it('tweens between multiple mm lengths', () => {
      const tween = lengths('0', '5mm', '100mm');
      assert.equal('0', tween(0));
      assert.equal('2.500mm', tween(.25));
      assert.equal('5mm', tween(.5));
      assert.equal('52.500mm', tween(.75));
      assert.equal('100mm', tween(1));
    });

    it('tweens between multiple absolute lengths', () => {
      const tween = lengths('0', '5mm', '10cm');
      assert.equal('0', tween(0));
      assert.equal('9.450px', tween(.25));
      assert.equal('18.900px', tween(.5));
      assert.equal('198.450px', tween(.75));
      assert.equal('378px', tween(1));
    });
  });
});
