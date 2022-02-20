export const compose =
  <T>(...functions: Function[]) =>
  (args: T) => {
    let result: T | null = null;

    for (let i = functions.length - 1; i >= 0; i--) {
      const currentFunc = functions[i];

      if (i === functions.length - 1) {
        result = currentFunc(args);
      } else {
        result = currentFunc(result);
      }
    }

    return result;
  };

export const otherCompose =
  <T>(...functions: Function[]) =>
  (args: T) =>
    functions.reduceRight((arg, fn) => fn(arg), args);
