/*
 * @lc app=leetcode id=2191 lang=typescript
 *
 * [2191] Sort the Jumbled Numbers
 */

// @lc code=start
function sortJumbled(mapping: number[], nums: number[]): number[] {
    const map1 = new Map<number, number>();
    const map2 = new Map<number, number[]>();

    nums.forEach((num) => {
        debugger;
        if (map1.has(num)) {
            map2.get(map1.get(num)!)?.push(num);
            return;
        }
        var d = 10;
        var v = 0;
        var n = num;

        if (!n) {
            v = mapping[n];
        }
        while (n) {
            const r = n % d;
            const z = d / 10;
            const p = mapping[r / z];
            v += p * z;
            n -= r;
            d *= 10;
        }
        const arr = map2.get(v) ?? [];
        arr.push(num);
        map2.set(v, arr);
        map1.set(num, v);
    });
    const sortedMap: readonly [number, number[]][] = [...map2].sort(([a], [b]) => a - b);
    //    ^?
    return sortedMap.flatMap(([_, arr]) => arr);
};
// @lc code=end

console.log(sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38]))
console.log(sortJumbled([0,1,2,3,4,5,6,7,8,9], [789,456,123]))
console.log(sortJumbled([9,8,7,6,5,4,3,2,1,0], [0,1,2,3,4,5,6,7,8,9]))// [9,8,7,6,5,4,3,2,1,0]
