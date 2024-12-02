/*
 * @lc app=leetcode id=2290 lang=typescript
 *
 * [2290] Minimum Obstacle Removal to Reach Corner
 */

// @lc code=start
function minimumObstacles(grid: number[][]): number {
  const { min } = Math;
  const m = grid.length;
  const n = grid[0].length;
  const len = n * m;
  const arr = grid.flat();
  const getAround = (idx: number) => {
    const directions: Record<string, number> = {
      up: -1,
      down: -1,
      left: -1,
      right: -1,
    };
    const u = idx - n;
    const r = idx + 1;
    const d = idx + n;
    const l = idx - 1;

    // check up
    if (u >= 0) {
      directions.up = u;
    }
    // check right
    if (r < len && r % n !== 0) {
      directions.right = r;
    }
    // check down
    if (d < len) {
      directions.down = d;
    }
    // check left
    if (l >= 0 && l % n !== n - 1) {
      directions.left = l;
    }
    return directions;
  };
  let msteps = len;
  const findWay = (idx: number, seen: Set<number>, removed = 0): void => {
    if (removed >= msteps || idx === len - 1) {
      msteps = min(msteps, removed);
      return;
    }
    if (arr[idx]) {
      removed++;
    }
    const { up, left, down, right } = getAround(idx);
    seen.add(idx);
    //console.log(idx, up, left, down, right);

    if (!seen.has(up)) {
      findWay(up, new Set(seen), removed);
    }
    if (!seen.has(right)) {
      findWay(right, new Set(seen), removed);
    }
    if (!seen.has(down)) {
      findWay(down, new Set(seen), removed);
    }
    if (!seen.has(left)) {
      findWay(left, new Set(seen), removed);
    }
  };
  findWay(0, new Set([-1]));
  return msteps;
}
// @lc code=end

export default minimumObstacles;
