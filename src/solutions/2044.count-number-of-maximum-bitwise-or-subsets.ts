/*
 * @lc app=leetcode id=2044 lang=typescript
 *
 * [2044] Count Number of Maximum Bitwise-OR Subsets
 */

// @lc code=start
function countMaxOrSubsets(nums: number[]): number {
    const maxBitwiseOr = nums.reduce((m, c) => m | c, 0);
    const len = nums.length;
    let ans = new Set<string>();
    const df = (idx: number, bit: number, subs: string) => {
        if (bit && bit === maxBitwiseOr) {
            ans.add(subs);
        }
        if (idx === len) {
            return;
        }
        const n = nums[idx++];
        df(idx, n | bit, `${subs},${idx}`);
        df(idx, bit, subs);
    };
    df(0, 0, '');
    return ans.size;
};
// @lc code=end

export default countMaxOrSubsets;