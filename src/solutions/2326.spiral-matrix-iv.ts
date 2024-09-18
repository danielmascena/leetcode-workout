/*
 * @lc app=leetcode id=2326 lang=typescript
 *
 * [2326] Spiral Matrix IV
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

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
    const ans: number[][] = Array.from({length: m}, _ => Array(n).fill(-1));
    let nrw = 0;
    let x = 0;
    let y = 0;
    let step = 1;

    while (head) {
        switch (step) {
            case 1:
                while (head && y <n-nrw) {
                    ans[x][y++] = head.val;
                    head = head.next;
                }
                y--;
                x++;
                step = 2;
                break;
            case 2:
                while (head && x<m-nrw) {
                    ans[x++][y] = head.val;
                    head = head.next;
                }
                x--;
                y--;
                step = 3;
                break;
            case 3:
                while (head && y>=nrw) {
                    ans[x][y--] = head.val;
                    head = head.next;
                }
                y++;
                x--;
                nrw++;
                step = 4;
                break;
            case 4:
                while (head && x >=nrw) {
                    ans[x--][y] = head.val;
                    head = head.next;
                }
                x++;
                y++;
                step = 1;
                break;
        }
    }
    return ans;
};
// @lc code=end

export default spiralMatrix;