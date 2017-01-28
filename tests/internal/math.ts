import { clamp } from '../../src/internal';
import * as assert from 'assert';

describe('flow()', () => {
  it('returns min when value is less than min', () => {
    assert.equal(-1, clamp(-1, 1, -10));
  });
  it('returns max when value is greater than max', () => {
    assert.equal(1, clamp(-1, 1, 10));
  });
  it('returns the value when between min and max', () => {
    assert.equal(0, clamp(-1, 1, 0));
  });
});
