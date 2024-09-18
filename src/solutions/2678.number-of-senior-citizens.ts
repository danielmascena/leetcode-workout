/*
 * @lc app=leetcode id=2678 lang=typescript
 *
 * [2678] Number of Senior Citizens
 */

// @lc code=start
function countSeniors(details: string[]): number {
    return details.reduce((amt, dtl) => amt + (Number(dtl.at(-4)+dtl.at(-3)!) > 60 ? 1 : 0), 0);
};
// @lc code=end

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]));
console.log(countSeniors(["1313579440F2036","2921522980M5644"]))