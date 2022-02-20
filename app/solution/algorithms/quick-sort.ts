/*
 * Basic quick sort algorithm implementation
 * based on the article https://habr.com/en/post/490304/
 */

export const quickSort = (array: number[]): number[] => {
  if (array.length < 2) {
    return array;
  }

  let current = array[0];
  const left = []; // elements lesser than current
  const right = []; // elements greater than current

  for (let i = 1; i < array.length; i++) {
    current > array[i] ? left.push(array[i]) : right.push(array[i]);
  }

  return quickSort(left).concat(current, quickSort(right));
};
