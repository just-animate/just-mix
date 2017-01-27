const cssFunctionRegex = /([a-z\-]+)\(([^\)]+)\)/i;

export const parseCssFunction = (cssFnString: string): string[] => {
  const matches = cssFunctionRegex.exec(cssFnString);
  if (!matches || !matches.length) {
    throw new Error('could not parse css function');
  }
  return [matches[1]].concat(matches[2].split(','));
};

export const formatCssFunction = (x: string[]) => {
  return x[0] + '(' + x.slice(1).join(',') + ')';
};
