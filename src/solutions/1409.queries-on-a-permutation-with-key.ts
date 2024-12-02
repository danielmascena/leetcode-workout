/*
 * @lc app=leetcode id=1409 lang=typescript
 *
 * [1409] Queries on a Permutation With Key
 */

// @lc code=start
declare global {
  interface Number {
    [Symbol.iterator](): Iterator<number>;
  }
}
function processQueries(queries: number[], m: number): number[] {
  Number.prototype[Symbol.iterator] = function* () {
    let i = 1;
    const n = this.valueOf();

    while (i <= n) {
      yield i++;
    }
  };
  const P = [...m];
  return queries.map((q) => {
    const p = P.indexOf(q);
    if (p) {
      P.splice(p, 1);
      P.unshift(q);
    }
    return p;
  });
}
// @lc code=end

export default processQueries;
