/*
 * @lc app=leetcode id=2661 lang=typescript
 *
 * [2661] First Completely Painted Row or Column
 */

// @lc code=start
function firstCompleteIndex(arr: number[], mat: number[][]): number {
  const n = mat.length;
  const m = mat[0].length;
  const rows = Array(n).fill(0) as number[];
  const cols = Array(m).fill(0) as number[];
  const rowsByCols = new Map<number, [number, number]>();
  mat.forEach((r, i) => r.forEach((c, j) => rowsByCols.set(c, [i, j])));

  for (let i = 0; i < m * n; i++) {
    const [y, x] = rowsByCols.get(arr[i])!;
    const rv = ++rows[y];
    const cv = ++cols[x];

    if (rv === m || cv === n) {
      return i;
    }
  }
  return m * n;
}
// @lc code=end

export default firstCompleteIndex;

/**
 * Accepted
1058/1058 cases passed (136 ms)
Your runtime beats 16.67 % of typescript submissions
Your memory usage beats 33.33 % of typescript submissions (90.2 MB)
 */
