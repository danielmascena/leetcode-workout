/*
 * @lc app=leetcode id=3105 lang=typescript
 *
 * [3105] Longest Strictly Increasing or Strictly Decreasing Subarray
 */

// @lc code=start
function longestMonotonicSubarray(nums: number[]): number {
  const { max } = Math;
  var inc = 1;
  var desc = 1;
  var longLen = 1;

  for (let i = 1, len = nums.length; i < len; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];

    if (prev === curr) {
      inc = desc = 1;
    } else if (prev > curr) {
      desc++;
      inc = 1;
    } else {
      inc++;
      desc = 1;
    }
    longLen = max(longLen, inc, desc);
  }

  return longLen;
}
// @lc code=end

export default longestMonotonicSubarray;

/**
 * Accepted
868/868 cases passed (1 ms)
Your runtime beats 81.25 % of typescript submissions
Your memory usage beats 68.75 % of typescript submissions (52 MB)
 */
