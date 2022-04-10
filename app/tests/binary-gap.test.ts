import { binaryGap } from "../solution";
import { assert } from "chai";

describe("Binary gap", () => {
  it("basic tests", () => {
    assert.strictEqual(binaryGap(1041), 5);
    assert.strictEqual(binaryGap(15), 0);
    assert.strictEqual(binaryGap(32), 0);
    assert.strictEqual(binaryGap(9), 2);
    assert.strictEqual(binaryGap(529), 4);
    assert.strictEqual(binaryGap(20), 1);
    assert.strictEqual(binaryGap(20), 1);
  });
});
