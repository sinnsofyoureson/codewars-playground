import { assert } from "chai";
import { compose, otherCompose } from "solution";

const double = (x: number) => x * 2;
const square = (x: number) => x * x;

describe("Compose function", () => {
  it("basic tests", () => {
    assert.strictEqual(double(2), 4);
    assert.strictEqual(square(3), 9);
    assert.strictEqual(double(square(4)), 32);
    assert.strictEqual(compose<number>(double, square)(5), 50);
    assert.strictEqual(otherCompose<number>(double, square)(5), 50);
  });
});
