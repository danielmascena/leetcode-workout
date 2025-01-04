/*
 * @lc app=leetcode id=2023 lang=typescript
 *
 * [2023] Number of Pairs of Strings With Concatenation Equal to Target
 */

// @lc code=start
function numOfPairs(nums: string[], target: string): number {
  const pairs = new Set<string>();
  const msize = new Map<number, number[]>();
  const tlen = target.length;
  nums.forEach((num, idx) => {
    const len = num.length;
    const dif = tlen - len;
    const arr = msize.get(dif) ?? [];
    arr.push(idx);
    msize.set(dif, arr);
    if (msize.has(len)) {
      msize.get(len)?.forEach((jdx) => {
        if (jdx === idx) {
          return;
        }
        const frag = nums[jdx];
        const a = frag + num;
        const b = num + frag;

        if (a === target) {
          pairs.add(`${jdx}-${idx}`);
        }
        if (b === target) {
          pairs.add(`${idx}-${jdx}`);
        }
      });
    }
  });
  //console.log(pairs);
  return pairs.size;
}
// @lc code=end

export default numOfPairs;
