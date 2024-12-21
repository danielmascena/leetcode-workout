/*
 * @lc app=leetcode id=2554 lang=typescript
 *
 * [2554] Maximum Number of Integers to Choose From a Range I
 */

// @lc code=start
function maxCount(banned: number[], n: number, maxSum: number): number {
  const bnums = new Set(banned);
  let total = 0;
  let counter = 0;

  for (let i = 1; i <= n && total + i <= maxSum; i++) {
    if (!bnums.has(i)) {
      total += i;
      counter++;
    }
  }
  return counter;
}
// @lc code=end

export default maxCount;
