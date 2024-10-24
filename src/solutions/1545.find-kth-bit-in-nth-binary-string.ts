/*
 * @lc app=leetcode id=1545 lang=typescript
 *
 * [1545] Find Kth Bit in Nth Binary String
 */

// @lc code=start
function findKthBit(n: number, k: number): string {
    let ans = "0";
    const invert = (s: string): string => {
        let is = '';

        for (const c of s) {
            is += ~c + 2;
        }
        return is;
    };
    const reverse = (s: string): string => {
        let rs = '';

        for (const c of s) {
            rs = c + rs;
        }
        return rs;
    };
    while (--n) {
        ans = ans + "1" + reverse(invert(ans));
    }
    return ans[k-1];
};
// @lc code=end

export default findKthBit;