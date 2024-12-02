/*
 * @lc app=leetcode id=2657 lang=typescript
 *
 * [2657] Find the Prefix Common Array of Two Arrays
 */

// @lc code=start
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const mA = new Map<number, number>();
  const mB = new Map<number, number>();
  const { min } = Math;
  const len = A.length;
  const ans = Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    const na = A[i];
    const nb = B[i];
    mA.set(na, (mA.get(na) ?? 0) + 1);
    mB.set(nb, (mB.get(nb) ?? 0) + 1);

    if (mA.has(nb) && mB.has(nb)) {
      const sm = min(mA.get(nb)!, mB.get(nb)!);
      mA.set(nb, mA.get(nb)! - sm);
      mB.set(nb, mB.get(nb)! - sm);

      if (!mA.get(nb)) {
        mA.delete(nb);
      }

      if (!mB.get(nb)) {
        mB.delete(nb);
      }
      ans[i] += sm;
    }

    if (mB.has(na) && mA.has(na)) {
      const sm = min(mA.get(na)!, mB.get(na)!);
      mA.set(na, mA.get(na)! - sm);
      mB.set(na, mB.get(na)! - sm);

      if (!mA.get(na)) {
        mA.delete(na);
      }

      if (!mB.get(na)) {
        mB.delete(na);
      }
      ans[i] += sm;
    }
    ans[i] += ans[i - 1] ?? 0;
  }
  return ans;
}
// @lc code=end

export default findThePrefixCommonArray;
