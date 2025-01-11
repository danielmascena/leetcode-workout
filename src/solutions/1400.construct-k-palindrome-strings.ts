/*
 * @lc app=leetcode id=1400 lang=typescript
 *
 * [1400] Construct K Palindrome Strings
 */

// @lc code=start
function canConstruct(s: string, k: number): boolean {
  const len = s.length;

  if (k > len) {
    return false;
  }
  if (k === len) {
    return true;
  }
  const mapped = Array(26).fill(0) as number[];

  for (const c of s) {
    mapped[Buffer.from(c).readUInt8() - 97]++;
  }
  let pairs = 0;
  let leftovers = 0;

  for (const q of mapped) {
    if (!q) continue;

    const v = (q / 2) >>> 0;
    const l = q % 2;

    pairs += v;
    leftovers += l;
  }
  if (leftovers > k) {
    return false;
  }
  return leftovers + pairs * 2 >= k;
}
// @lc code=end

export default canConstruct;

/**
 * Accepted
109/109 cases passed (153 ms)
Your runtime beats 7.14 % of typescript submissions
Your memory usage beats 7.14 % of typescript submissions (59.9 MB)
 */
