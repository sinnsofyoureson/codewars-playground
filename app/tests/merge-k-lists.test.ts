import { assert } from "chai";
import { ListNode, mergeKLists } from "solution";

// [[1,4,5],[1,3,4],[2,6]]

const testCase: Array<ListNode | null> = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6)),
];

// 1->1->2->3->4->4->5->6
const expected = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        3,
        new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    )
  )
);

describe("Merge k Sorted Lists", () => {
  it("basic tests", () => {
    console.log({ expected });
    assert.deepEqual(mergeKLists(testCase), expected);
  });
});
