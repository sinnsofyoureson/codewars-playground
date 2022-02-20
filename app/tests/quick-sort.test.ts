import { quickSort } from "solution/algorithms/quick-sort";
import { generateArr } from "utils";
import { assert } from "chai";

describe("Quick Sort", () => {
  it("basic tests", () => {
    const arr = generateArr(1000);

    assert.deepEqual(quickSort([...arr].reverse()), arr);
    assert.deepEqual(quickSort([5, 2, 6, 1, 30, -10]), [-10, 1, 2, 5, 6, 30]);
  });
});
