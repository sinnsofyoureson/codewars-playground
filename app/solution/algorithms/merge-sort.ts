/*
 * Basic merge sort algorithm implementation
 * based on the article https://medium.com/@alivander/сортировка-слиянием-javascript-1c0b0e8ff737
 */

const merge = (firstArr: number[] | null, secondArr: number[] | null) => {
  if (!firstArr || !secondArr) {
    return null;
  }

  const sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < firstArr.length && j < secondArr.length) {
    sortedArr.push(firstArr[i] < secondArr[j] ? firstArr[i++] : secondArr[j++]);
  }

  return sortedArr.concat(firstArr.slice(i), secondArr.slice(j));
};

export const mergeSort = (array: number[]): number[] | null => {
  if (!array.length) {
    return null;
  }

  if (array.length === 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};
