/*
 * @lc app=leetcode id=2577 lang=typescript
 *
 * [2577] Minimum Time to Visit a Cell In a Grid
 */

// @lc code=start
function minimumTime(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const ftg = grid.flat();
  const { min, max } = Math;
  const maxVal = max(...ftg);
  const cache = new Map<number, Record<string, number>>();
  const len = m * n;
  const seen = new Set<string>();
  const totalCells = ftg.reduce((acc, cur) => acc + cur, 0);
  let mt = totalCells + 1;
  const getDir = (idx: number): Record<string, number> => {
    if (cache.has(idx)) {
      return cache.get(idx)!;
    }
    const t = idx - n;
    const r = idx + 1;
    const b = idx + n;
    const l = idx - 1;
    const dir: Record<string, number> = {};
    if (t >= 0) {
      dir.top = t;
    }
    if (r < len && r % n !== 0) {
      dir.right = r;
    }
    if (b < len) {
      dir.bottom = b;
    }
    if (l >= 0 && l % n !== n - 1) {
      dir.left = l;
    }
    cache.set(idx, dir);
    return dir;
  };
  const traverse = (idx: number, time: number) => {
    const k = `${idx}-${time}`;
    if (time >= mt || time > totalCells || seen.has(k)) {
      return;
    }
    if (idx === len - 1) {
      mt = min(mt, time);
      return;
    }
    //seen.add(k);
    console.log(idx, time);
    const { top, right, bottom, left } = getDir(idx);
    time++;

    if (ftg[right] <= time) traverse(right, time);
    if (ftg[bottom] <= time) traverse(bottom, time);
    if (time < maxVal && ftg[top] <= time) traverse(top, time);
    if (time < maxVal && ftg[left] <= time) traverse(left, time);
  };
  traverse(0, 0);
  return mt <= totalCells ? mt : -1;
}
// @lc code=end

export default minimumTime;
