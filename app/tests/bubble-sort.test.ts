import { bubbleSort } from "../solution/algorithms/bubble-sort";
import { assert } from "chai";

const generateArr = (length: number) => {
  return Array.from(Array(length).keys());
};

describe("Bubble Sort", () => {
  it("basic tests", () => {
    const arr = generateArr(10000);
    assert.deepEqual(bubbleSort([...arr].reverse()), arr);
  });
});
