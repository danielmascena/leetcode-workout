/*
 * @lc app=leetcode id=2696 lang=typescript
 *
 * [2696] Minimum String Length After Removing Substrings
 */

// @lc code=start
function minLength(s: string): number {
    while (true) {
        var ss = s.replace(/AB|CD/, "");

        if (ss == s) break;

        s = ss;
    }
    return ss.length;
};
// @lc code=end

export default minLength;