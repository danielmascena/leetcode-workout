/*
 * @lc app=leetcode id=2220 lang=typescript
 *
 * [2220] Minimum Bit Flips to Convert Number
 */

// @lc code=start
function minBitFlips(start: number, goal: number): number {
    const n1 = goal.toString(2);
    const n2 = start.toString(2);
    const len = Math.max(n1.length, n2.length);
    const ns = n1.padStart(len, '0')
    const ng = n2.padStart(len, '0')
    let flips = 0;

    for (let i = 0; i < len; i++) {
        if (ns[i] !== ng[i]) flips++;
    }
    return flips;
};
// @lc code=end

export default minBitFlips;