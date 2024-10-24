/*
 * @lc app=leetcode id=1593 lang=typescript
 *
 * [1593] Split a String Into the Max Number of Unique Substrings
 */

// @lc code=start
function maxUniqueSplit(s: string): number {
    const { max } = Math;
    const len = s.length;
    let mnus = 0;
    const df = (i: number, ss: Set<string>): void => {
        let cs = '';

        while (i < len) {
            cs += `${s.charAt(i++)}`;

            if (!ss.has(cs)) {
                const ns = new Set(ss);
                ns.add(cs);
                df(i, ns);
            }
        }
        if (i === len) {
            mnus = max(mnus, ss.size); 
        }
    };
    df(0, new Set());
    return mnus;
};
// @lc code=end

export default maxUniqueSplit;