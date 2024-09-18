/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const res = new Array<Array<number>>();
    const len = nums.length;
    const backtracking = (idx: number, arr: number[]) => {
        if (idx === len) {
            return;
        }
        const num = nums[idx];
        const narr = arr.concat(num);
        res.push(narr);
        backtracking(idx+1, narr); 
        backtracking(idx+1, arr);
    };
    backtracking(0, []);
    return res.concat([[]]);
};
// @lc code=end

//console.log(subsets([1,2,3]));
//console.log(subsets([0]));
