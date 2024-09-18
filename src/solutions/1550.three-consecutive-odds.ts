/*
 * @lc app=leetcode id=1550 lang=typescript
 *
 * [1550] Three Consecutive Odds
 */

// @lc code=start
function threeConsecutiveOdds(arr: number[]): boolean {
    const len = arr.length;
    var count = 0;

    for (let i = 1; i < len; i++) {
        if (arr[i-1] % 2 === 1 && arr[i] % 2 === 1) {
            count++;
        } else {
            count = 0;
        }
        if (count === 2) return true;
    }
    return false;
};
// @lc code=end
/*
console.log(threeConsecutiveOdds([2,6,4,1]))
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))
console.log(threeConsecutiveOdds([1,1,1]))
*/