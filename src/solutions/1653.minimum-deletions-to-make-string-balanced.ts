/*
 * @lc app=leetcode id=1653 lang=typescript
 *
 * [1653] Minimum Deletions to Make String Balanced
 */

// @lc code=start
function minimumDeletions(s: string): number {
    const len = s.length;
    const prefix = new Array<[number, number]>(len);
    const posfix = new Array<[number, number]>(len);
    //    ^?
    const { min } = Math;
    let minDel = len;
    let totalAs = 0;
    let totalBs = 0;

    for (const c of s) {
        if (c === 'a') totalAs++;
        else totalBs++;
    }
    for (let i = 0, as = 0, bs = 0; i < len; i++) {
        const c = s[i];
        (c === 'a' ? as++ : bs++);
        prefix[i] = [totalAs - as, totalBs - bs];
        posfix[i] = [as, bs];
    }
    for (let i = 0; i < len; i++) {
        const [pa, pb] = prefix[i];
        const [na=0, nb=0] = posfix[i-1] ?? [];
        minDel = min(minDel, pa + nb);
    }
    return minDel;
};
// @lc code=end

console.log(minimumDeletions("aababbab"))// 2
console.log(minimumDeletions("bbaaaaabb"))// 2
console.log(minimumDeletions("baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb"))// 18