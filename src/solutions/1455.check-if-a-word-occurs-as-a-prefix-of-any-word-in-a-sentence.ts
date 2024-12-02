/*
 * @lc app=leetcode id=1455 lang=typescript
 *
 * [1455] Check If a Word Occurs As a Prefix of Any Word in a Sentence
 */

// @lc code=start
function isPrefixOfWord(sentence: string, searchWord: string): number {
  /*
  return (
    sentence.split(" ").findIndex((w) => w.startsWith(searchWord)) + 1 || -1
  );
  */
  const len = sentence.length;
  const lensw = searchWord.length;
  const stcb = Buffer.from(sentence);
  const srwb = Buffer.from(searchWord);
  let x = 1;
  let j = 0;
  let z = 1;

  for (let i = 0; i < len; i++, z++) {
    const b1 = stcb[i];
    const b2 = srwb[j];

    if (b1 === 0x20) {
      z = j = 0;
      x++;
      continue;
    }
    if (b1 === b2) {
      j++;
    }
    if (j === lensw && z === lensw) return x;
  }
  return z === lensw && j === lensw ? x : -1;
}
// @lc code=end

export default isPrefixOfWord;
