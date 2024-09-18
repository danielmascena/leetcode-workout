/*
 * @lc app=leetcode id=1508 lang=typescript
 *
 * [1508] Range Sum of Sorted Subarray Sums
 */

// @lc code=start
function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const prefix = new Array<number>(n);
    const subs: number[] = [];
    let sum = 0;

    for (let i = 0, accum = 0; i < n; i++) {
        prefix[i] = accum += nums[i];
    }
    for (let i = 0; i < n; i++) {
        const p = prefix[i-1] ?? 0;

        for (let j = n-1; j >= i; j--) {
            subs.push(prefix[j] - p)
        }
    }
    subs.sort((a, b) => a - b);

    for (let i = left - 1; i < right; i++) {
        sum += subs[i];
    }
    return sum % (1e9+7);
};
// @lc code=end

console.log(rangeSum([1,2,3,4],4,1,5))
console.log(rangeSum([1,2,3,4],4,3,4))
console.log(rangeSum([1,2,3,4],4,1,10))
