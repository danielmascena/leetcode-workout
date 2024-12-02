/*
 * @lc app=leetcode id=2924 lang=typescript
 *
 * [2924] Find Champion II
 */

// @lc code=start
function findChampion(n: number, edges: number[][]): number {
  const nodes = Array(n).fill(0);

  for (const [, v] of edges) {
    nodes[v]--;
  }
  const stg = Math.max(...nodes);
  const idx = nodes.indexOf(stg);
  return nodes.lastIndexOf(stg) > idx ? -1 : idx;
}
// @lc code=end

export default findChampion;
