/*
 * @lc app=leetcode id=1769 lang=typescript
 *
 * [1769] Minimum Number of Operations to Move All Balls to Each Box
 */

// @lc code=start
function minOperations(boxes: string): number[] {
  const n = boxes.length;
  return boxes.split("").map((c, i) => {
    let t = 0;

    for (let j = i + 1, v = 1; j < n; j++) {
      if (+boxes[j]) {
        t += v;
      }
      v++;
    }
    for (let j = i - 1, v = 1; j >= 0; j--) {
      if (+boxes[j]) {
        t += v;
      }
      v++;
    }
    return t;
  });
}
// @lc code=end

export default minOperations;
/**
 * Accepted
95/95 cases passed (307 ms)
Your runtime beats 6 % of typescript submissions
Your memory usage beats 80 % of typescript submissions (54 MB)
 */
