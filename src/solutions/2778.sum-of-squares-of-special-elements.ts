/*
 * @lc app=leetcode id=2778 lang=typescript
 *
 * [2778] Sum of Squares of Special Elements 
 */

// @lc code=start
function sumOfSquares(nums: number[]): number {
    const n = nums.length;
    return nums.reduce((sum, num, idx) => sum + (n % (idx + 1) === 0 ? num ** 2 : 0), 0);

};
// @lc code=end
/*
console.log(sumOfSquares([1,2,3,4]))
console.log(sumOfSquares([2,7,1,19,18,3]))
*/