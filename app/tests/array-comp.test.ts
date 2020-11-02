import { comp } from "../solution";
import { assert } from "chai";

describe("Fixed Tests comp", function () {
  it("Basic tests", function () {
    var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    var a2 = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    assert.strictEqual(comp(a1, a2), true);

    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = [
      11 * 21,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    assert.strictEqual(comp(a1, a2), false);
  });
});
