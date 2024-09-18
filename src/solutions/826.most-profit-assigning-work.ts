/*
 * @lc app=leetcode id=826 lang=typescript
 *
 * [826] Most Profit Assigning Work
 */

// @lc code=start
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const sbp = profit.map((p, i) => [p, i]).sort(([a], [b]) => b - a);
    const sortedByProfit = new Map(sbp.map(([v, i]) => [v, difficulty[i]]));
    const sortedWorkers = worker.sort((a, b) => b - a);
    var mpt = 0;
    
};
// @lc code=end

console.log(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]))
console.log(maxProfitAssignment([85,47,57], [24,66,99], [40,25,25]))