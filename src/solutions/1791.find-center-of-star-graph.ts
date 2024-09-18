/*
 * @lc app=leetcode id=1791 lang=typescript
 *
 * [1791] Find Center of Star Graph
 */

// @lc code=start
function findCenter(edges: number[][]): number {
    const [[a,b],[c,d]] = edges;

    if (c === a || c === b) return c;
    return d;
};
// @lc code=end
/*
console.log(findCenter([[1,2],[2,3],[4,2]])); // 2
console.log(findCenter([[1,2],[5,1],[1,3],[1,4]])); // 1
*/