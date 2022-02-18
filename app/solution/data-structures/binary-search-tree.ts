/*
 * Basic BST data structure implementation
 * based on the articles:
 * https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b
 * https://medium.com/@g.aierken/deletion-in-binary-search-tree-with-javascript-fded82e1791c
 */

class TreeNode<T> {
  private value: T | null = null;
  private left: TreeNode<T> | null = null;
  private right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public get nodeValue() {
    return this.value;
  }

  public get leftNode() {
    return this.left;
  }

  public get rightNode() {
    return this.right;
  }

  public setNodeValue(value: T | null) {
    this.value = value;
  }

  public setLeftNode(value: TreeNode<T> | null) {
    this.left = value;
  }

  public setRightNode(value: TreeNode<T> | null) {
    this.right = value;
  }
}

export class BinarySeachTree<T> {
  private root: TreeNode<T> | null = null;

  constructor() {
    this.root = null;
  }

  public get rootNode() {
    return this.root;
  }

  public insert(value: T) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value === current.nodeValue) {
        return this;
      }

      if (value < current.nodeValue!) {
        if (current.leftNode === null) {
          current.setLeftNode(newNode);
          return this;
        }

        current = current.leftNode;
      } else {
        if (current.rightNode === null) {
          current.setRightNode(newNode);
          return this;
        }

        current = current.rightNode;
      }
    }
  }

  public find(value: T): TreeNode<T> | null {
    if (!this.root) {
      return null;
    }

    let current: TreeNode<T> | null = this.root;
    let found: TreeNode<T> | null = null;

    while (current && !found) {
      if (value < current.nodeValue!) {
        current = current.leftNode;
      } else if (value > current.nodeValue!) {
        current = current.rightNode;
      } else {
        found = current;
      }
    }

    return found;
  }

  public remove(value: T) {
    this.root = this.removeNode(this.root, value);
  }

  // Recursive function to insert a new value in BST
  private removeNode(current: TreeNode<T> | null, value: T | null) {
    if (current === null) {
      return current;
    }

    // Delete node if it's value is same as current
    if (value === current.nodeValue) {
      // for case 1 and 2, node without child or with one child
      if (current.leftNode === null && current.rightNode === null) {
        return null;
      } else if (current.leftNode === null) {
        return current.rightNode;
      } else if (current.rightNode === null) {
        return current.leftNode;
      } else {
        // node with two children, get the inorder successor,
        //smallest in the right subtree
        const tmpNode = this.getSmallestNode(current.rightNode);
        current.setNodeValue(tmpNode.nodeValue);

        // delete the inorder successor
        current.setRightNode(
          this.removeNode(current.rightNode, tmpNode.nodeValue)
        );

        return current;
      }
    } else if (value! < current.nodeValue!) {
      // recurse down the tree
      current.setLeftNode(this.removeNode(current.leftNode, value));
      return current;
    } else {
      current.setRightNode(this.removeNode(current.rightNode, value));
      return current;
    }
  }

  private getSmallestNode(node: TreeNode<T>) {
    while (node.leftNode !== null) {
      node = node.leftNode;
    }

    return node;
  }
}

// const tree = new BinarySeachTree<number>();
// tree.insert(50);
// tree.insert(30);
// tree.insert(70);
// tree.insert(20);
// tree.insert(40);
// tree.insert(60);
// tree.insert(80);
// tree.remove(20);
// tree.remove(30);
// tree.remove(50);
// console.log("tree", JSON.stringify(tree, undefined, 1));
