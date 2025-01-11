/*
 * @lc app=leetcode id=2940 lang=typescript
 *
 * [2940] Find Building Where Alice and Bob Can Meet
 */

// @lc code=start
function leftmostBuildingQueries(heights: number[], queries: number[][]): number[] {
    const {max} = Math;
    const len = heights.length;
    return queries.map(([a,b]) => {
      const ha = heights[a]
      const hb = heights[b]
      if (a===b) {
        return a
      } else if (a < b && ha < hb) {
        return b
      } else if (b < a && hb < ha) {
        return a
      }
      const tgt = max(ha,hb);
      let stt = max(a,b) + 1;

      while (stt < len) {
        if (tgt < heights[stt]) {
          return stt;
        }
        stt++
      }
      return -1;
    })
};
// @lc code=end

export default leftmostBuildingQueries;