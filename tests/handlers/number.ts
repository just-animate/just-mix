import { formatNumber, interpolateNumber, parseNumber } from '../../src/handlers';
import * as assert from 'assert';

describe('number', () => {

  describe('formatNumber()', () => {
    it('formats .1 as 0.100', () => {
      assert.equal('0.100', formatNumber(.1));
    });
    it('formats 1 as 1', () => {
      assert.equal('1', formatNumber(1));
    });
  });

  describe('parseNumber()', () => {
    it('parses 0.100 as .1', () => {
      assert.equal(.1, parseNumber('.1'));
    });
    it('parses 1 as 1', () => {
      assert.equal(1, parseNumber('1'));
    });
  });

  describe('interpolateNumber()', () => {
    it('0, 1, 0 = 0', () => {
      assert.equal(0, interpolateNumber(0, 1, 0));
    });
    it('0, 1, .5 = .5', () => {
      assert.equal(.5, interpolateNumber(0, 1, .5));
    });
    it('0, 1, 1 = 1', () => {
      assert.equal(1, interpolateNumber(0, 1, 1));
    });
    it('.5, 1, .5 = .75', () => {
      assert.equal(.75, interpolateNumber(.5, 1, .5));
    });
  });
});
