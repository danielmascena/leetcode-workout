/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  const end = Math.min(word1.length, word2.length);
  let ans = "";

  for (let i = 0; i < end; i++) {
    ans += word1.charAt(i) + word2.charAt(i);
  }
  return ans + (word1.slice(end) || word2.slice(end));
}
// @lc code=end

export default mergeAlternately;

/**
 * Accepted
108/108 cases passed (56 ms)
Your runtime beats 74.05 % of typescript submissions
Your memory usage beats 75.34 % of typescript submissions (51.7 MB)
 */
