/*
 * @lc app=leetcode id=2017 lang=typescript
 *
 * [2017] Grid Game
 */

// @lc code=start
function gridGame(grid: number[][]): number {
  const n = grid[0].length;
  const [fstRow, sndRow] = grid;
  const { max } = Math;
  const reduceFn = (acc: number, num: number) => acc + num;
  let red1 = fstRow[0] + sndRow.reduce(reduceFn);
  fstRow[0] = 0;
  sndRow[n - 1] = 0;
  let t1r = fstRow.reduce(reduceFn, 0);
  let t2r = 0;
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    const v = max(t2r, t1r);

    if (red1 > v && v < ans) {
      ans = v;
    }
    t1r -= fstRow[i + 1] ?? 0;
    t2r += sndRow[i];
    red1 += fstRow[i + 1];
    red1 -= sndRow[i];
  }
  return ans;
}
// @lc code=end
export default gridGame;

/**
 * Accepted
109/109 cases passed (12 ms)
Your runtime beats 61.54 % of typescript submissions
Your memory usage beats 61.54 % of typescript submissions (64.9 MB)
 */
