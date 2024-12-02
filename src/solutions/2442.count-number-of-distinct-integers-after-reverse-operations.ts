/*
 * @lc app=leetcode id=2442 lang=typescript
 *
 * [2442] Count Number of Distinct Integers After Reverse Operations
 */

// @lc code=start
function countDistinctIntegers(nums: number[]): number {
  const snums = new Set(nums);
  const ns = new Set<number>();
  let ans = snums.size;
  snums.forEach((n) => {
    let sn = "";

    while (n) {
      const lo = n % 10;
      n -= lo;
      sn += lo;
      n /= 10;
    }
    const nn = parseInt(sn, 10);

    if (!snums.has(nn) && !ns.has(nn)) {
      ans++;
    }
    ns.add(nn);
  });
  return ans;
}
// @lc code=end

export default countDistinctIntegers;
