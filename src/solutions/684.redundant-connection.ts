/*
 * @lc app=leetcode id=684 lang=typescript
 *
 * [684] Redundant Connection
 */

// @lc code=start
function findRedundantConnection(edges: number[][]): number[] {
  const n2m = new Map<number, Set<number>>();

  for (const edge of edges) {
    const [a, b] = edge;
    const z = n2m.get(a);
    const w = n2m.get(b);

    if (z && z.has(b)) {
      return edge;
    }
    if (z && w) {
      z.add(b);
      w.forEach((v) => {
        z.add(v);
        n2m.set(v, z);
      });
      n2m.set(b, z);
    } else {
      const x = z ?? w ?? new Set();
      x.add(a).add(b);
      n2m.set(a, x);
      n2m.set(b, x);
    }
  }
  return [];
}
// @lc code=end

export default findRedundantConnection;

/**
 * Accepted
39/39 cases passed (17 ms)
Your runtime beats 14.29 % of typescript submissions
Your memory usage beats 11.69 % of typescript submissions (56.2 MB)
 */
