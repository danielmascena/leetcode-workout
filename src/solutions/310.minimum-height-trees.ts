/*
 * @lc app=leetcode id=310 lang=typescript
 *
 * [310] Minimum Height Trees
 */

// @lc code=start
function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];

    const m: Map<number, number[]> = new Map();
    const { MAX_SAFE_INTEGER } = Number;
    const { min } = Math;
    var mht = MAX_SAFE_INTEGER;
    const de: Map<number, number> = new Map();

    function dfs(num: number, vst: number[]): number {
        if (vst[num]) return 0;

        const arr = m.get(num) ?? [];
        var mn = MAX_SAFE_INTEGER; 
        vst[num] = 1;

        if (!arr.length) return 0;

        arr.forEach(n => {
            if (vst[n]) return;

            const a = [...vst];
            /*
            arr.forEach(num => {
                if (num !== n) {
                    a[num] = 1;
                }
            });
            */
            mn = min(mn, dfs(n, [...a]));
        });
        return mn === MAX_SAFE_INTEGER ? 0 : mn + 1;
    }
    edges.forEach(([a, b]) => {
        const aa = m.get(a) ?? [];
        const ab = m.get(b) ?? [];
        aa.push(b);
        ab.push(a);
        m.set(a, aa);
        m.set(b, ab);
    });
    for (const n of m.keys()) {
        const d = dfs(n, []);
        mht = min(mht, d);
        de.set(n, d);
    }
    console.log(de, m)
    return [...de].filter(([n,d]) => d === mht).map(([n]) => n);
};
// @lc code=end

