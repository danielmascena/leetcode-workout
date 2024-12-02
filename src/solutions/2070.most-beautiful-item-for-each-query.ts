/*
 * @lc app=leetcode id=2070 lang=typescript
 *
 * [2070] Most Beautiful Item for Each Query
 */

// @lc code=start
function maximumBeauty(items: number[][], queries: number[]): number[] {
  const { max } = Math;
  const len = items.length;
  const ans = Array(queries.length).fill(0);
  const stQueries = [...queries]
    .map((q, i) => [q, i])
    .sort(([a], [b]) => a - b);
  const stItems = [...items].sort(([a, b], [c, d]) => {
    if (a !== c) return a - c;
    return d - b;
  }) as [number, number][];
  let [, b] = stItems[0];

  for (let i = 1; i < len; i++) {
    const [cp, cb] = stItems[i];
    stItems[i] = [cp, (b = max(cb, b))];
  }
  const mgv = new Map<number, number>(stItems);
  const pcs = [...mgv.keys()];
  let i = 0;
  let p = 0;
  stQueries.forEach(([q, j]) => {
    while (i < len && q >= pcs[i]) {
      p = max(0, mgv.get(pcs[i])!);
      i++;
    }
    ans[j] = p;
  });
  return ans;
}
// @lc code=end
export default maximumBeauty;
