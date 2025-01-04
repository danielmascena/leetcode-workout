/*
 * @lc app=leetcode id=2466 lang=typescript
 *
 * [2466] Count Ways To Build Good Strings
 */

// @lc code=start
function countGoodStrings(
  low: number,
  high: number,
  zero: number,
  one: number
): number {
  let count = 0;
  const ZERO = "0";
  const ONE = "1";
  const dp = (binstr: string): void => {
    if (binstr.length >= low) {
      count++;
    }
    const newbs1 = binstr + ZERO.repeat(zero);
    const newbs2 = binstr + ONE.repeat(one);
    if (newbs1.length <= high) dp(newbs1);
    if (newbs2.length <= high) dp(newbs2);
  };
  dp("");
  return count % (1e9 + 7);
}
// @lc code=end

export default countGoodStrings;
