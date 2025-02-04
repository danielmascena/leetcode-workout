/*
 * @lc app=leetcode id=1800 lang=typescript
 *
 * [1800] Maximum Ascending Subarray Sum
 */

// @lc code=start
function maxAscendingSum(nums: number[]): number {
  const { max } = Math;
  let [ans] = nums;
  let [ttl] = nums;

  for (let i = 1, len = nums.length; i < len; i++) {
    const num = nums[i];

    if (nums[i - 1] >= num) {
      ttl = 0;
    }
    ttl += num;
    ans = max(ans, ttl);
  }
  return ans;
}
// @lc code=end

export default maxAscendingSum;

/**
 * Accepted
104/104 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 50 % of typescript submissions (51.4 MB)
 */
