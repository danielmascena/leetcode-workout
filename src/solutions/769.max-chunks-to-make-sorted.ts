/*
 * @lc app=leetcode id=769 lang=typescript
 *
 * [769] Max Chunks To Make Sorted
 */

// @lc code=start
function maxChunksToSorted(arr: number[]): number {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const sortFn = (a: number, b: number) => a - b;
  const bucket = [];
  let count = 0;
  let sarr = "";

  for (let i = 0, len = arr.length; i < len; i++) {
    const sn = sortedArr[i];
    const n = arr[i];
    sarr += sn;
    bucket.push(n);
    bucket.sort(sortFn);

    if (sarr === bucket.join("")) {
      count++;
    }
  }
  return count;
}
// @lc code=end

export default maxChunksToSorted;

/**
 * Accepted
52/52 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 14.29 % of typescript submissions (51.5 MB)
 */
