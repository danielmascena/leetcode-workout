/*
 * @lc app=leetcode id=633 lang=typescript
 *
 * [633] Sum of Square Numbers
 */

// @lc code=start
function judgeSquareSum(c: number): boolean {
   const cn = BigInt(c);
   const end = c ** 2;
   const nums = new Array<number>(end+1); 
   var left = 0;
   var right = end;

   for (let i = 0; i <= end; i++) {
    nums[i] = i;
   }
   while (left <= right) {
    const nl = nums[left];
    const nr = nums[right];
    const sum = BigInt(nl ** 2 + nr ** 2);

    if (sum === cn) {
        return true;
    } else if (sum > cn) {
        right--;
    } else {
        left++;
    }
   }
   return false;
};

// @lc code=end
/*
console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(4))
console.log(judgeSquareSum(2))
*/