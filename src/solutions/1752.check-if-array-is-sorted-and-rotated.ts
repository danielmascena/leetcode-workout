/*
 * @lc app=leetcode id=1752 lang=typescript
 *
 * [1752] Check if Array Is Sorted and Rotated
 */

// @lc code=start
function check(nums: number[]): boolean {
  const ssnums = String([...nums].sort((a, b) => a - b));
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i - 1] > nums[i]) {
      return String([...nums.slice(i), ...nums.slice(0, i)]) === ssnums;
    }
  }
  return true;
}
// @lc code=end

export default check;
/**
 * Accepted
109/109 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 10 % of typescript submissions (51.9 MB)
 */
