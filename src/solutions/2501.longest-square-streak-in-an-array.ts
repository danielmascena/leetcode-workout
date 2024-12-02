/*
 * @lc app=leetcode id=2501 lang=typescript
 *
 * [2501] Longest Square Streak in an Array
 */

// @lc code=start
function longestSquareStreak(nums: number[]): number {
  const { max } = Math;
  const m = new Map<number, number>();
  const sortedNums = [...nums].sort((a, b) => a - b);

  for (const n of sortedNums) {
    const sq = n ** 2;

    if (m.has(n)) {
      const q = m.get(n)!;
      m.set(sq, q + 1);
    } else {
      m.set(sq, 1);
    }
  }
  const mv = max(...[...m.values()]);
  return mv > 1 ? mv : -1;
}
// @lc code=end

export default longestSquareStreak;
