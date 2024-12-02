/*
 * @lc app=leetcode id=2516 lang=typescript
 *
 * [2516] Take K of Each Character From Left and Right
 */

// @lc code=start
function takeCharacters(s: string, k: number): number {
  if (!k) return k;

  if (new Set(s).size < 3) return -1;

  const { min } = Math;
  let mnmin = Infinity;

  const dp = (lt: number, rt: number, time: number, arr = Array(3).fill(0)) => {
    if (arr.every((q) => q >= k)) {
      mnmin = min(mnmin, time);
      return;
    }
    if (lt <= rt) {
      const pr = s.codePointAt(rt)! - 97;
      const pl = s.codePointAt(lt)! - 97;
      const a1 = [...arr];
      const a2 = [...arr];
      a1[pr]++;
      a2[pl]++;
      dp(lt, rt - 1, time + 1, a1);
      dp(lt + 1, rt, time + 1, a2);
    }
  };
  dp(0, s.length - 1, 0);
  return mnmin === Infinity ? -1 : mnmin;
}
// @lc code=end

export default takeCharacters;
