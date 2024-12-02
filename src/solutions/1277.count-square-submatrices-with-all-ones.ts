/*
 * @lc app=leetcode id=1277 lang=typescript
 *
 * [1277] Count Square Submatrices with All Ones
 */

// @lc code=start
function countSquares(matrix: number[][]): number {
  const arr = matrix.flat();
  let sqrs = arr.filter(Boolean).length;
  const m = matrix.length;
  const n = matrix[0].length;
  const { min, trunc } = Math;
  let size = 2;

  while (size <= min(m, n)) {
    for (let i = 0; i + (size - 1) * n < n * m; i++) {
      let v = size;
      let j = i;

      while (v) {
        const sm = min(...arr.slice(j, j + size));
        j += n;

        if (!sm) {
          break;
        }
        v--;
      }
      if (!v) {
        sqrs++;
      }
      const b = (i + size) / n;

      if (Number.isInteger(b)) {
        i = n * trunc(b) - 1;
      }
    }
    size++;
  }
  return sqrs;
}
// @lc code=end

export default countSquares;
