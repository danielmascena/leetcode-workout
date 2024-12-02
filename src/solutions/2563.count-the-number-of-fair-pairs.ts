/*
 * @lc app=leetcode id=2563 lang=typescript
 *
 * [2563] Count the Number of Fair Pairs
 */

// @lc code=start
function countFairPairs(nums: number[], lower: number, upper: number): number {
  if (new Set(nums).size === 1 && nums[0] === lower && nums[0] === upper) {
    let pairs = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
      pairs += len - (i + 1);
    }
    return pairs;
  }
  const snums = [...nums].sort((a, b) => a - b);
  const ans = new Array<[number, number]>();
  const len = snums.length;
  let l = 0;
  let r = len - 1;

  while (l < r) {
    let v = 0;

    while (l < r && ((v = snums[l] + snums[r]) > upper || v < lower)) {
      if (v > upper) r--;
      else l++;
    }
    if ((v = snums[l] + snums[r]) >= lower && v <= upper) {
      ans.push([l, r]);
    }
    l++;
  }
  if (ans.length) {
    const [b, e] = ans.at(-1)!;
    const sm = snums[b];
    let i = e;

    while (b <= i - 1 && sm + snums[i] >= lower) {
      i--;
    }
    const qut = e - i;
    return ans.length * qut;
  }
  return 0;
}
// @lc code=end
export default countFairPairs;
