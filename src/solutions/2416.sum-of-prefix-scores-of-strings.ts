/*
 * @lc app=leetcode id=2416 lang=typescript
 *
 * [2416] Sum of Prefix Scores of Strings
 */

// @lc code=start
function sumPrefixScores(words: string[]): number[] {
    const mPref = new Map<string, Set<string>>();
    const mQut = new Map<string, number>();
    const wds = [...words].sort();
    const s = `,${wds.join()}`;

    for (const p of wds) {
        const l = p.length;
        let ss = '';
        let a = new Set<string>();
        let t = 0;

        for (let i = 0; i < l; i++) {
            ss += p.charAt(i);
            const pa = mPref.get(ss);

            if (pa) {
                a = new Set([...a, ...pa])
            } else {
                const {length: v} = s.match(RegExp(`,${ss}`, 'g')) ?? [];
                a.add(ss);
                mQut.set(ss, v);
                t = v;
            }
        }
        mQut.set(p, t);
        mPref.set(p, a);
    }
    //console.log(mPref, mQut)
    return words.map(w => {
        let v = 0;

        if (mPref.has(w)) {
            const q = mPref.get(w)!;
            for (const z of q) {
                v += mQut.get(z) ?? 0;
            }
        }
        return v;
    });
};
// @lc code=end

export default sumPrefixScores;