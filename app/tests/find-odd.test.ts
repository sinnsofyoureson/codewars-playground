import { findOdd } from "../find-odd";
import { assert } from "chai";

/*
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

describe("Example tests", function () {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
  doTest([10], 10);
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

function doTest(a: number[], n: number) {
  it(`xs = ${JSON.stringify(a)} ; n = ${n}`, () => {
    assert.strictEqual(findOdd(a), n);
  });
}
