/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const val = Math.abs(nums[i]);
    if (nums[val] > 0) {
      nums[val] = -nums[val];
      continue;
    }
    return val;
  }
}
// @lc code=end

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
