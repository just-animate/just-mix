import { parseColor } from '../../src/handlers';
import * as assert from 'assert';
const jsdom = require('mocha-jsdom');

describe('color', () => {
    jsdom();
    it('parses #0000ff as blue', () => {
        assert.equal([0, 0, 255, 1], parseColor('#0000ff'));
    });
});
