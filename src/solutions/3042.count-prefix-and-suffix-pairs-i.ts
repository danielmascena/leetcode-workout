/*
 * @lc app=leetcode id=3042 lang=typescript
 *
 * [3042] Count Prefix and Suffix Pairs I
 */

// @lc code=start
function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;
  const isPrefixAndSuffix = (str1: string, str2: string) =>
    str2.startsWith(str1) && str2.endsWith(str1);

  for (let i = 0, len = words.length; i < len - 1; i++) {
    const w1 = words[i];

    for (let j = i + 1; j < len; j++) {
      const w2 = words[j];

      if (isPrefixAndSuffix(w1, w2)) {
        count++;
      }
    }
  }
  return count;
}
// @lc code=end

export default countPrefixSuffixPairs;
/**
 * Accepted
594/594 cases passed (1 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 22.86 % of typescript submissions (52.7 MB)
 */
