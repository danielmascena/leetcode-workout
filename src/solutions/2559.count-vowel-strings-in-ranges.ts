/*
 * @lc app=leetcode id=2559 lang=typescript
 *
 * [2559] Count Vowel Strings in Ranges
 */

// @lc code=start
function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = "aeiou";
  const { length: len } = words;
  const validByRange = Array<number>(len).fill(0);
  let count = 0;

  for (let i = len - 1; i >= 0; i--) {
    const word = words[i];

    if (vowels.includes(word[0]) && vowels.includes(word.at(-1)!)) {
      count++;
    }
    validByRange[i] = count;
  }
  return queries.map(([l, r]) => validByRange[l] - (validByRange[r + 1] ?? 0));
}
// @lc code=end

export default vowelStrings;
/**
 * Accepted
94/94 cases passed (8 ms)
Your runtime beats 81.82 % of typescript submissions
Your memory usage beats 45.45 % of typescript submissions (78.2 MB)
 */
