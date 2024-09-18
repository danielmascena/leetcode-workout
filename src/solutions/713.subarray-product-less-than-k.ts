/*
 * @lc app=leetcode id=713 lang=typescript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    const len = nums.length;
    let l = 0;
    let r = 0;
    let p = 1;
    let t = 0;
    let count = 0;

    while (l < len) {
        if (r < len && (p * nums[r]) < k) {
            const n = nums[r++];
            t += 1;
            //count += (r - l);
            count += t;
            p *= n;
        } else {
            p /= nums[l++];
            t--;
        }
    }
    return Math.max(count, 0);
};
// @lc code=end

export default numSubarrayProductLessThanK;