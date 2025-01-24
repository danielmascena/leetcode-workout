/*
 * @lc app=leetcode id=802 lang=typescript
 *
 * [802] Find Eventual Safe States
 */

// @lc code=start
function eventualSafeNodes(graph: number[][]): number[] {
  const safelNodes = new Set<number>();
  const mgrp = graph
    .map((a, i): [number[], number] => [a, i])
    .sort(([a, i], [b, j]) => {
      const al = a.length;
      const bl = b.length;

      if (al === bl) {
        return j - i;
      }
      return al - bl;
    });
  mgrp.forEach(([a, i]) => {
    if (!a.length || a.every((n) => safelNodes.has(n))) {
      safelNodes.add(i);
    }
  });
  return [...safelNodes].sort((a, b) => a - b);
}
// @lc code=end

export default eventualSafeNodes;
