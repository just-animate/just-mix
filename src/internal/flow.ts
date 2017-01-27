/**
 * A function that takes in a single parameter and returns a single result
 */
type Func = (a: any) => any;

/**
 * Returns a function that passes each function in sequence, passing the result of each function to the next.
 * Useful for chaining together pure functions
 * for reuse
 */
export const flow = <T1, T2>(parsers: Func[]) => {
  const f = arguments;
  const len = f.length;
  return (t1: T1): T2 => {
    let i = -1;
    let r = t1;
    while (++i < len) {
      r = f[i](r);
    }
    return r as any as T2;
  };
};
