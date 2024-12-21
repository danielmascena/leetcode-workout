/*
 * @lc app=leetcode id=2182 lang=typescript
 *
 * [2182] Construct String With Repeat Limit
 */

// @lc code=start
function repeatLimitedString(s: string, repeatLimit: number): string {
  const { length: len } = s;
  const { min } = Math;
  const pos = Array(26).fill(0);
  const byteLetters = new Uint8Array(Buffer.from(s));
  byteLetters.forEach((b) => pos[b - 97]++);
  let ans = "";
  let j = 25;
  let last = "";

  while (j >= 0) {
    while (j >= 0 && pos[j] === 0) {
      j--;
    }
    const char = String.fromCodePoint(j + 97);

    if (j >= 0 && last.startsWith(char) === false) {
      const rev = min(repeatLimit, pos[j]);
      const v = pos[j] - rev;
      pos[j] = v;
      ans += last = char.repeat(rev);
      const oj = j--;

      while (j >= 0 && pos[j] === 0) {
        j--;
      }
      const char2 = String.fromCodePoint(j + 97);

      if (j < oj && v > 0 && j >= 0 && last.startsWith(char2) === false) {
        const rev2 = min(1, pos[j]);
        pos[j] -= rev2;
        ans += last = char2.repeat(rev2);
        j = 25;
      }
    }
  }
  return ans;
}
// @lc code=end

export default repeatLimitedString;
