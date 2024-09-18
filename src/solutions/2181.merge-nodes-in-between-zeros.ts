/*
 * @lc app=leetcode id=2181 lang=typescript
 *
 * [2181] Merge Nodes in Between Zeros
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


function mergeNodes(head: ListNode | null): ListNode | null {
    var sum = 0;
    var zero: ListNode | undefined; 
    var node = head;

    while (node) {
        const { val, next} = node;
        if (val === 0) {
            if (zero) {
                zero.val = sum;
                if (node.next)
                    zero.next = node;
                else
                    zero.next = null;
            }
            zero = node;
            sum = 0;
        } else {
            sum += val;
        }
        node = next;
    }
    return head;
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
function print(node: ListNode | null) {
    var nums = '';

    while (node) {
        nums += node.val +', ';
        node = node.next;
    }
    console.log(nums)
}

print(mergeNodes(each([0,3,1,0,4,5,2,0])))
print(mergeNodes(each([0,1,0,3,0,2,2,0])))
*/