/*
 * @lc app=leetcode id=2309 lang=typescript
 *
 * [2309] Greatest English Letter in Upper and Lower Case
 */

// @lc code=start
function greatestLetter(s: string): string {
    const sCode = new Set(s.split('').map(c => c.charCodeAt(0)));
    const { max, abs } = Math;

    for (let n = 25; n >= 0; n--) {
        const uc = n + 65;
        const lc = n + 97;

        if (sCode.has(uc) && sCode.has(lc)) {
            return String.fromCharCode(uc);
        }
    }
    return "";
};
// @lc code=end

