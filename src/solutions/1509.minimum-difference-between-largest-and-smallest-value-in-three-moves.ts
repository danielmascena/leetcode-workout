/*
 * @lc app=leetcode id=1509 lang=typescript
 *
 * [1509] Minimum Difference Between Largest and Smallest Value in Three Moves
 */

// @lc code=start
function minDifference(nums: number[]): number {
    const arr = nums.sort((a,b) => a - b);
    const { min, max } = Math;
    const len = nums.length;
    var md = Number.MAX_SAFE_INTEGER;
    var l = 0;

    if (arr.length - 3 <= 1) return 0;

    while (l <= 3) {
        const a = arr.slice(l, -(3 - l) || len);
        md = min(md, max(...a) - min(...a));
        l++;
    }
    return md;
};
// @lc code=end
/*
console.log(minDifference([5,3,2,4])) // 0
console.log(minDifference([1,5,0,10,14])) // 1
console.log(minDifference([3,100,20])) // 0
console.log(minDifference([6,6,0,1,1,4,6])) // 2
console.log(minDifference([82,81,95,75,20])) // 1
*/