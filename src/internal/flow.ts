/**
 * A function that takes in a single parameter and returns a single result
 */
type Func = (a: any) => any;

const flowSignature = <T1, T2>(...parsers: Func[]): { (t1: T1): T2 } => {
  throw 'do not use';
};

/**
 * Returns a function that passes each function in sequence, passing the result of each function to the next.
 * Useful for chaining together pure functions
 * for reuse
 */
export const flow: typeof flowSignature = function<T1, T2>() {
  const args = arguments, len = args.length;
  return (t1: T1): T2 => {
    let i = -1, r = t1 as T1 | T2;
    while (++i < len) {
      r = args[i](r);
    }
    return r as T2;
  };
};
