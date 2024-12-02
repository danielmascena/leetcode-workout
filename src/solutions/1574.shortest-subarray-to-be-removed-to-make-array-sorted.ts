/*
 * @lc app=leetcode id=1574 lang=typescript
 *
 * [1574] Shortest Subarray to be Removed to Make Array Sorted
 */

// @lc code=start
function findLengthOfShortestSubarray(arr: number[]): number {
  const len = arr.length;
  if (len === 1) return 0;

  const uda = new Array<number>(len);
  let [p] = arr;
  arr.forEach((n, i) => {
    uda[i] = n < p ? 0 : 1;
    p = n;
  });
  const f0 = uda.indexOf(0);
  const l0 = uda.lastIndexOf(0);
  let i = f0;

  if (f0 < 0 && l0 < 0) {
    let b = 0;

    for (let i = 0; i < len - 1; i++) {
      let n = arr[i];
      let t = 1;

      for (let j = i + 1; j < len; j++) {
        const u = arr[j];

        if (n <= u) {
          t++;
          n = u;
        }
      }
      b = Math.max(b, t);
    }
    return len - b;
  }
  if (l0 === f0) {
    return Math.min(l0, len - f0 + 1);
  }
  if (l0 + 1 >= len) return len - f0;

  while (i >= 0 && arr[i] > arr[l0 + 1]) i--;

  console.log(arr, uda, f0, i, l0);

  return l0 - i;
}
// @lc code=end

export default findLengthOfShortestSubarray;
