/*
 * @lc app=leetcode id=1475 lang=typescript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
function finalPrices(prices: number[]): number[] {
  return prices.map((p, i) => {
    const discount = prices.find((v, j) => j > i && v <= p) ?? 0;
    return p - discount;
  });
}
// @lc code=end

export default finalPrices;

/*
Accepted
103/103 cases passed (6 ms)
Your runtime beats 13.21 % of typescript submissions
Your memory usage beats 51.85 % of typescript submissions (52.9 MB)
*/
