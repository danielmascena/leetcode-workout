/*
 * @lc app=leetcode id=2816 lang=typescript
 *
 * [2816] Double a Number Represented as a Linked List
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

function doubleIt(head: ListNode | null): ListNode | null {
    const stack: number[] = [];
    var node = head;
    var d = 1;
    var co = 0;

    while (node) {
        stack.push(node.val);
        node = node.next;
    }
    let T = stack.reduceRight<number>((sum, num) => {
        num *= d;
        let dn = num * 2 + (co * d);
        d *= 10;
        co = (dn / d) >>> 0
        dn %= d;
        head!.val = dn;
        head!.next = node;
        node = head;
        head = head?.next ?? new ListNode();
        return sum + dn;
    }, 0);
    const fco = co * d;
    if (fco) {
        head!.val = co;
        head!.next = node;
        T += co * d;
    }
    console.log(T);
    return head;
};
// @lc code=end

