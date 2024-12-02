/*
 * @lc app=leetcode id=1652 lang=typescript
 *
 * [1652] Defuse the Bomb
 */

// @lc code=start
function decrypt(code: number[], k: number): number[] {
  const len = code.length;
  const { abs } = Math;

  if (!k) return Array(len).fill(0);

  const ans = new Array<number>(len);
  let sum = 0;
  let left = 0;
  let right = 1;

  while (left < len) {
    while (right <= abs(k) + left) {
      sum += code[right % len];
      right++;
    }
    ans[left] = sum;
    sum -= code[++left];
  }
  return k < 0
    ? [...ans.slice(len + k - 1), ...ans.slice(0, len + k - 1)]
    : ans;
}
// @lc code=end

export default decrypt;
