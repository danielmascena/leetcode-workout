/*
 * @lc app=leetcode id=2461 lang=typescript
 *
 * [2461] Maximum Sum of Distinct Subarrays With Length K
 */

// @lc code=start
function maximumSubarraySum(nums: number[], k: number): number {
  const len = nums.length;
  const { max } = Math;
  const els = new Map<number, number>();
  const seen = new Set<number>();
  let mssk = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (left <= len - k) {
    while (right < len && right < left + k) {
      const num = nums[right++];
      const qut = (els.get(num) ?? 0) + 1;
      sum += num;

      if (qut > 1) {
        seen.add(num);
      }
      els.set(num, qut);
    }
    if (!seen.size) {
      mssk = max(mssk, sum);
    }
    const num = nums[left++];
    const qut = els.get(num)! - 1;
    els.set(num, qut);
    sum -= num;

    if (qut === 1) {
      seen.delete(num);
    }
  }
  return mssk;
}
// @lc code=end
export default maximumSubarraySum;
