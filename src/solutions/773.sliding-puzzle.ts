/*
 * @lc app=leetcode id=773 lang=typescript
 *
 * [773] Sliding Puzzle
 */

// @lc code=start
function slidingPuzzle(board: number[][]): number {
  const { min } = Math;
  let lnmr = Infinity;
  const fbd = board.flat();
  const tgt = [1, 2, 3, 4, 5, 0];
  const stgt = String(tgt);
  const seen = new Set<string>();
  const df = (idx: number, arr: number[], last?: number, count = 0) => {
    const sarr = String(arr);
    const k = `${sarr}-${count}`;

    if (count > 21) return;

    if (stgt === sarr) {
      lnmr = min(lnmr, count);
      return;
    }
    seen.add(k);
    count++;
    const up = idx - 3;
    const right = idx + 1;
    const down = idx + 3;
    const left = idx - 1;

    if (up >= 0 && up !== last) {
      const cp = [...arr];
      [cp[up], cp[idx]] = [cp[idx], cp[up]];
      df(up, cp, idx, count);
    }

    if (right !== 3 && right < 6 && right !== last) {
      const cp = [...arr];
      [cp[right], cp[idx]] = [cp[idx], cp[right]];
      df(right, cp, idx, count);
    }

    if (down < 6 && down !== last) {
      const cp = [...arr];
      [cp[down], cp[idx]] = [cp[idx], cp[down]];
      df(down, cp, idx, count);
    }

    if (left !== 2 && left >= 0 && left !== last) {
      const cp = [...arr];
      [cp[left], cp[idx]] = [cp[idx], cp[left]];
      df(left, cp, idx, count);
    }
  };
  df(fbd.indexOf(0), fbd);
  return lnmr === Infinity ? -1 : lnmr;
}
// @lc code=end

export default slidingPuzzle;
