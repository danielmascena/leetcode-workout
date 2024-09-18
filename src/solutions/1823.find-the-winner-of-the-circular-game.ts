class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/*
 * @lc app=leetcode id=1823 lang=typescript
 *
 * [1823] Find the Winner of the Circular Game
 */

// @lc code=start
function findTheWinner(n: number, k: number): number {
    const head = new ListNode(1);
    let node = head;

    for (let i = 2; i <= n; i++) {
        const next = new ListNode(i);
        node.next = next;
        node = next;
    }
    let prev = node;
    node.next = head;
    node = head;

    while (node.next) {
        
        for (let i = 1; i < k; i++) {
            prev = node;
            node = node.next!;
        }
        if (node.next === prev) {
            prev.next = null;
            return prev.val;
        }
        prev.next = node.next;
        node = node.next!;
    }
    return 1;
};
// @lc code=end

/*
console.log(findTheWinner(5,2)) // 3
console.log(findTheWinner(6,5)) // 1
console.log(findTheWinner(3,1)) // 3
*/