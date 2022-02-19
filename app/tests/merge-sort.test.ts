import { mergeSort } from "../solution/algorithms/merge-sort";
import { assert } from "chai";

describe("Merge Sort", () => {
  it("basic tests", () => {
    assert.deepEqual(
      mergeSort([5, 6, 1, 3, 7, 8, 2, 4]),
      [1, 2, 3, 4, 5, 6, 7, 8]
    );
    assert.deepEqual(
      mergeSort([5, 6, 1, 3, 7, 8, 2, 4, 9]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
    assert.deepEqual(mergeSort([1]), [1]);
    assert.strictEqual(mergeSort([]), null);
  });
});
