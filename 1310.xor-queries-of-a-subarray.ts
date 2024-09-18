/*
 * @lc app=leetcode id=1310 lang=typescript
 *
 * [1310] XOR Queries of a Subarray
 */

// @lc code=start
function xorQueries(arr: number[], queries: number[][]): number[] {
    return queries.map(([left, right]) => {
        var sum = arr[left++];

        while (left <= right) {
            sum ^= arr[left++];
        }
        return sum;
    });
};
// @lc code=end

export default xorQueries;