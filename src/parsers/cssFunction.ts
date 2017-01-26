import { IParsedValue } from '../types';

const cssFunctionRegex = /([a-z-]+)\(([^\)]+)\)/ig;

export const parseCssFunction = (cssFnString: string): IParsedValue => {
  const matches = cssFunctionRegex.exec(cssFnString);
  if (!matches || !matches.length) {
    throw new Error('could not parse css function');
  }
  const cssArguments = matches[2].split(',');

  return {
    model: ['string'].concat(range(0, cssArguments.length).map((s: number) => 'string')),
    params: [matches[1]].concat(cssArguments)
  };
};

function range(start: number, length: number): number[] {
    const result: number[] = [];
    for (let i = start, len = start + length; i < len; i++) {
        result.push(0)
    }
    return result;
}
