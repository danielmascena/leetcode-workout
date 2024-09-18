/*
 * @lc app=leetcode id=1208 lang=typescript
 *
 * [1208] Get Equal Substrings Within Budget
 */

// @lc code=start
function equalSubstring(s: string, t: string, maxCost: number): number {
    const { max, abs } = Math;
    var maxLen = 0;
    const len = s.length;
    const difs = Array.from(s).map((c, i) => abs(c.codePointAt(0)! - t[i].codePointAt(0)!));
    var l = 0;
    var r = 0;
    var q = 0;
    var z = 0;

    while (l < len) {
        while (q + difs[r] <= maxCost && r < len) {
            q += difs[r++];
            z += 1;
        }
        maxLen = max(maxLen, z);
        q -= difs[l++];
        z -= 1;
    }
    return maxLen;
};
// @lc code=end
/*
console.log(equalSubstring("abcd", "bcdf", 3));
console.log(equalSubstring("abcd", "cdef", 3));
console.log(equalSubstring("abcd", "acde", 0));
console.log(equalSubstring("krrgw", "zjxss", 19)); // 2
console.log(equalSubstring("abcd", "cdef", 3))
console.log(equalSubstring("krrgw", "zjxss", 19));
console.log(equalSubstring("pxezla", "loewbi", 25));
*/