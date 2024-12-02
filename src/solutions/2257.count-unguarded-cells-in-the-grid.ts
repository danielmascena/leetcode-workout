/*
 * @lc app=leetcode id=2257 lang=typescript
 *
 * [2257] Count Unguarded Cells in the Grid
 */

// @lc code=start
function countUnguarded(
  m: number,
  n: number,
  guards: number[][],
  walls: number[][]
): number {
  const cells = new Set<string>();
  const wst = new Set<string>();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      cells.add(`${i},${j}`);
    }
  }
  walls.forEach(([y, x]) => {
    const p = `${y},${x}`;
    wst.add(p);
    cells.delete(p);
  });
  guards.forEach(([y, x]) => {
    cells.delete(`${y},${x}`);

    for (let i = y - 1; i >= 0; i--) {
      const p = `${i},${x}`;

      if (wst.has(p)) break;

      cells.delete(p);
    }
    for (let i = y + 1; i < m; i++) {
      const p = `${i},${x}`;

      if (wst.has(p)) break;

      cells.delete(p);
    }
    for (let i = x - 1; i >= 0; i--) {
      const p = `${y},${i}`;

      if (wst.has(p)) break;

      cells.delete(p);
    }
    for (let i = x + 1; i < n; i++) {
      const p = `${y},${i}`;

      if (wst.has(p)) break;

      cells.delete(p);
    }
  });
  return cells.size;
}
// @lc code=end

export default countUnguarded;
