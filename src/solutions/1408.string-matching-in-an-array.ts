/*
 * @lc app=leetcode id=1408 lang=typescript
 *
 * [1408] String Matching in an Array
 */

// @lc code=start
function stringMatching(words: string[]): string[] {
  const ans = new Array<string>();
  words.sort((a, b) => b.length - a.length);
  let [s] = words;

  for (let i = 1, len = words.length; i < len; i++) {
    const word = words[i];

    if (s.includes(word)) {
      ans.push(word);
    }
    s += "," + word;
  }
  return ans;
}
// @lc code=end

export default stringMatching;

/**
 * Accepted
67/67 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 82.14 % of typescript submissions (51.6 MB)
 */
