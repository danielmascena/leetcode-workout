/*
 * @lc app=leetcode id=3159 lang=typescript
 *
 * [3159] Find Occurrences of an Element in an Array
 */

// @lc code=start
function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
   const mpi = new Map<number, number>();
   let count = 0;
   nums.forEach((n, i) => {
    if (n === x) {
      mpi.set(++count, i)
    }
   })
   return queries.map(q => mpi.get(q) ?? -1);
};
// @lc code=end

export default occurrencesOfElement;
/**
 * Accepted
527/527 cases passed (53 ms)
Your runtime beats 36.84 % of typescript submissions
Your memory usage beats 21.05 % of typescript submissions (90 MB)
 */