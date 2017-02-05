import { numberFixed, numberParse, interpolate, numbers } from '../../src/handlers';
import * as assert from 'assert';

describe('number', () => {

  describe('numberFixed()', () => {
    it('formats .1 as 0.100', () => {
      assert.equal('0.100', numberFixed(.1));
    });
    it('formats 1 as 1', () => {
      assert.equal('1', numberFixed(1));
    });
  });

  describe('parse()', () => {
    it('parses 0.100 as .1', () => {
      assert.equal(.1, numberParse('.1'));
    });
    it('parses 1 as 1', () => {
      assert.equal(1, numberParse('1'));
    });
  });

  describe('interpolate()', () => {
    it('0, 1, 0 = 0', () => {
      assert.equal(0, interpolate(0, 1, 0));
    });
    it('0, 1, .5 = .5', () => {
      assert.equal(.5, interpolate(0, 1, .5));
    });
    it('.5, 1, .5 = .75', () => {
      assert.equal(.75, interpolate(.5, 1, .5));
    });
    it('0, 1, 1 = 1', () => {
      assert.equal(1, interpolate(0, 1, 1));
    });
  });

  describe('numbers()', () => {
    it('0, 1, 0 = 0', () => {
      assert.equal(0, numbers(0, 1)(0));
    });
    it('0, 1, .5 = .5', () => {
      assert.equal(.5, numbers(0, 1)(.5));
    });
    it('.5, 1, .5 = .75', () => {
      assert.equal(.750, numbers(.5, 1)(.5));
    });
    it('0, 1, 1 = 1', () => {
      assert.equal(1, numbers(0, 1)(1));
    });
  });
});
