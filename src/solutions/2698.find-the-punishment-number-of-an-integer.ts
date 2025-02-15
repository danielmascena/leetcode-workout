/*
 * @lc app=leetcode id=2698 lang=typescript
 *
 * [2698] Find the Punishment Number of an Integer
 */

// @lc code=start
function punishmentNumber(n: number): number {
  let ans = 0;
  const found = new Set<number>();
  const redfn = (acc: number, cur: string) => acc + +cur;
  const dp = (o: string, l: number, t: number, i = 0, s = "") => {
    if (found.has(t)) {
      return;
    }
    if (i === l) {
      if (s.split(",").filter(Boolean).reduce(redfn, 0) === t) {
        ans += +o;
        found.add(t);
      }
      return;
    }
    let f = "";
    while (i < l) {
      f += `${o[i]}`;
      dp(o, l, t, ++i, `${s},${f}`);
    }
  };

  for (let i = 1; i <= n; i++) {
    const squared = i * i;
    const ss = String(squared);
    dp(ss, ss.length, i);
  }
  return ans;
}
// @lc code=end

export default punishmentNumber;

/**
 * Accepted
216/216 cases passed (975 ms)
Your runtime beats 0 % of typescript submissions
Your memory usage beats 66.67 % of typescript submissions (56.5 MB)
 */
