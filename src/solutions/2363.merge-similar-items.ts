/*
 * @lc app=leetcode id=2363 lang=typescript
 *
 * [2363] Merge Similar Items
 */

// @lc code=start
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const group: Record<number, number> = {};
  const compute = (items: number[][]) => {
    for (const [val, wei] of items) {
      group[val] ??= 0;
      group[val] += wei;
    }
  };
  compute(items1);
  compute(items2);
  return Object.entries(group).map(([k, v]) => [+k, v]);
}
// @lc code=end

export default mergeSimilarItems;
