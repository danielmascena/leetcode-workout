import { ListNode } from "src/model/models";
/*
 * @lc app=leetcode id=2807 lang=typescript
 *
 * [2807] Insert Greatest Common Divisors in Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    const { min } = Math;
    const { isInteger } = Number;

    let node = head?.next;
    let prev = head;

    while (node) {
        const { val: val1 } = prev!;
        const { val: val2 } = node;
        let sm = min(val1, val2);

        while (sm && !(isInteger(val1 / sm) && isInteger(val2 / sm))) {
            sm--;
        }
        const mid = new ListNode(sm, node);

        if (prev)
            prev.next = mid;
        prev = node;
        node = node.next;
    }
    return head;
};
// @lc code=end

export default insertGreatestCommonDivisors;