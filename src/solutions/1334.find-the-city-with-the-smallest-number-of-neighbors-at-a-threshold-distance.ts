/*
 * @lc app=leetcode id=1334 lang=typescript
 *
 * [1334] Find the City With the Smallest Number of Neighbors at a Threshold Distance
 */

// @lc code=start
function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const costs = new Map<string, number>();
    const mCities = new Map<number, number[]>();
    const candidates: [number, number][] = [];
    const { max, min } = Math;
    const dp = (to: number, cost: number, qty: number, from: number, vstd: Set<number>) => {
        if (vstd.has(to)) return;

        const cities = mCities.get(to);

        if (cost > distanceThreshold) {
            candidates.push([from, qty - 1]);
            console.log(from, vstd)
            return;
        }
        qty++;
        vstd.add(to)
        cities?.forEach(city => dp(city, cost + costs.get(`${to}-${city}`)!, qty, from, new Set(vstd)));
    };
    var minimum = 1e5;
    var mVal = 0;

    for (const [from, to, weight] of edges) {
        costs.set(`${from}-${to}`, weight);
        costs.set(`${to}-${from}`, weight);
        const a = mCities.get(from) ?? [];
        const b = mCities.get(to) ?? [];
        a.push(to);
        b.push(from);
        mCities.set(from, a);
        mCities.set(to, b);
    }
    for (let i = 0; i < n; i++) {
        dp(i, 0, 0, i, new Set());
    }
    console.log(candidates, costs)
    candidates.forEach(([_, q]) => minimum = min(minimum, q));
    candidates.forEach(([n, q]) => {
        if (q === minimum) {
            mVal = max(mVal, n);
        }
    })
    return mVal;
};
// @lc code=end
console.log(findTheCity(4,[[0,1,3],[1,2,1],[1,3,4],[2,3,1]],4))
console.log(findTheCity(5,[[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]],2))