/*
 * @lc app=leetcode id=179 lang=typescript
 *
 * [179] Largest Number
 */

// @lc code=start
function largestNumber(nums: number[]): string {
    return nums.map(String).sort((a, b) => {
        const la = a.length;
        const lb = b.length;
        const mx = Math.max(la, lb);

        if (la !== lb && a.padEnd(mx, '0') === b.padEnd(mx, '0')) {
            return lb < la ? 1 : -1;
        }
        return b > a ? 1 : -1;
    }).join("");
};
// @lc code=end

export default largestNumber;