/*
 * @lc app=leetcode id=2275 lang=typescript
 *
 * [2275] Largest Combination With Bitwise AND Greater Than Zero
 */

// @lc code=start
function largestCombination(candidates: number[]): number {
  const bgt = Math.max(...candidates);
  const maxLen = bgt.toString(2).length;
  const arr1s = new Array<number>(maxLen).fill(0);
  const scand = candidates.map((n) => n.toString(2).padStart(maxLen, "0"));

  for (const b of scand) {
    for (let i = 0; i < maxLen; i++) {
      if (b[i] === "1") {
        arr1s[i]++;
      }
    }
  }
  //console.log(arr1s, scand);
  return Math.max(...arr1s);
}
// @lc code=end

export default largestCombination;
