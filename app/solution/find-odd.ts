/*
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

export const findOdd = (xs: number[]): any => {
  const numberOfTimes = new Map<string, number>();
  let solution: number = 0;

  for (const n of xs) {
    const key = String(n);
    const uniqueNumber = numberOfTimes.get(key);

    if (uniqueNumber) {
      numberOfTimes.set(key, uniqueNumber + 1);
    } else {
      numberOfTimes.set(key, 1);
    }
  }

  numberOfTimes.forEach((value, key) => {
    if (!Number.isInteger(value / 2)) {
      solution = Number(key);
    }
  });

  return solution;
};

export const betterFindOdd = (xs: number[]): number => {
  // happy coding!
  return xs.reduce((a, b) => a ^ b);
};

export function anotherFindOdd(xs: number[]) {
  return xs.find((x, i, a) => a.filter((y) => y === x).length % 2 === 1);
}
