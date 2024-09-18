/*
 * @lc app=leetcode id=2554 lang=typescript
 *
 * [2554] Maximum Number of Integers to Choose From a Range I
 */

// @lc code=start
function maxCount(banned: number[], n: number, maxSum: number): number {
    const setBanned = new Set(banned);
    var t = 0;
    var q = 0;

    for (let i = n; i > 0 && t < maxSum; i--) {
        if (!setBanned.has(i) && t + i <= maxSum) {
            t += i;
            q++;
        }
    }
    return q;
};
// @lc code=end

