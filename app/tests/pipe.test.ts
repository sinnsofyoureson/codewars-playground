import { assert } from "chai";
import { pipe, otherPipe } from "solution";

const double = (x: number) => x * 2;
const square = (x: number) => x * x;

describe("Pipe function", () => {
  it("basic tests", () => {
    assert.strictEqual(pipe<number>(double, square)(5), 100);
    assert.strictEqual(otherPipe<number>(double, square)(5), 100);
  });
});
