export const pipe =
  <T>(...functions: Function[]) =>
  (args: T) => {
    let result: T | null = null;

    for (let i = 0; i < functions.length; i++) {
      const currentFunc = functions[i];

      if (i === 0) {
        result = currentFunc(args);
      } else {
        result = currentFunc(result);
      }
    }

    return result;
  };

export const otherPipe =
  <T>(...functions: Function[]) =>
  (args: T) =>
    functions.reduce((arg, fn) => fn(arg), args);
