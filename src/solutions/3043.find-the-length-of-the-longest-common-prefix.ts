/*
 * @lc app=leetcode id=3043 lang=typescript
 *
 * [3043] Find the Length of the Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const a1 = arr1.map(String);
    const a2 = arr2.map(String);
    const s1 = `,${a1.join()}`;
    const s2 = `,${a2.join()}`;
    const sfn = ({length:la}: string, {length:lb}: string) => lb - la;
    let lcp = 0;
    a1.sort(sfn);
    a2.sort(sfn);

    for (const n of a1) {
        let l = n.length;

        if (l <= lcp) break;

        while (l > lcp && !s2.includes(`,${n.slice(0, l)}`)) l--;

        if (l > lcp && s2.includes(`,${n.slice(0, l)}`)) {
            lcp = l-1;
        }
    }
    for (const n of a2) {
        let l = n.length;

        if (l <= lcp) break;

        while (l > lcp && !s1.includes(`,${n.slice(0, l)}`)) l--;

        if (l > lcp && s1.includes(`,${n.slice(0, l)}`)) {
            return l;
        }
    }
    return lcp;
};
// @lc code=end

export default longestCommonPrefix;