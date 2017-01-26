/**
 * This file describes the flow function, borrowed and modified from lodash.  There is a little bit of sleight of hand here
 * to allow the generated js to be as tiny as possible while still providing decent typings for the code calling it
 */

/**
 * A function that takes in a single parameter and returns a single result
 */
type Func = (a: any) => any;

/**
 * Stub function describing the exact type of the flow function.  The "flow" function below uses this 
 * type which avoids generating an extra array for the spread operator
 */
const flowSignature = <T1, T2>(...functions: Func[]): (t1: T1) => T2 => {
  throw 'do not use';
};

/**
 * Returns a function that passes each function in sequence, passing the result of each function to the next.  
 * Useful for chaining together pure functions 
 * for reuse
 */
export const flow: typeof flowSignature = <T1, T2>() => {
  const f = arguments;
  const len = f.length;
  return (t1: T1): T2 => {
    let i = 0;
    let r = t1;
    while (++i < len) {
      r = f[i](r);
    }
    return r as any as T2;
  };
};
