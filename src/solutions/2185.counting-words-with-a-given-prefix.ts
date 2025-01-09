/*
 * @lc app=leetcode id=2185 lang=typescript
 *
 * [2185] Counting Words With a Given Prefix
 */

// @lc code=start
function prefixCount(words: string[], pref: string): number {
  let ans = 0;

  for (const word of words) {
    if (word.startsWith(pref)) {
      ans++;
    }
  }
  return ans;
}
// @lc code=end

export default prefixCount;

/**
 * Accepted
95/95 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 32.26 % of typescript submissions (52.5 MB)
 */
