/*
 * @lc app=leetcode id=1863 lang=typescript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
/*
function subsetXORSum(nums: number[]): number {
    let sums = new Array<number>();

    for (let i = nums.length - 1; i >= 0; i--) {
        const arr = new Array<number>();
        const n = nums[i];
        sums.forEach(t => arr.push(t ^ n));
        sums = sums.concat(arr, n);
    }
    return sums.reduce<number>((acc, cur) => acc + cur, 0);
};*/
// @lc code=end
function subsetXORSum(nums: number[]): number {
  let count = 0;
  const backtrack = (index, value) => {
    if (index < nums.length) {
      backtrack(index + 1, value ^ nums[index]);
      backtrack(index + 1, value);
    }

    if (index === nums.length) {
      count += value;
    }
  };

  backtrack(0, 0);
  return count;
}
//console.log(subsetXORSum([1,3])); // 6
//console.log(subsetXORSum([5,1,6])); // 28
//console.log(subsetXORSum([3,4,5,6,7,8])); // 480
