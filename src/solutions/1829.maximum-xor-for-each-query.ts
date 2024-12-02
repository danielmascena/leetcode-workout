/*
 * @lc app=leetcode id=1829 lang=typescript
 *
 * [1829] Maximum XOR for Each Query
 */

// @lc code=start
function getMaximumXor(nums: number[], maximumBit: number): number[] {
  const threshold = 2 ** maximumBit;
  const len = nums.length;
  const ans = new Array<number>(len);
  let ttl = nums.reduce((acc, cur) => acc ^ cur);

  for (let i = 0; i < len; ttl ^= nums[len - ++i]) {
    let k = threshold - 1;
    let xor = ttl ^ k;
    let bk = k;

    while (--k >= 0) {
      const v = ttl ^ k;
      if (v > xor) {
        xor = v;
        bk = k;
      }
    }
    ans[i] = bk;
  }
  return ans;
}
// @lc code=end

export default getMaximumXor;
