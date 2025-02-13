/*
 * @lc app=leetcode id=3066 lang=typescript
 *
 * [3066] Minimum Operations to Exceed Threshold Value II
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
  const { min } = Math;
  const hm: Record<number, number> = {};
  let ops = 0;
  let sm = 10e9;

  for (const n of nums) {
    hm[n] ??= 0;
    hm[n]++;
    sm = min(sm, n);
  }
  while (sm < k) {
    let stp = 0;
    let t = 0;
    let len = 0;

    for (const v in hm) {
      const q = hm[v];
      const n = +v;

      if (q > 1 && !stp) {
        t = n * 2 + n;
        hm[v] -= 2;
        if (!hm[v]) {
          delete hm[v];
        }
        break;
      }
      t += n;
      hm[v]--;

      if (!hm[v]) {
        delete hm[v];
      }
      if (stp) {
        break;
      }
      stp++;
      t *= 2;
    }
    hm[t] ??= 0;
    hm[t]++;
    ops++;

    for (const v in hm) {
      len++;

      if (len === 2) break;

      sm = +v;
    }
    if (len < 2) break;
  }
  return ops;
}
// @lc code=end

export default minOperations;
