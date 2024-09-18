/*
 * @lc app=leetcode id=846 lang=typescript
 *
 * [846] Hand of Straights
 */

// @lc code=start
function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (groupSize === 1) return true;

    const stdHand = Array.from(hand).sort((a, b) => a - b);
    const hm = new Map<number, number[]>();
    const lst = new Array<Array<number>>();

    for (let i = 0, len = stdHand.length; i < len; i++) {
        const num = stdHand[i];

        if (hm.has(num)) {
            const idxs = hm.get(num);
            const j = idxs?.shift() as number;
            const arr = lst[j];

            if (idxs!.length === 0) {
                hm.delete(num);
            }
            arr.push(num);

            if (arr.length < groupSize) {
                const tmp = hm.get(num+1) ?? [];
                tmp.push(j);
                hm.set(num+1, tmp);
            }
        } else {
            const arr = hm.get(num+1) ?? [];
            arr.push(lst.length);
            hm.set(num+1, arr);
            lst.push([num]);
        }
    }
    console.log(lst, hm)
    return hm.size === 0;
};
// @lc code=end

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)); // [[1,2,3],[2,3,4],[6,7,8]] = true
console.log(isNStraightHand([1,2,3,4,5], 4)); // [[1,2,3,4],[5]] = false
console.log(isNStraightHand([1,2,3], 1)); // [[1],[2],[3]] = true
console.log(isNStraightHand([3,3,3,3,5,6], 2)); // [[3], [3], [3], [3], [5,6]] = false
console.log(isNStraightHand([1,2,3,4,9,10,11],3)); // [1,2,3],[4],[9,10,11]] = false

// 1 1 2 2 2 3 4 
