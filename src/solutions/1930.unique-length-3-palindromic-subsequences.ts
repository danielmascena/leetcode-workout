/*
 * @lc app=leetcode id=1930 lang=typescript
 *
 * [1930] Unique Length-3 Palindromic Subsequences
 */

// @lc code=start
function countPalindromicSubsequence(s: string): number {
  const ranges = new Map<string, [number, number]>();
  const { length: len } = s;
  let ans = 0;

  for (let i = 0; i < len; i++) {
    const c = s.charAt(i);

    if (ranges.has(c)) {
      ranges.get(c)![1] = i;
    } else {
      ranges.set(c, [i, i]);
    }
    /*
    const end = s.lastIndexOf(c);

    if (!ranges.has(c) && end > i) {
      ranges.set(c, [i, end]);
    }
    */
  }
  ranges.forEach(([start, end]) => {
    if (start + 1 < end) {
      const middles = new Set(s.slice(start + 1, end));
      ans += middles.size;
    }
  });
  return ans;
}
// @lc code=end

export default countPalindromicSubsequence;
