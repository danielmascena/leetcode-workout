/*
 * @lc app=leetcode id=2487 lang=typescript
 *
 * [2487] Remove Nodes From Linked List
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
interface ListNode {
    val: number;
    next: ListNode | null;
}

function removeNodes(head: ListNode | null): ListNode | null {
    const { max } = Math;
    const list = new Array<ListNode | undefined>();
    let maxRight: number;
    let prev: ListNode | undefined;

    for (let node = head; node; node = node.next) {
        list.push(node);
        maxRight = node.val;
    }
    for (let i = list.length - 1; i >= 0; i -= 1) {
        const node = list[i] as ListNode;
        const { val } = node;
        
        if (val < maxRight!) {
            list[i] = void 0;
            maxRight = max(maxRight, val);
            head = node;
        }
    }
    list.forEach(node => {
        if (prev) {
            prev.next = node;
        }
        prev = node;
    });
    return head;
};
// @lc code=end

