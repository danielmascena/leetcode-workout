/*
 * @lc app=leetcode id=2997 lang=typescript
 *
 * [2997] Minimum Number of Operations to Make Array XOR Equal to K
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
    const t = nums.reduce((a,c) => a ^ c);
    const sk = k.toString(2);
    const st = t.toString(2);
    const ml = Math.max(sk.length,st.length);
    const skn = sk.padStart(ml, "0");
    const stn = st.padStart(ml, "0");
    var cgs = 0;

    for (let i = 0; i < ml; i++) {
        cgs += +(skn[i] !== stn[i]);
    }
    return cgs;
};
// @lc code=end

