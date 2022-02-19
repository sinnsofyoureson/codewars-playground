import { BinarySeachTree } from "../solution/data-structures/binary-search-tree";
import { assert } from "chai";

const generateTree = () => {
  const tree = new BinarySeachTree<number>();

  tree.insert(50);
  tree.insert(30);
  tree.insert(70);
  tree.insert(20);
  tree.insert(40);
  tree.insert(60);
  tree.insert(80);

  return tree;
};

describe("Binary Seach Tree", () => {
  it("basic tests", () => {
    const tree = generateTree();

    assert.isOk<BinarySeachTree<number>>(tree, "Tree is ok");
    assert.strictEqual(tree.find(50)?.nodeValue, 50);
    assert.strictEqual(tree.find(70)?.nodeValue, 70);
    assert.strictEqual(tree.find(20)?.nodeValue, 20);

    tree.remove(50);
    assert.strictEqual(tree.find(50)?.nodeValue, undefined);
  });
});
