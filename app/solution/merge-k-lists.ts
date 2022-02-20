/*
 * Merge k Sorted Lists
 * from https://leetcode.com/problems/merge-k-sorted-lists/
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 *
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 *
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const values: number[] = [];

  for (let list of lists) {
    while (list) {
      values.push(list.val);
      list = list.next;
    }
  }

  const sorted = values.sort((a, b) => a - b);

  if (sorted.length === 0) {
    return null;
  }

  let head = new ListNode();
  let current = head;

  for (let i = 0; i < sorted.length; i++) {
    current.val = sorted[i];
    if (i < sorted.length - 1) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  return head;
}
