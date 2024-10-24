/*
 * @lc app=leetcode id=921 lang=typescript
 *
 * [921] Minimum Add to Make Parentheses Valid
 */

// @lc code=start
function minAddToMakeValid(s: string): number {
    const { abs } = Math;
    var brackets = 0;
    var count = 0;

    for (const c of s) {
        const v = c == '(' ? 1 : -1;
        brackets += v;

        if (brackets < 0) {
            count += abs(brackets);
            brackets = 0;
        }
    }
    return abs(brackets) + count;
};
// @lc code=end

export default minAddToMakeValid;