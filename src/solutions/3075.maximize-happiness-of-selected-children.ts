/*
 * @lc app=leetcode id=3075 lang=typescript
 *
 * [3075] Maximize Happiness of Selected Children
 */

// @lc code=start
function maximumHappinessSum(happiness: number[], k: number): number {
    const hm = new Map<number, number>();
    const sarr = [...(new Set([...happiness.values()].sort((a, b) => b - a)).keys())];
    const LEN = sarr.length;
    const { max } = Math;
    var inc = 0;
    var idx = 0;
    var total = 0;
    happiness.forEach((n) => hm.set(n, (hm.get(n) ?? 0) + 1));

    while (k > 0 && idx < LEN) {
        const n = sarr[idx];
        const q = hm.get(n)! - 1;
        const v = max(n - inc, 0);

        if (q === 0) {
            hm.delete(n);
            idx += 1;
        } else {
            hm.set(n, q);
        }
        inc += 1;
        total += v;
        k -= 1;
    }
    return total;
};
// @lc code=end

//console.log(maximumHappinessSum([1,2,3], 2));
//console.log(maximumHappinessSum([1,1,1,1],2));
//console.log(maximumHappinessSum([2,3,4,5],1));
//console.log(maximumHappinessSum([10,47,47],3));