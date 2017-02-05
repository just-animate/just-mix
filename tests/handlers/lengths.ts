import { lengths, lengthFormat, lengthParse, lengthInterpolate, LengthValue, lengthUnits } from '../../src/handlers';
import * as assert from 'assert';

describe('lengths', () => {

  describe('format(no-unit)', () => {
    it('formats [0, lengthUnits.none] as 0', () => {
      assert.equal('-0.100px', lengthFormat([-.1, lengthUnits.none]));
    });
    it('formats [-.1, lengthUnits.none] as -.1px', () => {
      assert.equal('-0.100px', lengthFormat([-.1, lengthUnits.none]));
    });
    it('formats [1, lengthUnits.none] as 1px', () => {
      assert.equal('1px', lengthFormat([1, lengthUnits.none]));
    });
  });

  describe('format(px)', () => {
    it('formats [-.1, px] as -.1px', () => {
      assert.equal('-0.100px', lengthFormat([-.1, lengthUnits.px]));
    });
    it('formats [1, px] as 1px', () => {
      assert.equal('1px', lengthFormat([1, lengthUnits.px]));
    });
  });

  describe('format(in)', () => {
    it('formats [-.1, in] as -.1in', () => {
      assert.equal('-0.100in', lengthFormat([-.1, lengthUnits.in]));
    });
    it('formats [1, in] as 1in', () => {
      assert.equal('1in', lengthFormat([1, lengthUnits.in]));
    });
  });

  describe('format(cm)', () => {
    it('formats [-.1, cm] as -.1cm', () => {
      assert.equal('-0.100cm', lengthFormat([-.1, lengthUnits.cm]));
    });
    it('formats [1, cm] as 1cm', () => {
      assert.equal('1cm', lengthFormat([1, lengthUnits.cm]));
    });
  });

  describe('format(mm)', () => {
    it('formats [-.1, mm] as -.1mm', () => {
      assert.equal('-0.100mm', lengthFormat([-.1, lengthUnits.mm]));
    });
    it('formats [1, mm] as 1mm', () => {
      assert.equal('1mm', lengthFormat([1, lengthUnits.mm]));
    });
  });
  describe('format(pt)', () => {
    it('formats [-.1, pt] as -.1pt', () => {
      assert.equal('-0.100pt', lengthFormat([-.1, lengthUnits.pt]));
    });
    it('formats [1, pt] as 1pt', () => {
      assert.equal('1pt', lengthFormat([1, lengthUnits.pt]));
    });
  });
  describe('format(pc)', () => {
    it('formats [-.1, pc] as -.1pc', () => {
      assert.equal('-0.100pc', lengthFormat([-.1, lengthUnits.pc]));
    });
    it('formats [1, pc] as 1pc', () => {
      assert.equal('1pc', lengthFormat([1, lengthUnits.pc]));
    });
  });
  describe('format(q)', () => {
    it('formats [-.1, q] as -.1q', () => {
      assert.equal('-0.100q', lengthFormat([-.1, lengthUnits.q]));
    });
    it('formats [1, q] as 1q', () => {
      assert.equal('1q', lengthFormat([1, lengthUnits.q]));
    });
  });
  describe('format(em)', () => {
    it('formats [-.1, em] as -.1em', () => {
      assert.equal('-0.100em', lengthFormat([-.1, lengthUnits.em]));
    });
    it('formats [1, em] as 1em', () => {
      assert.equal('1em', lengthFormat([1, lengthUnits.em]));
    });
  });
  describe('format(rem)', () => {
    it('formats [-.1, rem] as -.1rem', () => {
      assert.equal('-0.100rem', lengthFormat([-.1, lengthUnits.rem]));
    });
    it('formats [1, rem] as 1rem', () => {
      assert.equal('1rem', lengthFormat([1, lengthUnits.rem]));
    });
  });
  describe('format(ex)', () => {
    it('formats [-.1, ex] as -.1ex', () => {
      assert.equal('-0.100ex', lengthFormat([-.1, lengthUnits.ex]));
    });
    it('formats [1, ex] as 1ex', () => {
      assert.equal('1ex', lengthFormat([1, lengthUnits.ex]));
    });
  });
  describe('format(vw)', () => {
    it('formats [-.1, vw] as -.1vw', () => {
      assert.equal('-0.100vw', lengthFormat([-.1, lengthUnits.vw]));
    });
    it('formats [1, vw] as 1vw', () => {
      assert.equal('1vw', lengthFormat([1, lengthUnits.vw]));
    });
  });
  describe('format(vh)', () => {
    it('formats [-.1, vh] as -.1vh', () => {
      assert.equal('-0.100vh', lengthFormat([-.1, lengthUnits.vh]));
    });
    it('formats [1, vh] as 1vh', () => {
      assert.equal('1vh', lengthFormat([1, lengthUnits.vh]));
    });
  });
  describe('format(vmin)', () => {
    it('formats [-.1, vmin] as -.1vmin', () => {
      assert.equal('-0.100vmin', lengthFormat([-.1, lengthUnits.vmin]));
    });
    it('formats [1, vmin] as 1vmin', () => {
      assert.equal('1vmin', lengthFormat([1, lengthUnits.vmin]));
    });
  });
  describe('format(vmax)', () => {
    it('formats [-.1, vmax] as -.1vmax', () => {
      assert.equal('-0.100vmax', lengthFormat([-.1, lengthUnits.vmax]));
    });
    it('formats [1, vmax] as 1vmax', () => {
      assert.equal('1vmax', lengthFormat([1, lengthUnits.vmax]));
    });
  });
  describe('format(ch)', () => {
    it('formats [-.1, ch] as -.1ch', () => {
      assert.equal('-0.100ch', lengthFormat([-.1, lengthUnits.ch]));
    });
    it('formats [1, ch] as 1ch', () => {
      assert.equal('1ch', lengthFormat([1, lengthUnits.ch]));
    });
  });

  describe('parse(0)', () => {
    it('parses 0 as [0, lengthUnits.none]', () => {
      assert.deepEqual([0, lengthUnits.none], lengthParse('0'));
    });
  });

  describe('parse(px)', () => {
    it('parses 1px as [1, px]', () => {
      assert.deepEqual([1, lengthUnits.px], lengthParse('1px'));
    });
    it('parses -.1px as [-.1, px]', () => {
      assert.deepEqual([-.1, lengthUnits.px], lengthParse('-.1px'));
    });
    it('parses 1px as [1, px]', () => {
      assert.deepEqual([1, lengthUnits.px], lengthParse('1px'));
    });
  });

  describe('parse(in)', () => {
    it('parses 1in as [1, in]', () => {
      assert.deepEqual([1, lengthUnits.in], lengthParse('1in'));
    });
    it('parses -.1in as [-.1, in]', () => {
      assert.deepEqual([-.1, lengthUnits.in], lengthParse('-.1in'));
    });
    it('parses 1in as [1, in]', () => {
      assert.deepEqual([1, lengthUnits.in], lengthParse('1in'));
    });
  });

  describe('parse(cm)', () => {
    it('parses 1cm as [1, cm]', () => {
      assert.deepEqual([1, lengthUnits.cm], lengthParse('1cm'));
    });
    it('parses -.1cm as [-.1, cm]', () => {
      assert.deepEqual([-.1, lengthUnits.cm], lengthParse('-.1cm'));
    });
    it('parses 1cm as [1, cm]', () => {
      assert.deepEqual([1, lengthUnits.cm], lengthParse('1cm'));
    });
  });

  describe('parse(mm)', () => {
    it('parses 1mm as [1, mm]', () => {
      assert.deepEqual([1, lengthUnits.mm], lengthParse('1mm'));
    });
    it('parses -.1mm as [-.1, mm]', () => {
      assert.deepEqual([-.1, lengthUnits.mm], lengthParse('-.1mm'));
    });
    it('parses 1mm as [1, mm]', () => {
      assert.deepEqual([1, lengthUnits.mm], lengthParse('1mm'));
    });
  });
  describe('parse(pt)', () => {
    it('parses 1pt as [1, pt]', () => {
      assert.deepEqual([1, lengthUnits.pt], lengthParse('1pt'));
    });
    it('parses -.1pt as [-.1, pt]', () => {
      assert.deepEqual([-.1, lengthUnits.pt], lengthParse('-.1pt'));
    });
    it('parses 1pt as [1, pt]', () => {
      assert.deepEqual([1, lengthUnits.pt], lengthParse('1pt'));
    });
  });
  describe('parse(pc)', () => {
    it('parses 1pc as [1, pc]', () => {
      assert.deepEqual([1, lengthUnits.pc], lengthParse('1pc'));
    });
    it('parses -.1pc as [-.1, pc]', () => {
      assert.deepEqual([-.1, lengthUnits.pc], lengthParse('-.1pc'));
    });
    it('parses 1pc as [1, pc]', () => {
      assert.deepEqual([1, lengthUnits.pc], lengthParse('1pc'));
    });
  });
  describe('parse(q)', () => {
    it('parses 1q as [1, q]', () => {
      assert.deepEqual([1, lengthUnits.q], lengthParse('1q'));
    });
    it('parses -.1q as [-.1, q]', () => {
      assert.deepEqual([-.1, lengthUnits.q], lengthParse('-.1q'));
    });
    it('parses 1q as [1, q]', () => {
      assert.deepEqual([1, lengthUnits.q], lengthParse('1q'));
    });
  });
  describe('parse(em)', () => {
    it('parses 1em as [1, em]', () => {
      assert.deepEqual([1, lengthUnits.em], lengthParse('1em'));
    });
    it('parses -.1em as [-.1, em]', () => {
      assert.deepEqual([-.1, lengthUnits.em], lengthParse('-.1em'));
    });
    it('parses 1em as [1, em]', () => {
      assert.deepEqual([1, lengthUnits.em], lengthParse('1em'));
    });
  });
  describe('parse(rem)', () => {
    it('parses 1rem as [1, rem]', () => {
      assert.deepEqual([1, lengthUnits.rem], lengthParse('1rem'));
    });
    it('parses -.1rem as [-.1, rem]', () => {
      assert.deepEqual([-.1, lengthUnits.rem], lengthParse('-.1rem'));
    });
    it('parses 1rem as [1, rem]', () => {
      assert.deepEqual([1, lengthUnits.rem], lengthParse('1rem'));
    });
  });
  describe('parse(ex)', () => {
    it('parses 1ex as [1, ex]', () => {
      assert.deepEqual([1, lengthUnits.ex], lengthParse('1ex'));
    });
    it('parses -.1ex as [-.1, ex]', () => {
      assert.deepEqual([-.1, lengthUnits.ex], lengthParse('-.1ex'));
    });
    it('parses 1ex as [1, ex]', () => {
      assert.deepEqual([1, lengthUnits.ex], lengthParse('1ex'));
    });
  });
  describe('parse(vw)', () => {
    it('parses 1vw as [1, vw]', () => {
      assert.deepEqual([1, lengthUnits.vw], lengthParse('1vw'));
    });
    it('parses -.1vw as [-.1, vw]', () => {
      assert.deepEqual([-.1, lengthUnits.vw], lengthParse('-.1vw'));
    });
    it('parses 1vw as [1, vw]', () => {
      assert.deepEqual([1, lengthUnits.vw], lengthParse('1vw'));
    });
  });
  describe('parse(vh)', () => {
    it('parses 1vh as [1, vh]', () => {
      assert.deepEqual([1, lengthUnits.vh], lengthParse('1vh'));
    });
    it('parses -.1vh as [-.1, vh]', () => {
      assert.deepEqual([-.1, lengthUnits.vh], lengthParse('-.1vh'));
    });
    it('parses 1vh as [1, vh]', () => {
      assert.deepEqual([1, lengthUnits.vh], lengthParse('1vh'));
    });
  });
  describe('parse(vmin)', () => {
    it('parses 1vmin as [1, vmin]', () => {
      assert.deepEqual([1, lengthUnits.vmin], lengthParse('1vmin'));
    });
    it('parses -.1vmin as [-.1, vmin]', () => {
      assert.deepEqual([-.1, lengthUnits.vmin], lengthParse('-.1vmin'));
    });
    it('parses 1vmin as [1, vmin]', () => {
      assert.deepEqual([1, lengthUnits.vmin], lengthParse('1vmin'));
    });
  });
  describe('parse(vmax)', () => {
    it('parses 1vmax as [1, vmax]', () => {
      assert.deepEqual([1, lengthUnits.vmax], lengthParse('1vmax'));
    });
    it('parses -.1vmax as [-.1, vmax]', () => {
      assert.deepEqual([-.1, lengthUnits.vmax], lengthParse('-.1vmax'));
    });
    it('parses 1vmax as [1, vmax]', () => {
      assert.deepEqual([1, lengthUnits.vmax], lengthParse('1vmax'));
    });
  });
  describe('parse(ch)', () => {
    it('parses 1ch as [1, ch]', () => {
      assert.deepEqual([1, lengthUnits.ch], lengthParse('1ch'));
    });
    it('parses -.1ch as [-.1, ch]', () => {
      assert.deepEqual([-.1, lengthUnits.ch], lengthParse('-.1ch'));
    });
    it('parses 1ch as [1, ch]', () => {
      assert.deepEqual([1, lengthUnits.ch], lengthParse('1ch'));
    });
  });
  describe('interpolate(px)', () => {
    it('interpolate 0, 1px, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.px], 0, out);
      assert.deepEqual([0, lengthUnits.px], out);
    });
    it('interpolate 0, 1px, .5 = .5px', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.px], .5, out);
      assert.deepEqual([.5, lengthUnits.px], out);
    });
    it('interpolate .5px, 1px, .5 = .75px', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.px], [1, lengthUnits.px], .5, out);
      assert.deepEqual([.75, lengthUnits.px], out);
    });
    it('interpolate 0, 1px, 1 = 1px', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.px], 1, out);
      assert.deepEqual([1, lengthUnits.px], out);
    });
  });
  describe('interpolate(in)', () => {
    it('interpolate 0, 1in, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.in], 0, out);
      assert.deepEqual([0, lengthUnits.in], out);
    });
    it('interpolate 0, 1in, .5 = .5in', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.in], .5, out);
      assert.deepEqual([.5, lengthUnits.in], out);
    });
    it('interpolate .5in, 1in, .5 = .75in', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.in], [1, lengthUnits.in], .5, out);
      assert.deepEqual([.75, lengthUnits.in], out);
    });
    it('interpolate 0, 1in, 1 = 1in', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.in], 1, out);
      assert.deepEqual([1, lengthUnits.in], out);
    });
  });
  describe('interpolate(cm)', () => {
    it('interpolate 0, 1cm, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.cm], 0, out);
      assert.deepEqual([0, lengthUnits.cm], out);
    });
    it('interpolate 0, 1cm, .5 = .5cm', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.cm], .5, out);
      assert.deepEqual([.5, lengthUnits.cm], out);
    });
    it('interpolate .5cm, 1cm, .5 = .75cm', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.cm], [1, lengthUnits.cm], .5, out);
      assert.deepEqual([.75, lengthUnits.cm], out);
    });
    it('interpolate 0, 1cm, 1 = 1cm', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.cm], 1, out);
      assert.deepEqual([1, lengthUnits.cm], out);
    });
  });
  describe('interpolate(mm)', () => {
    it('interpolate 0, 1mm, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.mm], 0, out);
      assert.deepEqual([0, lengthUnits.mm], out);
    });
    it('interpolate 0, 1mm, .5 = .5mm', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.mm], .5, out);
      assert.deepEqual([.5, lengthUnits.mm], out);
    });
    it('interpolate .5mm, 1mm, .5 = .75mm', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.mm], [1, lengthUnits.mm], .5, out);
      assert.deepEqual([.75, lengthUnits.mm], out);
    });
    it('interpolate 0, 1mm, 1 = 1mm', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.mm], 1, out);
      assert.deepEqual([1, lengthUnits.mm], out);
    });
  });
  describe('interpolate(pt)', () => {
    it('interpolate 0, 1pt, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.pt], 0, out);
      assert.deepEqual([0, lengthUnits.pt], out);
    });
    it('interpolate 0, 1pt, .5 = .5pt', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.pt], .5, out);
      assert.deepEqual([.5, lengthUnits.pt], out);
    });
    it('interpolate .5pt, 1pt, .5 = .75pt', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.pt], [1, lengthUnits.pt], .5, out);
      assert.deepEqual([.75, lengthUnits.pt], out);
    });
    it('interpolate 0, 1pt, 1 = 1pt', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.pt], 1, out);
      assert.deepEqual([1, lengthUnits.pt], out);
    });
  });
  describe('interpolate(pc)', () => {
    it('interpolate 0, 1pc, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.pc], 0, out);
      assert.deepEqual([0, lengthUnits.pc], out);
    });
    it('interpolate 0, 1pc, .5 = .5pc', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.pc], .5, out);
      assert.deepEqual([.5, lengthUnits.pc], out);
    });
    it('interpolate .5pc, 1pc, .5 = .75pc', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.pc], [1, lengthUnits.pc], .5, out);
      assert.deepEqual([.75, lengthUnits.pc], out);
    });
    it('interpolate 0, 1pc, 1 = 1pc', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.pc], 1, out);
      assert.deepEqual([1, lengthUnits.pc], out);
    });
  });
  describe('interpolate(q)', () => {
    it('interpolate 0, 1q, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.q], 0, out);
      assert.deepEqual([0, lengthUnits.q], out);
    });
    it('interpolate 0, 1q, .5 = .5q', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.q], .5, out);
      assert.deepEqual([.5, lengthUnits.q], out);
    });
    it('interpolate .5q, 1q, .5 = .75q', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.q], [1, lengthUnits.q], .5, out);
      assert.deepEqual([.75, lengthUnits.q], out);
    });
    it('interpolate 0, 1q, 1 = 1q', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.q], 1, out);
      assert.deepEqual([1, lengthUnits.q], out);
    });
  });
  describe('interpolate(em)', () => {
    it('interpolate 0, 1em, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.em], 0, out);
      assert.deepEqual([0, lengthUnits.em], out);
    });
    it('interpolate 0, 1em, .5 = .5em', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.em], .5, out);
      assert.deepEqual([.5, lengthUnits.em], out);
    });
    it('interpolate .5em, 1em, .5 = .75em', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.em], [1, lengthUnits.em], .5, out);
      assert.deepEqual([.75, lengthUnits.em], out);
    });
    it('interpolate 0, 1em, 1 = 1em', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.em], 1, out);
      assert.deepEqual([1, lengthUnits.em], out);
    });
  });
  describe('interpolate(rem)', () => {
    it('interpolate 0, 1rem, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.rem], 0, out);
      assert.deepEqual([0, lengthUnits.rem], out);
    });
    it('interpolate 0, 1rem, .5 = .5rem', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.rem], .5, out);
      assert.deepEqual([.5, lengthUnits.rem], out);
    });
    it('interpolate .5rem, 1rem, .5 = .75rem', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.rem], [1, lengthUnits.rem], .5, out);
      assert.deepEqual([.75, lengthUnits.rem], out);
    });
    it('interpolate 0, 1rem, 1 = 1rem', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.rem], 1, out);
      assert.deepEqual([1, lengthUnits.rem], out);
    });
  });
  describe('interpolate(ex)', () => {
    it('interpolate 0, 1ex, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.ex], 0, out);
      assert.deepEqual([0, lengthUnits.ex], out);
    });
    it('interpolate 0, 1ex, .5 = .5ex', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.ex], .5, out);
      assert.deepEqual([.5, lengthUnits.ex], out);
    });
    it('interpolate .5ex, 1ex, .5 = .75ex', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.ex], [1, lengthUnits.ex], .5, out);
      assert.deepEqual([.75, lengthUnits.ex], out);
    });
    it('interpolate 0, 1ex, 1 = 1ex', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.ex], 1, out);
      assert.deepEqual([1, lengthUnits.ex], out);
    });
  });
  describe('interpolate(vw)', () => {
    it('interpolate 0, 1vw, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vw], 0, out);
      assert.deepEqual([0, lengthUnits.vw], out);
    });
    it('interpolate 0, 1vw, .5 = .5vw', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vw], .5, out);
      assert.deepEqual([.5, lengthUnits.vw], out);
    });
    it('interpolate .5vw, 1vw, .5 = .75vw', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.vw], [1, lengthUnits.vw], .5, out);
      assert.deepEqual([.75, lengthUnits.vw], out);
    });
    it('interpolate 0, 1vw, 1 = 1vw', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vw], 1, out);
      assert.deepEqual([1, lengthUnits.vw], out);
    });
  });
  describe('interpolate(vh)', () => {
    it('interpolate 0, 1vh, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vh], 0, out);
      assert.deepEqual([0, lengthUnits.vh], out);
    });
    it('interpolate 0, 1vh, .5 = .5vh', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vh], .5, out);
      assert.deepEqual([.5, lengthUnits.vh], out);
    });
    it('interpolate .5vh, 1vh, .5 = .75vh', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.vh], [1, lengthUnits.vh], .5, out);
      assert.deepEqual([.75, lengthUnits.vh], out);
    });
    it('interpolate 0, 1vh, 1 = 1vh', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vh], 1, out);
      assert.deepEqual([1, lengthUnits.vh], out);
    });
  });
  describe('interpolate(vmin)', () => {
    it('interpolate 0, 1vmin, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vmin], 0, out);
      assert.deepEqual([0, lengthUnits.vmin], out);
    });
    it('interpolate 0, 1vmin, .5 = .5vmin', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vmin], .5, out);
      assert.deepEqual([.5, lengthUnits.vmin], out);
    });
    it('interpolate .5vmin, 1vmin, .5 = .75vmin', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.vmin], [1, lengthUnits.vmin], .5, out);
      assert.deepEqual([.75, lengthUnits.vmin], out);
    });
    it('interpolate 0, 1vmin, 1 = 1vmin', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vmin], 1, out);
      assert.deepEqual([1, lengthUnits.vmin], out);
    });
  });
  describe('interpolate(vmax)', () => {
    it('interpolate 0, 1vmax, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vmax], 0, out);
      assert.deepEqual([0, lengthUnits.vmax], out);
    });
    it('interpolate 0, 1vmax, .5 = .5vmax', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vmax], .5, out);
      assert.deepEqual([.5, lengthUnits.vmax], out);
    });
    it('interpolate .5vmax, 1vmax, .5 = .75vmax', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.vmax], [1, lengthUnits.vmax], .5, out);
      assert.deepEqual([.75, lengthUnits.vmax], out);
    });
    it('interpolate 0, 1vmax, 1 = 1vmax', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.vmax], 1, out);
      assert.deepEqual([1, lengthUnits.vmax], out);
    });
  });
  describe('interpolate(ch)', () => {
    it('interpolate 0, 1ch, 0 = 0', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.ch], 0, out);
      assert.deepEqual([0, lengthUnits.ch], out);
    });
    it('interpolate 0, 1ch, .5 = .5ch', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.ch], .5, out);
      assert.deepEqual([.5, lengthUnits.ch], out);
    });
    it('interpolate .5ch, 1ch, .5 = .75ch', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([.5, lengthUnits.ch], [1, lengthUnits.ch], .5, out);
      assert.deepEqual([.75, lengthUnits.ch], out);
    });
    it('interpolate 0, 1ch, 1 = 1ch', () => {
      const out = [0, lengthUnits.none] as LengthValue;
      lengthInterpolate([0, lengthUnits.none], [1, lengthUnits.ch], 1, out);
      assert.deepEqual([1, lengthUnits.ch], out);
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
