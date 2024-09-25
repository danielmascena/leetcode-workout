/*
 * @lc app=leetcode id=2419 lang=typescript
 *
 * [2419] Longest Subarray With Maximum Bitwise AND
 */

// @lc code=start
function longestSubarray(nums: number[]): number {
    const { max } = Math;
    const len = nums.length;
    const mb = max(...nums);
    let ml = 1;
    let sz = 1;
    let left = 0;
    let right = 1;
    let [acc] = nums;

    while (left < len) {
        while (right < len && (acc & nums[right]) >= mb) {
            acc &= nums[right++];
            sz++;

            if (acc === mb) {
                ml = max(ml, sz);
            }
        }
        acc = nums[left=right++];
        //right = left + 1;
        sz = 1;
    }
    return ml;
};
// @lc code=end

export default longestSubarray;