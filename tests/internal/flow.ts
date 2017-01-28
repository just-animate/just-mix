import { flow } from '../../src/internal';
import * as assert from 'assert';

describe('flow()', () => {
  it('with one function returns the same result as a single called function', () => {
    const cube = (n: number) => n ** 3;
    assert.equal(8, flow(cube)(2));
  });

  it('with two functions, it chains each results', () => {
    const cube = (n: number) => n ** 3;
    const lessOne = (n: number) => n - 1;
    assert.equal(7, flow(cube, lessOne)(2));
  });

  it('with three functions, it chains each results', () => {
    const cube = (n: number) => n ** 3;
    const lessOne = (n: number) => n - 1;
    const addEleven = (n: number) => n + '-eleven';
    assert.equal('7-eleven', flow(cube, lessOne, addEleven)(2));
  });
});
