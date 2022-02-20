/*
 * Basic bubble sort algorithm implementation
 * based on the article https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2
 */

export const bubbleSort = (array: number[]) => {
  const sortedArr = [...array];
  let done = false;

  do {
    done = false;
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        const tmp = sortedArr[i];
        sortedArr[i] = sortedArr[i + 1];
        sortedArr[i + 1] = tmp;
        done = true;
      }
    }
  } while (done);

  return sortedArr;
};
