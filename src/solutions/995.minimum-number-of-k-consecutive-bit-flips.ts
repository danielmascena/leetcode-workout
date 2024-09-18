/*
 * @lc app=leetcode id=995 lang=typescript
 *
 * [995] Minimum Number of K Consecutive Bit Flips
 */

// @lc code=start
function minKBitFlips(nums: number[], k: number): number {
    var count = 0;
    const len = nums.length;
    const stk = new Array<number>();

    for (let i = 0; i <= len - k; i++) {
        const n = nums[i];

        if (!n && !stk.length) {
            stk.push(k - 1);
            nums[i] = 1;
        } else if (!n) {
            
        }
    }
    return new Set(nums).size === 1 ? count : -1;
};
// @lc code=end
/*
console.log(minKBitFlips([0,1,0],1));
console.log(minKBitFlips([1,1,0],2));
console.log(minKBitFlips([0,0,0,1,0,1,1,0],3));
*/