import { percents } from '../../src/handlers';
import * as assert from 'assert';

describe('percent', () => {
  describe('percents()', () => {
    it('0%, 100%, 0 = 0%', () => {
      assert.equal('0%', percents('0%', '100%')(0));
    });
    it('0%, 100%, .5 = 50%', () => {
      assert.equal('50%', percents('0%', '100%')(.5));
    });
    it('0%, 100%, .75 = 75%', () => {
      assert.equal('75%', percents('0%', '100%')(.75));
    });
    it('0%, 100%, 1 = 100%', () => {
      assert.equal('100%', percents('0%', '100%')(1));
    });
  });
});
