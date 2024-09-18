/*
 * @lc app=leetcode id=1122 lang=typescript
 *
 * [1122] Relative Sort Array
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const hm = new Map<number, number>();
    const res = new Array<number>();

    arr1.forEach(num => {
        const q = (hm.get(num) ?? 0) + 1;
        hm.set(num, q);
    });
    arr2.forEach(num => {
        const q = hm.get(num);
        hm.delete(num);
        res.push(...Array(q).fill(num));
    });
    return [...res, ...(Array.from(hm.entries())
        .sort(([a],[b]) => a-b)
        .reduce<number[]>((acc, [n, q]) => [...acc, ...Array(q).fill(n)], []))
    ];
};
// @lc code=end

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
// [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]));
// [22,28,8,6,17,44]
console.log(relativeSortArray([9,88,72,1,100,69,80,72], [69,80,72]));
// [69,80,72,72,1,9,88,100]
// {9: [0], 88:[1], 72:[2, 7], 1:[3], 100:[4],69:[5], 80:[6]}
