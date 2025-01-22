/*
 * @lc app=leetcode id=1765 lang=typescript
 *
 * [1765] Map of Highest Peak
 */

// @lc code=start
function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length;
  const n = isWater[0].length;
  const waterCells = new Set<string>();
  const queue = [] as string[];
  const { min, max } = Math;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j]) {
        waterCells.add(`${i}-${j}`);
        isWater[i][j] = 0;
      } else {
        isWater[i][j] = 1;
      }
    }
  }
  const visited = new Set(waterCells);
  waterCells.forEach((p) => {
    const [y, x] = p.split("-");
    const ny = parseInt(y);
    const nx = parseInt(x);
    let kt: string;
    let kl: string;
    let kr: string;
    let kb: string;

    // top
    if (ny > 0 && !waterCells.has((kt = `${ny - 1}-${nx}`))) {
      isWater[ny - 1][nx] = 1;
      visited.add(kt);
      queue.push(kt);
    }
    //left
    if (nx > 0 && !waterCells.has((kl = `${ny}-${nx - 1}`))) {
      isWater[ny][nx - 1] = 1;
      visited.add(kl);
      queue.push(kl);
    }
    // right
    if (nx + 1 < n && !waterCells.has((kr = `${ny}-${nx + 1}`))) {
      isWater[ny][nx + 1] = 1;
      visited.add(kr);
      queue.push(kr);
    }
    // bottom
    if (ny + 1 < m && !waterCells.has((kb = `${ny + 1}-${nx}`))) {
      isWater[ny + 1][nx] = 1;
      visited.add(kb);
      queue.push(kb);
    }
  });
  while (queue.length) {
    const [y, x] = queue.shift()!.split("-");
    const ny = parseInt(y);
    const nx = parseInt(x);
    let vsm = Number.MAX_VALUE;
    let vbg = 1;
    let kt: string;
    let kl: string;
    let kr: string;
    let kb: string;

    // top
    if (ny > 0) {
      if (visited.has((kt = `${ny - 1}-${nx}`))) {
        const v = isWater[ny - 1][nx];
        vsm = min(vsm, v);
        vbg = max(vbg, v);
      } else queue.push(kt);
    }
    //left
    if (nx > 0) {
      if (visited.has((kl = `${ny}-${nx - 1}`))) {
        const v = isWater[ny][nx - 1];
        vsm = min(vsm, v);
        vbg = max(vbg, v);
      } else queue.push(kl);
    }
    // right
    if (nx + 1 < n) {
      if (visited.has((kr = `${ny}-${nx + 1}`))) {
        const v = isWater[ny][nx + 1];
        vsm = min(vsm, v);
        vbg = max(vbg, v);
      } else queue.push(kr);
    }
    // bottom
    if (ny + 1 < m) {
      if (visited.has((kb = `${ny + 1}-${nx}`))) {
        const v = isWater[ny + 1][nx];
        vsm = min(vsm, v);
        vbg = max(vbg, v);
      } else queue.push(kb);
    }
    isWater[ny][nx] = vbg - vsm > 1 ? vsm + 1 : vsm + 1;
    visited.add(`${y}-${x}`);
  }
  return isWater;
}
// @lc code=end

export default highestPeak;
/**
 * Time Limit Exceeded
40/59 cases passed (N/A)
 */
