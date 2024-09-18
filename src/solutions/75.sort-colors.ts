/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  function selectionSort<T>(arr: T[]): void {
    for (let i = 0, len = nums.length; i < len - 1; i++) {
      let p = i;

      for (let j = i + 1; j < len; j++) {
        if (nums[j] < nums[p]) {
          p = j;
        }
      }
      if (p !== i) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
      }
    }
  }
  selectionSort(nums);
}
// @lc code=end

/*
console.log(sortColors([2, 0, 2, 1, 1, 0])); // 0 0 1 1 2 2
console.log(sortColors([2, 0, 1])); // 0 1 2
console.log(sortColors([1, 1, 1, 1, 2, 2, 2, 2, 0])); // 0 1 1 1 1 2 2 2 2
*/
