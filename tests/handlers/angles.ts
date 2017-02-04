import { angles, angleUnits } from '../../src/handlers';
import * as assert from 'assert';

describe('angles', () => {
  describe('format()', () => {
    it('formats [0, deg] to 0', () => {
      assert.equal('0', angles.format([0, angleUnits.deg]));
    });
    it('formats [0, undefined] to 0', () => {
      assert.equal('0', angles.format([0, undefined]));
    });
    it('formats [20, deg] to 20deg', () => {
      assert.equal('20deg', angles.format([20, angleUnits.deg]));
    });
    it('formats [20, rad] to 20rad', () => {
      assert.equal('20rad', angles.format([20, angleUnits.rad]));
    });
    it('formats [20, grad] to 20grad', () => {
      assert.equal('20grad', angles.format([20, angleUnits.grad]));
    });
    it('formats [1, turn] to 1turn', () => {
      assert.equal('1turn', angles.format([1, angleUnits.turn]));
    });
  });

  describe('parse()', () => {
    it('parses 0 as [0, undefined]', () => {
      assert.deepEqual([0, undefined], angles.parse('0'));
    });
    it('parses 0deg as [0, deg]', () => {
      assert.deepEqual([0, undefined], angles.parse('0deg'));
    });
    it('parses 20deg as [20, deg]', () => {
      assert.deepEqual([20, angleUnits.deg], angles.parse('20deg'));
    });
    it('parses 20rad as [20, rad]', () => {
      assert.deepEqual([20, angleUnits.rad], angles.parse('20rad'));
    });
    it('parses 20grad as [20, grad]', () => {
      assert.deepEqual([20, angleUnits.grad], angles.parse('20grad'));
    });
    it('parses 1turn as [1, turn]', () => {
      assert.deepEqual([1, angleUnits.turn], angles.parse('1turn'));
    });
  });

  describe('interpolate(no-unit)', () => {
    it('0, 100deg, .5 = 0', () => {
      assert.deepEqual([0, undefined], angles.interpolate([0, undefined], [100, angleUnits.deg], 0));
    });
  });

  describe('interpolate(deg)', () => {
    it('0, 100deg, .25 = 25deg', () => {
      assert.deepEqual([25, angleUnits.deg], angles.interpolate([0, undefined], [100, angleUnits.deg], .25));
    });
    it('0, 100deg, .5 = 50deg', () => {
      assert.deepEqual([50, angleUnits.deg], angles.interpolate([0, undefined], [100, angleUnits.deg], .5));
    });
    it('0, 100deg, .75 = 75deg', () => {
      assert.deepEqual([75, angleUnits.deg], angles.interpolate([0, undefined], [100, angleUnits.deg], .75));
    });
    it('0, 100deg, 1 = 100deg', () => {
      assert.deepEqual([100, angleUnits.deg], angles.interpolate([0, undefined], [100, angleUnits.deg], 1));
    });
  });

  describe('interpolate(rad)', () => {
    it('0, 100rad, .25 = 25rad', () => {
      assert.deepEqual([25, angleUnits.rad], angles.interpolate([0, undefined], [100, angleUnits.rad], .25));
    });
    it('0, 100rad, .5 = 50rad', () => {
      assert.deepEqual([50, angleUnits.rad], angles.interpolate([0, undefined], [100, angleUnits.rad], .5));
    });
    it('0, 100rad, .75 = 75rad', () => {
      assert.deepEqual([75, angleUnits.rad], angles.interpolate([0, undefined], [100, angleUnits.rad], .75));
    });
    it('0, 100rad, 1 = 100rad', () => {
      assert.deepEqual([100, angleUnits.rad], angles.interpolate([0, undefined], [100, angleUnits.rad], 1));
    });
  });

  describe('interpolate(grad)', () => {
    it('0, 100grad, .25 = 25grad', () => {
      assert.deepEqual([25, angleUnits.grad], angles.interpolate([0, undefined], [100, angleUnits.grad], .25));
    });
    it('0, 100grad, .5 = 50grad', () => {
      assert.deepEqual([50, angleUnits.grad], angles.interpolate([0, undefined], [100, angleUnits.grad], .5));
    });
    it('0, 100grad, .75 = 75grad', () => {
      assert.deepEqual([75, angleUnits.grad], angles.interpolate([0, undefined], [100, angleUnits.grad], .75));
    });
    it('0, 100grad, 1 = 100grad', () => {
      assert.deepEqual([100, angleUnits.grad], angles.interpolate([0, undefined], [100, angleUnits.grad], 1));
    });
  });

  describe('interpolate(turn)', () => {
    it('0, 100turn, .25 = 25turn', () => {
      assert.deepEqual([25, angleUnits.turn], angles.interpolate([0, undefined], [100, angleUnits.turn], .25));
    });
    it('0, 100turn, .5 = 50turn', () => {
      assert.deepEqual([50, angleUnits.turn], angles.interpolate([0, undefined], [100, angleUnits.turn], .5));
    });
    it('0, 100turn, .75 = 75turn', () => {
      assert.deepEqual([75, angleUnits.turn], angles.interpolate([0, undefined], [100, angleUnits.turn], .75));
    });
    it('0, 100turn, 1 = 100turn', () => {
      assert.deepEqual([100, angleUnits.turn], angles.interpolate([0, undefined], [100, angleUnits.turn], 1));
    });
  });

  describe('angles(deg)', () => {
    it('0, 1deg, 0 = 0', () => {
      assert.equal('0', angles('0', '1deg')(0));
    });
    it('0, 1deg, .5 = .5deg', () => {
      assert.equal('0.500deg', angles('0', '1deg')(.5));
    });
    it('.5deg, 1deg, .5 = 0.750deg', () => {
      assert.equal('0.750deg', angles('.5deg', '1deg')(.5));
    });
    it('0, 1deg, 1 = 1deg', () => {
      assert.equal('1deg', angles('0', '1deg')(1));
    });
  });

  describe('angles(rad)', () => {
    it('0, 1rad, 0 = 0', () => {
      assert.equal('0', angles('0', '1rad')(0));
    });
    it('0, 1rad, .5 = .5rad', () => {
      assert.equal('0.500rad', angles('0', '1rad')(.5));
    });
    it('.5rad, 1rad, .5 = 0.750rad', () => {
      assert.equal('0.750rad', angles('.5rad', '1rad')(.5));
    });
    it('0, 1rad, 1 = 1rad', () => {
      assert.equal('1rad', angles('0', '1rad')(1));
    });
  });

  describe('angles(grad)', () => {
    it('0, 1grad, 0 = 0', () => {
      assert.equal('0', angles('0', '1grad')(0));
    });
    it('0, 1grad, .5 = .5grad', () => {
      assert.equal('0.500grad', angles('0', '1grad')(.5));
    });
    it('.5grad, 1grad, .5 = 0.750grad', () => {
      assert.equal('0.750grad', angles('.5grad', '1grad')(.5));
    });
    it('0, 1grad, 1 = 1grad', () => {
      assert.equal('1grad', angles('0', '1grad')(1));
    });
  });

  describe('angles(turn)', () => {
    it('0, 1turn, 0 = 0', () => {
      assert.equal('0', angles('0', '1turn')(0));
    });
    it('0, 1turn, .5 = .5turn', () => {
      assert.equal('0.500turn', angles('0', '1turn')(.5));
    });
    it('.5turn, 1turn, .5 = 0.750turn', () => {
      assert.equal('0.750turn', angles('.5turn', '1turn')(.5));
    });
    it('0, 1turn, 1 = 1turn', () => {
      assert.equal('1turn', angles('0', '1turn')(1));
    });
  });

  describe('angles(multiple)', () => {
    it('180deg, 6.2832rad, .5 = 270deg', () => {
      assert.equal('270deg', angles('180deg', '6.2832rad')(.5));
    });
    it('180deg, 400grad, .5 = 270deg', () => {
      assert.equal('270deg', angles('180deg', '400grad')(.5));
    });
    it('180deg, 1turn, .5 = 270deg', () => {
      assert.equal('270deg', angles('180deg', '1turn')(.5));
    });
  });
});
