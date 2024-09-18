/*
 * @lc app=leetcode id=2058 lang=typescript
 *
 * [2058] Find the Minimum and Maximum Number of Nodes Between Critical Points
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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    const poss = new Array<number>();
    const { min } = Math;
    let minima = Number.MAX_SAFE_INTEGER;
    let node = head?.next;
    let prev = head;
    let pos = 2;

    while (node?.next) {
        const { val: curVal, next } = node;
        const { val: prevVal } = prev!;
        const { val: nxtVal } = next;

        if ((curVal < prevVal && curVal < nxtVal) || (curVal > prevVal && curVal > nxtVal)) {
            poss.push(pos);
        }
        pos++;
        prev = node;
        node = next;
    }
    if (poss.length <= 1) return [-1, -1];

    for (let i = 1, len = poss.length; i < len; i++) {
        minima = min(minima, poss[i] - poss[i-1]);
    }
    //console.log('positions: ',poss)
    return [minima, poss.at(-1)! - poss[0]];
};
// @lc code=end
/*
class ListNode {
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0:val);
        this.next = next===undefined? null: next;
    }
}
function each(arr: number[]) {
    var prev: ListNode | undefined;
    const head = prev = transform(arr[0])

    for (let i = 1; i<arr.length; i++) {
        prev = transform(arr[i])
    }
    function transform(val: number): ListNode {
        const node = new ListNode(val);
        if (prev)
            prev.next=node;
        return node;
    }
    return head;
}

console.log(nodesBetweenCriticalPoints(each([3,1])))
console.log(nodesBetweenCriticalPoints(each([5,3,1,2,5,1,2])))
console.log(nodesBetweenCriticalPoints(each([1,3,2,2,3,2,2,2,7])))
console.log(nodesBetweenCriticalPoints(each([2,2,1,3])))
console.log(nodesBetweenCriticalPoints(each([6,8,4,1,9,6,6,10,6])))
*/