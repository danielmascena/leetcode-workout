/*
 * @lc app=leetcode id=1061 lang=typescript
 *
 * [1061] Lexicographically Smallest Equivalent String
 */

// @lc code=start
function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const meq = new Map<string, string[]>();
    const len = s1.length;
    let ans = '';
    const memo = new Map<string, string>();
    const mse = new Map<string, string>();
    const dp = (w: string, v: Set<string>) => {
        if (memo.has(w)) return memo.get(w);

        if (v.has(w)) return w;

        let z = w;
        v.add(w);
        meq.get(w)?.forEach(x => {
            const r = dp(x, new Set(v));
            if (r < z) {
                z = r;
            }
        });
        return z;
    };
    for (let i = 0; i < len; i++) {
        const l1 = s1.charAt(i);
        const l2 = s2.charAt(i);
        const a = meq.get(l1) ?? [];
        const b = meq.get(l2) ?? [];
        a.push(l2);
        b.push(l1);
        meq.set(l1, a).set(l2, b);
    }
    meq.forEach((a, w) => {
        const r = memo.get(w) ?? dp(w, new Set());
        memo.set(w, r);
        mse.set(w, r);
    });

    for (const c of baseStr) {
        const r = mse.get(c) ?? c;
        ans += r < c ? r : c;
    }
    return ans;
};
// @lc code=end

export default smallestEquivalentString;