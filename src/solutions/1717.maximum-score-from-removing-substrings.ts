/*
 * @lc app=leetcode id=1717 lang=typescript
 *
 * [1717] Maximum Score From Removing Substrings
 */

// @lc code=start
function maximumGain(s: string, x: number, y: number): number {
    var points = 0;
    const m = {ab: x, ba: y};
    const dp = (ss: string, b: 'ab' | 'ba', t = 0) => {
        if (ss.indexOf('ab') === -1 && ss.indexOf('ba') === -1) {
            if (t > points) points = t;
            return;
        }
        const ns = ss.replace(b,'');

        if (ns !== ss) {
            dp(ns, b, t + m[b]);
        } else {
            dp(ss, b === 'ab' ? 'ba' : 'ab', t);
        }
    };
    dp(s, 'ab')
    dp(s, 'ba')
    return points;
};
// @lc code=end
/*
console.log(maximumGain('cdbcbbaaabab', 4, 5)) // 19
console.log(maximumGain('aabbaaxybbaabb', 5, 4)) // 20
*/