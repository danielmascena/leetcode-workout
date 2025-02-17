/*
 * @lc app=leetcode id=1079 lang=typescript
 *
 * [1079] Letter Tile Possibilities
 */

// @lc code=start
function numTilePossibilities(tiles: string): number {
  const ans = new Set<string>(tiles[0]);
  const len = tiles.length;
  const dp = (o: Record<string, number>, s = "") => {
    if (s.length > len) {
      return;
    }
    if (s) ans.add(s);

    for (const k in o) {
      const tmp = { ...o };
      const q = o[k] - 1;

      if (!q) {
        delete tmp[k];
      } else tmp[k] = q;
      dp(tmp, s + k);
    }
  };
  const hm: Record<string, number> = {};

  for (const c of tiles) {
    hm[c] = (hm[c] ?? 0) + 1;
  }
  dp(hm);
  return ans.size;
}
// @lc code=end

export default numTilePossibilities;
/**
 * Accepted
86/86 cases passed (73 ms)
Your runtime beats 29.03 % of typescript submissions
Your memory usage beats 29.03 % of typescript submissions (58.5 MB)
 */
