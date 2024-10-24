/*
 * @lc app=leetcode id=1590 lang=typescript
 *
 * [1590] Make Sum Divisible by P
 */

// @lc code=start
function minSubarray(nums: number[], p: number): number {
    const len = nums.length;
    const redFunc = (acc: number, cur: number) => acc + cur;
    const total = nums.reduce(redFunc, 0);
    var size = 1;

    if (total % p == 0) {
        return 0;
    }
    while (size < len) {
        for (let i = 0, j = i + size; j <= len; i++, j++) {
            const snum = nums.slice(i, j);
            //console.log(snum);

            if ((total - snum.reduce(redFunc, 0)) % p == 0) {
                return size;
            }
        }
        size++
    }
    return -1;
};
// @lc code=end

export default minSubarray;