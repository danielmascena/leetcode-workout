/*
 * @lc app=leetcode id=260 lang=typescript
 *
 * [260] Single Number III
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
    const tuple = new Int32Array(2);
    const uniqs = new Set<number>();

    for (const n of nums) {
        if (uniqs.has(n)) uniqs.delete(n);
        else uniqs.add(n);
    }
    return Array.from(uniqs);
};
// @lc code=end

