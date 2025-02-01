/*
 * @lc app=leetcode id=3151 lang=typescript
 *
 * [3151] Special Array I
 */

// @lc code=start
function isArraySpecial(nums: number[]): boolean {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i - 1] % 2 === nums[i] % 2) return false;
  }
  return true;
}
// @lc code=end

export default isArraySpecial;
/**
 * Accepted
852/852 cases passed (1 ms)
Your runtime beats 60.71 % of typescript submissions
Your memory usage beats 46.43 % of typescript submissions (52.1 MB)
 */
