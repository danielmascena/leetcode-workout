/*
 * @lc app=leetcode id=1726 lang=typescript
 *
 * [1726] Tuple with Same Product
 */

// @lc code=start
function tupleSameProduct(nums: number[]): number {
  const m = new Map<number, string[]>();
  const seen = new Set<string>();
  const len = nums.length;
  const dp = (i: number, t: number) => {
    const n = nums[i];
    const k1 = `${n},${t}`,
      k2 = `${t},${n}`;

    if (i === len || seen.has(k1) || seen.has(k2)) {
      return;
    }
    const v = n * t;
    const a = m.get(v) ?? [];
    a.push(k1, k2);
    m.set(v, a);
    seen.add(k1).add(k2);
    dp(i + 1, n);
    dp(i + 1, t);
  };
  let counter = 0;
  dp(1, nums[0]);
  m.forEach((a) => {
    if (a.length >= 4) {
      counter += (a.length - 3) * 8;
    }
  });
  console.log(m);
  return counter;
}
// @lc code=end

export default tupleSameProduct;
