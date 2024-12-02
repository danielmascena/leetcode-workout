/*
 * @lc app=leetcode id=2684 lang=typescript
 *
 * [2684] Maximum Number of Moves in a Grid
 */

// @lc code=start
function maxMoves(grid: number[][]): number {
  const { max } = Math;
  const m = grid.length;
  const n = grid[0].length;
  let mm = 0;
  const df = (i: number, j: number, t: number, p: number) => {
    if (i < 0 || i === m || j === n) {
      return;
    }
    const num = grid[i][j];

    if (num <= p) {
      return;
    }
    mm = max(t, mm);
    t++;
    df(i - 1, j + 1, t, num);
    df(i, j + 1, t, num);
    df(i + 1, j + 1, t, num);
  };
  for (let i = 0; i < m; i++) {
    df(i, 0, 0, 0);
  }
  return mm;
}
// @lc code=end

export default maxMoves;
