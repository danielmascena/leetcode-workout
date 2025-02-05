/*
 * @lc app=leetcode id=1790 lang=typescript
 *
 * [1790] Check if One String Swap Can Make Strings Equal
 */

// @lc code=start
function areAlmostEqual(s1: string, s2: string): boolean {
  let count = 0;
  let s = "";

  if (s1 === s2) {
    return true;
  }
  for (let i = 0, len = s1.length; i < len; i++) {
    const c1 = s1.charAt(i);
    const c2 = s2.charAt(i);

    if (c1 !== c2) {
      s += `${c1}${c2}`;
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return count === 2 && s[0] + s[1] === s[3] + s[2];
}
// @lc code=end

export default areAlmostEqual;

/**
 * Accepted
132/132 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 100 % of typescript submissions (51.1 MB)
 */
