/*
 * @lc app=leetcode id=2762 lang=typescript
 *
 * [2762] Continuous Subarrays
 */

// @lc code=start
function continuousSubarrays(nums: number[]): number {
  const { length: len } = nums;
  const { min, max } = Math;
  const ranges = new Set<string>();
  let ans = len;
  let lf = 0;
  let rg = 1;
  let sm = min(nums[lf], nums[rg]);
  let bg = max(nums[lf], nums[rg]);

  while (lf < len - 1) {
    while (rg < len && bg - sm <= 2) {
      const num = nums[++rg];
      ranges.add(`${lf}-${rg}`);
      sm = min(sm, num);
      bg = max(bg, num);
    }
    const a = nums[++lf];
    const b = nums[(rg = lf + 1)];
    sm = min(a, b);
    bg = max(a, b);
  }
  return ans + ranges.size;
}
// @lc code=end

export default continuousSubarrays;
