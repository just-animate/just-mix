export interface CssFunction {
  name: string;
  params: string[];
}

const cssFunctionRegex = /([a-z-]+)\(([^\)]+)\)/ig;

export const parseCssFunction = (cssFnString: string): CssFunction => {
  const matches = cssFunctionRegex.exec(cssFnString);
  if (!matches || !matches.length) {
    throw new Error('could not parse css function');
  } 
  return {
    name: matches[1],
    params: matches[2].split(',')
  }
};
