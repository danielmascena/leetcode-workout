/*
 * @lc app=leetcode id=1072 lang=typescript
 *
 * [1072] Flip Columns For Maximum Number of Equal Rows
 */

// @lc code=start
function maxEqualRowsAfterFlips(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const { max } = Math;
  const mgrp = new Map<string, number>();
  const mriv = new Map<string, string>();
  const ALL_ZEROS = "0,".repeat(n).slice(0, -1);
  const ALL_ONES = "1,".repeat(n).slice(0, -1);
  const revert = (num: number) => Number(!num);
  let mner = 0;
  matrix.forEach((r) => {
    const sr = String(r);
    mgrp.set(sr, (mgrp.get(sr) ?? 0) + 1);

    if (sr === ALL_ONES || sr === ALL_ZEROS) {
      mner++;
    }
    if (!mriv.has(sr)) {
      const inv = r.map(revert).join(",");
      mriv.set(sr, inv);
    }
    return sr;
  });
  mgrp.forEach((qut, key) => {
    mner = max(mner, qut + (mgrp.get(mriv.get(key) ?? "") ?? 0));
  });
  return mner;
}
// @lc code=end

export default maxEqualRowsAfterFlips;
