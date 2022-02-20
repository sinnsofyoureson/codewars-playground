import { bubbleSort } from "solution/algorithms/bubble-sort";
import { generateArr } from "utils";
import { assert } from "chai";

describe("Bubble Sort", () => {
  it("basic tests", () => {
    const arr = generateArr(10000);
    assert.deepEqual(bubbleSort([...arr].reverse()), arr);
  });
});
