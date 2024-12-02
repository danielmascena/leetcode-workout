/*
 * @lc app=leetcode id=1975 lang=typescript
 *
 * [1975] Maximum Matrix Sum
 */

// @lc code=start
function maxMatrixSum(matrix: number[][]): number {
  const n = matrix.length;
  const fmtx = matrix.flat();
  const len = n * n;
  const { max } = Math;
  const nidx = new Array<number>();
  const getAdjacents = (idx: number): number[] => {
    const adjs = Array<number>();

    if (idx - n >= 0) {
      adjs.push(idx - n);
    }
    if (idx - 1 >= 0) {
      adjs.push(idx - 1);
    }
    if (idx + 1 < len) {
      adjs.push(idx + 1);
    }
    if (idx + n < len) {
      adjs.push(idx + n);
    }
    return adjs;
  };
  const reduceFn = (sum: number, num: number) => sum + num;
  let mms = fmtx.reduce(reduceFn);
  const search = (idx: number, arr: number[], seen: Set<number>) => {
    if (!seen.has(idx)) {
      const adjs = getAdjacents(idx);
      seen.add(idx);
      adjs.forEach((pos) => {
        const cfmt = [...arr];
        const cs = new Set(seen);
        cs.add(pos);
        cfmt[pos] = ~cfmt[pos] + 1;
        cfmt[idx] = ~cfmt[idx] + 1;
        mms = max(mms, cfmt.reduce(reduceFn));
        nidx.forEach((pos) => search(pos, cfmt, cs));
      });
    }
  };
  fmtx.forEach((num, idx) => {
    if (num < 0) {
      nidx.push(idx);
    }
  });
  nidx.forEach((idx) => search(idx, fmtx, new Set()));
  return mms;
}
// @lc code=end

export default maxMatrixSum;
