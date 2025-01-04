/*
 * @lc app=leetcode id=2294 lang=typescript
 *
 * [2294] Partition Array Such That Maximum Difference Is K
 */

// @lc code=start
function partitionArray(nums: number[], k: number): number {
  const stnums = [...nums].sort((a, b) => a - b);
  const subseq = new Array<number[]>();
  const { length: len } = nums;
  const { max, min } = Math;
  let [bg] = stnums;
  let [sm] = stnums;
  let i = 0;
  let j = 0;

  while (i < len) {
    const num = stnums[i];
    bg = max(bg, num);
    sm = min(sm, num);

    if (bg - sm > k) {
      bg = sm = num;
      j++;
    }
    subseq[j] ??= [];
    subseq[j].push(num);
    i++;
  }
  //console.log(subseq);
  return subseq.length;
}
// @lc code=end

export default partitionArray;
