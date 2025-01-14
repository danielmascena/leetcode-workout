/*
 * @lc app=leetcode id=2657 lang=typescript
 *
 * [2657] Find the Prefix Common Array of Two Arrays
 */

// @lc code=start
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const seen = new Set<number>();
  const C = [] as number[];
  A.forEach((na, i) => {
    const nb = B[i];
    let p = C[i - 1] ?? 0;

    if (seen.has(na)) {
      p++;
    }
    if (seen.has(nb)) {
      p++;
    }
    if (na === nb) {
      p++;
    }
    seen.add(na).add(nb);
    C[i] = p;
  });
  return C;
}
// @lc code=end

export default findThePrefixCommonArray;

/**
 * Accepted
1773/1773 cases passed (9 ms)
Your runtime beats 63.64 % of typescript submissions
Your memory usage beats 36.36 % of typescript submissions (59 MB)
 */
