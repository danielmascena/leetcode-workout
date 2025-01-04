/*
 * @lc app=leetcode id=983 lang=typescript
 *
 * [983] Minimum Cost For Tickets
 */

// @lc code=start
function mincostTickets(days: number[], costs: number[]): number {
  const [one, seven, thirty] = costs;
  const { length: len } = days;
  const { min } = Math;
  const deals: { one: number; seven: number; thirty: number } = {
    one,
    seven,
    thirty,
  };
  if (one * 7 < seven) {
    deals.seven = one * 7;
  }
  if (seven * 4 + (one + one) < thirty) {
    deals.thirty = seven * 4 + one + one;
  }
  let nod = 365 * costs[0];
  const dp = (idx: number, end: number, total: number) => {
    if (idx === len) {
      nod = min(nod, total);
      return;
    }
    const d = days[idx];
    let i = idx;

    while (i < len && days[i] <= end) {
      i++;
    }
    if (i !== idx) {
      dp(i, 0, total);
    } else {
      dp(idx + 1, d, total + costs[0]);
      dp(idx + 1, d + 6, total + costs[1]);
      dp(idx + 1, d + 29, total + costs[2]);
    }
  };
  dp(0, 0, 0);
  return nod;
}
// @lc code=end

export default mincostTickets;
