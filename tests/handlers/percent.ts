import { formatPercent, parsePercent } from '../../src/handlers';
import * as assert from 'assert';

describe('percent', () => {

  describe('formatPercent()', () => {
    it('formats .1 as 10%', () => {
      assert.equal('10%', formatPercent(.1));
    });
    it('formats 1 as 100%', () => {
      assert.equal('10%', formatPercent(.1));
    });
  });

  describe('parsePercent()', () => {
    it('parses 10% as .1', () => {
      assert.equal(.1, parsePercent('10%'));
    });
    it('parses 100% as 1', () => {
      assert.equal(1, parsePercent('100%'));
    });
  });
});
