/*
 * @lc app=leetcode id=2285 lang=typescript
 *
 * [2285] Maximum Total Importance of Roads
 */

// @lc code=start
function maximumImportance(n: number, roads: number[][]): number {
    const map = new Map<number, number[]>();
    const arr: [number, number][] = Array(n);
    const { min, max } = Math;
    const seen = new Set<string>();
    var total = 0;
    roads.forEach(([a, b]) => {
        const a1 = map.get(a) ?? [];
        const a2 = map.get(b) ?? [];
        a1.push(b);
        a2.push(a);
        map.set(a, a1);
        map.set(b, a2);
    });
    map.forEach((a, v) => arr[v] = [a.length, v]);
    arr.sort(([a],[b]) => b - a);
    arr.forEach((a,i) => arr[i] = [a[1], n - i]);
    const ktv = new Map(arr);
//    console.log(map, arr, ktv);
    ktv.forEach((v, n) => {
        const a = map.get(n);
        a?.forEach((n2) => {
            const k = `${min(n,n2)}-${max(n,n2)}`;
            if (!seen.has(k)) {
                total += v + ktv.get(n2)!;
            }
            seen.add(k)
        })
    });
    return total;
};
// @lc code=end
/*
console.log(maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]))
console.log(maximumImportance(5, [[0,3],[2,4],[1,3]]))
*/