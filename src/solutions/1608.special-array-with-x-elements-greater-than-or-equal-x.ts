/*
 * @lc app=leetcode id=1608 lang=typescript
 *
 * [1608] Special Array With X Elements Greater Than or Equal X
 */

// @lc code=start
function specialArray(nums: number[]): number {
    const m = new Map<number, number>();
    nums.forEach((n) => {
        m.forEach((v, q) => {
            if (n >= v) {
                m.set(v, q+1);
            }
        });
        m.set(n, (m.get(n)??0)+1);
    });
    const { max } = Math;
    let xel = -1;
    m.forEach((n,q) => {
        if (n === q) {
            xel = max(xel, n);
        }
    });
    return xel;
};
// @lc code=end

