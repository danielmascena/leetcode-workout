/*
 * @lc app=leetcode id=1482 lang=typescript
 *
 * [1482] Minimum Number of Days to Make m Bouquets
 */

// @lc code=start
function minDays(bloomDay: number[], m: number, k: number): number {
    const len = bloomDay.length;

    if (len % k) return -1;

    var days = 0;
};
// @lc code=end

