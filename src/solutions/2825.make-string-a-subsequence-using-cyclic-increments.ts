/*
 * @lc app=leetcode id=2825 lang=typescript
 *
 * [2825] Make String a Subsequence Using Cyclic Increments
 */

// @lc code=start
function canMakeSubsequence(str1: string, str2: string): boolean {
  const bstr1 = new Uint8Array(Buffer.from(str1));
  const bstr2 = new Uint8Array(Buffer.from(str2));
  const l2 = str2.length;
  const getDif = (a: number, b: number) => {
    const dif = a - b;
    return dif === 25 ? -1 : dif;
  };
  let j = 0;

  for (let i = 0, l1 = str1.length; i < l1 && j < l2; i++) {
    const n1 = bstr1[i];
    const n2 = bstr2[j];
    const dif = getDif(n1, n2);

    if (dif === -1 || dif === 0) {
      j++;
    }
  }
  return j === l2;
}
// @lc code=end

export default canMakeSubsequence;
