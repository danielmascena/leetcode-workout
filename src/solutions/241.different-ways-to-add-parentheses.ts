/*
 * @lc app=leetcode id=241 lang=typescript
 *
 * [241] Different Ways to Add Parentheses
 * Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.
 * The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104. 
 * - 1 <= expression.length <= 20
 * - expression consists of digits and the operator '+', '-', and '*'.
 * - All the integer values in the input expression are in the range [0, 99].
 * - The integer values in the input expression do not have a leading '-' or '+' denoting the sign.
 */

// @lc code=start
function diffWaysToCompute(expression: string): number[] {
    const nums = expression.split(/[\+\-\*]/g);
    const len = nums.length;
    const half = len / 2;
    const qpars = Math.floor(half);
    const df = (idx= 0, qty=qpars, str='') => {
    }
};
// @lc code=end
export default diffWaysToCompute;
