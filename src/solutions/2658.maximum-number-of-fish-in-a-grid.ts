/*
 * @lc app=leetcode id=2658 lang=typescript
 *
 * [2658] Maximum Number of Fish in a Grid
 */

// @lc code=start
function findMaxFish(grid: number[][]): number {
  const seen = new Set<string>();
  const m = grid.length;
  const n = grid[0].length;
  const { max } = Math;
  let maxFisher = 0;
  const validateCoord = (y: number, x: number) =>
    y >= 0 && y < m && x >= 0 && x < n;
  const goFish = (y: number, x: number, q: [number, number][], t = 0) => {
    t += grid[y][x];
    maxFisher = max(maxFisher, t);
    seen.add(`${y}-${x}`);
    const kt = `${y - 1}-${x}`;
    const kb = `${y + 1}-${x}`;
    const kl = `${y}-${x - 1}`;
    const kr = `${y}-${x + 1}`;

    if (!seen.has(kt) && validateCoord(y - 1, x) && grid[y - 1][x]) {
      q.push([y - 1, x]);
      seen.add(kt);
    }
    if (!seen.has(kb) && validateCoord(y + 1, x) && grid[y + 1][x]) {
      q.push([y + 1, x]);
      seen.add(kb);
    }
    if (!seen.has(kl) && validateCoord(y, x - 1) && grid[y][x - 1]) {
      q.push([y, x - 1]);
      seen.add(kl);
    }
    if (!seen.has(kr) && validateCoord(y, x + 1) && grid[y][x + 1]) {
      q.push([y, x + 1]);
      seen.add(kr);
    }
    if (q.length) {
      const [z, w] = q.pop()!;
      goFish(z, w, q, t);
    }
  };
  grid.forEach((r, i) =>
    r.forEach((c, j) => {
      if (c && !seen.has(`${i}-${j}`)) {
        goFish(i, j, []);
      }
    })
  );
  return maxFisher;
}
// @lc code=end

export default findMaxFish;
/**
 * Accepted
3842/3842 cases passed (25 ms)
Your runtime beats 42.31 % of typescript submissions
Your memory usage beats 73.08 % of typescript submissions (59.8 MB)
 */
