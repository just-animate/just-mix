import { formatCssFunction, parseCssFunction } from '../../src/handlers';
import * as assert from 'assert';

describe('cssFunction', () => {

  describe('formatCssFunction()', () => {
    it('formats [url, #id] as url(#id)', () => {
      assert.equal('url(#id)', formatCssFunction(['url', '#id']));
    });
    it('formats ["linear-gradient", "top", "white", "black"] as linear-gradient(top,white,black)', () => {
      assert.equal('linear-gradient(top,white,black)', formatCssFunction(['linear-gradient', 'top', 'white', 'black']));
    });
  });

  describe('parseCssFunction()', () => {
    it('parses url(#id) as ["url", "#id"]', () => {
      assert.deepEqual(['url', '#id'], parseCssFunction('url(#id)'));
    });
    it('parses linear-gradient(top,white,black) as ["linear-gradient", "top", "white", "black"]', () => {
      assert.deepEqual(['linear-gradient', 'top', 'white', 'black'], parseCssFunction('linear-gradient(top,white,black)'));
    });
  });
});
