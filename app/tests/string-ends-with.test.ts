import { stringEndsWith } from '../solution'
import { assert } from "chai";

describe("Sample Test Cases", function () {
  it("Should return true or false", function () {
    assert.equal(stringEndsWith("abcde", "cde"), true);
    assert.equal(stringEndsWith("abcde", "abc"), false);
    assert.equal(stringEndsWith("abc", ""), true);
  });
});
