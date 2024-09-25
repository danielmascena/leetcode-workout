/*
 * @lc app=leetcode id=2707 lang=typescript
 *
 * [2707] Extra Characters in a String
 */

// @lc code=start
function minExtraChar(s: string, dictionary: string[]): number {
    const { min } = Math;
    let meca = 50;
    const vdic = dictionary.filter(word => s.includes(word));
    const dp = (tgt: string, ss: string, arr: string[]) => {
        if (!tgt) {
            meca = min(meca, ss.length);
            return;
        }
        const v = [...arr];
        dp(v.shift() ?? '', ss.replaceAll(tgt, ''), v);
    };
    vdic.forEach((w, i) => dp(w, s, [...vdic.slice(0,i), ...vdic.slice(i+1)]));
    return meca;
};
// @lc code=end

export default minExtraChar;