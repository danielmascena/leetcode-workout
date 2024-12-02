/*
 * @lc app=leetcode id=1346 lang=typescript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
function checkIfExist(arr: number[]): boolean {
  const m1 = new Map<number, number>();
  const m2 = new Map<number, number>();

  arr.forEach((n, i) => {
    m1.set(n, (m1.get(n) ?? 0) + 1);
    m2.set(n, i);
  });

  for (let i = 0, len = arr.length; i < len; i++) {
    const d = arr[i] * 2;

    if (m1.has(d)) {
      if (m1.get(d)! >= 2 || m2.get(d) !== i) return true;
    }
  }
  return false;
}
// @lc code=end

export default checkIfExist;
