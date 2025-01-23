/*
 * @lc app=leetcode id=1267 lang=typescript
 *
 * [1267] Count Servers that Communicate
 */

// @lc code=start
function countServers(grid: number[][]): number {
  const rows = Array(250) as string[][];
  const cols = Array(250) as string[][];
  grid.forEach((r, i) =>
    r.forEach((c, j) => {
      if (c) {
        const k = `${i}-${j}`;
        const ar = rows[i] ?? [];
        const ac = cols[j] ?? [];
        ar.push(k);
        ac.push(k);
        rows[i] = ar;
        cols[j] = ac;
      }
    })
  );
  console.log(rows, cols);
  const predicate = (a: string[]) => a.length > 1;
  const allPC = new Set([
    ...rows.filter(predicate).flat(),
    ...cols.filter(predicate).flat(),
  ]);
  return allPC.size;
}
// @lc code=end

export default countServers;
/**
 * Accepted
55/55 cases passed (75 ms)
Your runtime beats 6.25 % of typescript submissions
Your memory usage beats 6.25 % of typescript submissions (60.6 MB)
 */
