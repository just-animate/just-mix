import { formatNumber, parseNumber } from '../../src/handlers';
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
});
