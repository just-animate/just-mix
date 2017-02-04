import { angles } from '../../src/handlers';
import * as assert from 'assert';

describe('angles', () => {
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
