import { game } from "../solution";
import { assert } from "chai";

describe("Vasya Game", () => {
  it("basic tests", () => {
    assert.strictEqual(game(9, [1, 2, 3, 6, 5, 4, 7, 8, 9]), "Petya");
    assert.strictEqual(game(3, [1, 2, 3]), "Petya");
    assert.strictEqual(game(3, [1, 4, 2]), "Vasya");
  });
});
