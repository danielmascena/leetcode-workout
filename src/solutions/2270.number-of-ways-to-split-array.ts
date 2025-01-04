/*
 * @lc app=leetcode id=2270 lang=typescript
 *
 * [2270] Number of Ways to Split Array
 */

// @lc code=start
function waysToSplitArray(nums: number[]): number {
  let total = nums.reduce((a, c) => a + c, 0);
  let count = 0;

  for (let i = 0, sum = 0, len = nums.length; i < len - 1; i++) {
    const num = nums[i];
    total -= num;
    sum += num;

    if (sum >= total) {
      count++;
    }
  }
  return count;
}
// @lc code=end

export default waysToSplitArray;

/**
 * 1st attempt (reduce)
 * Accepted
101/101 cases passed (12 ms)
Your runtime beats 78.43 % of typescript submissions
Your memory usage beats 78.43 % of typescript submissions (66.8 MB)

 * 2nd attempt (for loop)
Accepted
101/101 cases passed (11 ms)
Your runtime beats 80.39 % of typescript submissions
Your memory usage beats 84.31 % of typescript submissions (63.6 MB)
 */
