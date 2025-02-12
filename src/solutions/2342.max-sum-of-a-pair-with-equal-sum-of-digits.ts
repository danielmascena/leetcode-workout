/*
 * @lc app=leetcode id=2342 lang=typescript
 *
 * [2342] Max Sum of a Pair With Equal Sum of Digits
 */

// @lc code=start
function maximumSum(nums: number[]): number {
  const { max } = Math;
  let ans = -1;
  const m = new Map<number, number[]>();
  nums.forEach((n) => {
    const t = String(n)
      .split("")
      .map(Number)
      .reduce((a, c) => a + c, 0);
    const st = m.get(t) ?? [];
    st.push(n);
    m.set(t, st);
  });
  m.forEach((a) => {
    if (a.length > 1) {
      a.sort((a, b) => a - b);
      ans = max(ans, a.at(-1)! + a.at(-2)!);
    }
  });
  return ans;
}
// @lc code=end

export default maximumSum;
/**
 * Accepted
83/83 cases passed (361 ms)
Your runtime beats 7.5 % of typescript submissions
Your memory usage beats 6.25 % of typescript submissions (77.5 MB)
 */
