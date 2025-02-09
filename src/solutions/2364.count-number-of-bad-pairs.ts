/*
 * @lc app=leetcode id=2364 lang=typescript
 *
 * [2364] Count Number of Bad Pairs
 */

// @lc code=start
function countBadPairs(nums: number[]): number {
  const found = new Set<string>();
  const len = nums.length;
  const dp = (i: number, j: number) => {
    const k = `${i}-${j}`;

    if (found.has(k)) {
      return;
    }
    if (j - i !== nums[j] - nums[i]) {
      found.add(k);
    }
    if (j + 1 < len) {
      dp(i, j + 1);
      dp(j, j + 1);
    }
  };
  if (len > 1) dp(0, 1);
  return found.size;
}
// @lc code=end

export default countBadPairs;
