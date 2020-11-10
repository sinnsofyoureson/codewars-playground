import { squareSum } from "../solution";
// import the type of assertion library you wish to use (Chai recommended)
import { assert } from "chai";

/*
 * Description:
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
 * For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

describe("Sample Test Cases", function () {
  it("Should return a number", function () {
    assert.equal(squareSum([1, 2]), 5);
    assert.equal(squareSum([0, 3, 4, 5]), 50);
  });
});
