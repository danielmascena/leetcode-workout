/*
 * @lc app=leetcode id=862 lang=typescript
 *
 * [862] Shortest Subarray with Sum at Least K
 */

// @lc code=start
function shortestSubarray(nums: number[], k: number): number {
  const len = nums.length;
  const { min } = Math;
  let ssslk = Infinity;
  let lf = 0;
  let rg = 0;
  let sum = 0;

  while (lf <= len) {
    while (rg < len && sum < k && nums[lf] >= 0) {
      sum += nums[rg++];
    }
    if (sum >= k) {
      ssslk = min(ssslk, rg - lf);
    }
    sum -= nums[lf++];
  }
  return ssslk === Infinity ? -1 : ssslk;
}
// @lc code=end

export default shortestSubarray;
