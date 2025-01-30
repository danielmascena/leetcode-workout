/*
 * @lc app=leetcode id=2428 lang=typescript
 *
 * [2428] Maximum Sum of an Hourglass
 */

// @lc code=start
function maxSum(grid: number[][]): number {
  const [st, nd, rd] = grid;
  const n = grid.length;
  const m = grid[0].length;
  const {max} = Math;
  let hourglass = st[0] + st[1] + st[2] + nd[1] + rd[0] + rd[1] + rd[2];
  let ans = hourglass;

  for (let i = 1; i + 1 < n; i++) {
    let cphg = hourglass;
    const uprow = grid[i - 1];
    const mdrow = grid[i];
    const bwrow = grid[i + 1];

    for (let j = 1; j + 1 < m; j++) {
      ans = max(ans, cphg);
      cphg -= uprow[j - 1] + mdrow[j] + bwrow[j - 1];
      cphg += uprow[j + 2] + mdrow[j + 1] + bwrow[j + 2];
    }
    const [ust, und, urd] = uprow;
    const [mst, , mrd] = mdrow;
    const [bst, , brd] = bwrow;
    const [a = 0, b = 0, c = 0] = grid[i + 2] ?? [];
    hourglass -= ust + und + urd + bst + brd;
    hourglass += mst + mrd + a + b + c;
  }
  return ans;
}
// @lc code=end

export default maxSum;
/**
 * Accepted
41/41 cases passed (18 ms)
Your runtime beats 26.67 % of typescript submissions
Your memory usage beats 26.67 % of typescript submissions (55.8 MB)
 */
