const cssFunctionRegex = /([a-z\-]+)\(([^\)]+)\)/i;

export const parseCssFunction = (str: string): string[] | undefined => {
  const m = cssFunctionRegex.exec(str);
  return !m || !m.length ? undefined : [m[1]].concat(m[2].split(','));
};

export const formatCssFunction = (x: string[]) => {
  return x[0] + '(' + x.slice(1).join(',') + ')';
};

