/*
 * @lc app=leetcode id=2381 lang=typescript
 *
 * [2381] Shifting Letters II
 */

// @lc code=start
function shiftingLetters(s: string, shifts: number[][]): string {
  const sarr = Uint8Array.from(Buffer.from(s));
  const calcNext = (code: number, dir: number) =>
    dir ? (code + 1 > 122 ? 97 : code + 1) : code - 1 < 97 ? 122 : code - 1;
  shifts.forEach(([start, end, direction]) => {
    while (start <= end) {
      sarr[start] = calcNext(sarr[start], direction);
      start++;
    }
  });
  return String.fromCodePoint(...sarr);
}
// @lc code=end

export default shiftingLetters;
