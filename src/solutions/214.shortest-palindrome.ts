/*
 * @lc app=leetcode id=214 lang=typescript
 *
 * [214] Shortest Palindrome
 */

// @lc code=start
function shortestPalindrome(s: string): string {
    const len = s.length;
    let ss = '';
    const isPal = (str: string) => {
        return Array.from(str).reverse().join('') === str;
    };
    if (isPal(s)) return s;

    for (let i = len-1; i >= 0; i--) {
        ss += s.charAt(i);

        if (isPal(ss+s)) {
            return ss+s;
        }
    }
    return s;
};
// @lc code=end

export default shortestPalindrome;