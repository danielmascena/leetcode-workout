/*
 * @lc app=leetcode id=2597 lang=typescript
 *
 * [2597] The Number of Beautiful Subsets
 */

// @lc code=start
function beautifulSubsets(nums: number[], k: number): number {
    const excluded = new Map<number, number[]>();
    const sorted = Array.from(nums).sort((a, b) => a - b);
    const unq = new Set<string>();
    const l = nums.length;
    const trackbacking = (i: number, a: number[]) => {
        if (a.length)
            unq.add(a.join(','));

        if (i === l) {
            return;
        }
        trackbacking(i+1, a.concat(nums[i]));
        trackbacking(i+1, a);
    };
    let q = 0;

    for (let i = 0; i < l - 1; i++) {
        const n1 = sorted[i];

        for (let j = i + 1; j < l; j++) {
            const n2 = sorted[j];
            const d = n2 - n1;

            if (d === k) {
                const a1 = excluded.get(n1) ?? [];
                const a2 = excluded.get(n2) ?? [];
                a1.push(n2);
                a2.push(n1);
                excluded.set(n1, a1);
                excluded.set(n2, a2);
            } else if (d > k) {
                break;
            }
        }
    }
    trackbacking(0, []);
    unq.forEach(sa => {
        const set = new Set(sa.split(',').map(Number));
        const forb = new Set<number>();

        for (const n of set) {
            if (forb.has(n)) {
                return;
            }
            if (excluded.has(n)) {
                excluded.get(n)?.forEach(v => forb.add(v));
            }
        }
        q += 1;
    });
    return q;
};
// @lc code=end
//console.log(beautifulSubsets([2,4,6], 2));
//console.log(beautifulSubsets([1], 1));

