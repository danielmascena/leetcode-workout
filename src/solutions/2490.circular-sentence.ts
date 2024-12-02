/*
 * @lc app=leetcode id=2490 lang=typescript
 *
 * [2490] Circular Sentence
 */

// @lc code=start
function isCircularSentence(sentence: string): boolean {
  const arr = sentence.split(/\s/);
  arr.push(arr[0]);

  for (let i = 0, len = arr.length; i < len - 1; i++) {
    if (arr[i].at(-1) != arr[i + 1][0]) return false;
  }
  return true;
}
// @lc code=end

export default isCircularSentence;
