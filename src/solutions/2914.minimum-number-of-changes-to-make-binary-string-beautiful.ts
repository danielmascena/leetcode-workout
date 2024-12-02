/*
 * @lc app=leetcode id=2914 lang=typescript
 *
 * [2914] Minimum Number of Changes to Make Binary String Beautiful
 */

// @lc code=start
function minChanges(s: string): number {
  const len = s.length;
  let d = 0;

  for (let i = 0, j = 0; i < len; i += 2, j++) {
    if (s[i] !== s[i + 1]) {
      d++;
    }
  }
  return d;
}
// @lc code=end

export default minChanges;
