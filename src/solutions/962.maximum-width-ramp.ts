/*
 * @lc app=leetcode id=962 lang=typescript
 *
 * [962] Maximum Width Ramp
 */

// @lc code=start
function maxWidthRamp(nums: number[]): number {
    const { max, min } = Math;
    const len = nums.length;
    let mwr = 0;
    let [sm] = nums;
    let count = 0;

    for (let i = 1; i < len; i++) {
        const n = nums[i];

        if (n >= sm) {
            count++;
        }
        sm = min(sm, n);
    }
    if (!count) {
        return 0;
    }
    for (let j = len - 1; j > 0 && j > mwr; j--) {
        const n2 = nums[j];

        for (let i = 0; i < j; i++) {
            if (nums[i] <= n2) {
                mwr = max(mwr, j - i);
                break;
            }
        } 
    }
    return mwr;
};
// @lc code=end

export default maxWidthRamp;