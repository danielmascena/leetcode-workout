/*
 * @lc app=leetcode id=1462 lang=typescript
 *
 * [1462] Course Schedule IV
 */

// @lc code=start
function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  const mprere = new Map<number, Set<number>>();
  const graph = new Map<number, number[]>();

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
    mprere.set(i, new Set());
  }
  prerequisites.forEach(([a, b]) => graph.get(b)?.push(a));
  const traverse = (n: number, t: number, v: Set<number> = new Set()) => {
    if (v.has(n)) {
      return;
    }
    mprere.get(t)?.add(n);
    v.add(n);
    graph.get(n)?.forEach((z) => traverse(z, t, v));
  };
  graph.forEach((s, t) => s.forEach((z) => traverse(z, t)));
  return queries.map(([u, v]) => mprere.get(v)?.has(u)) as boolean[];
}
// @lc code=end

export default checkIfPrerequisite;

/**
 * Accepted
69/69 cases passed (521 ms)
Your runtime beats 20.51 % of typescript submissions
Your memory usage beats 23.08 % of typescript submissions (68.8 MB)
 */
