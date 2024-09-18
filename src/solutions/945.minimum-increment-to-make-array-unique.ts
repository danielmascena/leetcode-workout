/*
 * @lc app=leetcode id=945 lang=typescript
 *
 * [945] Minimum Increment to Make Array Unique
 */

// @lc code=start
function minIncrementForUnique(nums: number[]): number {
  const usedNums = new Set<number>();
  var incrQ = 0;
  nums.forEach((n) => {
    while (usedNums.has(n)) {
      incrQ++;
      n++;
    }
    usedNums.add(n);
  });
  return incrQ;
}
// @lc code=end
/** 
console.log(minIncrementForUnique([1, 2, 2])); // 1,2,3=1
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])); //
1,2,3,4,5,7
0+1+1+2+2+0=6
console.log(minIncrementForUnique([0, 0, 0, 1, 1, 1, 999]));
0,1,2,3,4,5,999
0+1+2+2+3+4+0=12
console.log(minIncrementForUnique([1, 3, 0, 3, 0])); //3
console.log(
  minIncrementForUnique([
    14, 4, 5, 14, 13, 14, 10, 17, 2, 12, 2, 14, 7, 13, 14, 13, 4, 16, 4, 10,
  ]),
); //41

*/