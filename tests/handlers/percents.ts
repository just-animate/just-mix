import { percents } from '../../src/handlers';
import * as assert from 'assert';

describe('percent', () => {

  describe('format()', () => {
    it('formats .1 as 10%', () => {
      assert.equal('10%', percents.format(.1));
    });
    it('formats 1 as 100%', () => {
      assert.equal('10%', percents.format(.1));
    });
  });

  describe('parse()', () => {
    it('parses 10% as .1', () => {
      assert.equal(.1, percents.parse('10%'));
    });
    it('parses 100% as 1', () => {
      assert.equal(1, percents.parse('100%'));
    });
  });

  describe('interpolate()', () => {
    it('0, 1, 0 = 0', () => {
      assert.equal(0, percents.interpolate(0, 1, 0));
    });
    it('0, 1, .5 = .5', () => {
      assert.equal(.5, percents.interpolate(0, 1, .5));
    });
    it('.5, 1, .5 = .75', () => {
      assert.equal(.75, percents.interpolate(.5, 1, .5));
    });
    it('0, 1, 1 = 1', () => {
      assert.equal(1, percents.interpolate(0, 1, 1));
    });
  });

  describe('percents()', () => {
    it('0%, 100%, 0 = 0%', () => {
      assert.equal('0%', percents('0%', '100%', 0));
    });
    it('0%, 100%, .5 = 50%', () => {
      assert.equal('50%', percents('0%', '100%', .5));
    });
    it('0%, 100%, .75 = 75%', () => {
      assert.equal('75%', percents('0%', '100%', .75));
    });
    it('0%, 100%, 1 = 100%', () => {
      assert.equal('100%', percents('0%', '100%', 1));
    });
  });
});
