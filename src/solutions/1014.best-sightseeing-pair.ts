/*
 * @lc app=leetcode id=1014 lang=typescript
 *
 * [1014] Best Sightseeing Pair
 */

// @lc code=start
function maxScoreSightseeingPair(values: number[]): number {
  const { length: len } = values;
  const { max } = Math;
  const prefix = new Array<number>(len);
  const difs = values.map((v, i) => v - i);
  const sgts = values.map((v, i) => v + i);
  let ans = 0;

  for (let i = len - 1, bg = difs[i]; i >= 0; i--) {
    prefix[i] = bg = max(bg, difs[i]);
  }
  for (let i = 0; i < len - 1; i++) {
    ans = max(sgts[i] + prefix[i + 1], ans);
  }
  return ans;
}
// @lc code=end

export default maxScoreSightseeingPair;

/**
 *Accepted
55/55 cases passed (18 ms) [WARN] Failed to get runtime percentile. 

Runtime
18 ms Beats -%

Memory
59.33 MB Beats -%
 */
