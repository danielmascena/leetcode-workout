/*
 * @lc app=leetcode id=1636 lang=typescript
 *
 * [1636] Sort Array by Increasing Frequency
 */

// @lc code=start
function frequencySort(nums: number[]): number[] {
    const freq = new Map<number, number>();
    const group = new Map<number, number[]>();

    for (let n of nums) {
        freq.set(n, (freq.get(n) ?? 0) + 1);
    }
    freq.forEach((q,n) => {
        const a = group.get(n) ?? [];
        a.push(n);
        group.set(n, a);
    });
    const frqList = [...freq];
    const len = frqList.length;

    for (let i = 0; i<len-1; i++) {
        let p = i;

        for (let j = i+1; j<len; j++) {
            if (frqList[j][1] < frqList[p][1]) {
                p = j;
            }
        }
        [frqList[i], frqList[p]] = [frqList[p], frqList[i]];
    }
    let [[num, frq]] = frqList;
    let prev = [num];
    const garr: [[number[], number]] = [[prev, frq]]
    //    ^?

    for (let i = 1; i < len; i++) {
        const [nfrq, qfrq] = frqList[i]; 

        if (qfrq === frq) {
            prev.push(nfrq);
        } else {
            prev = [nfrq];
            frq = qfrq;
            garr.push([prev, frq])
        }
    }
    return garr.reduce<number[]>((ans, [arr, frq]) => {
        if (arr.length > 1) {
            for (let i = 0, len = arr.length; i < len - 1; i++) {
                let x = i;

                for (let j = i + 1; j < len; j++) {
                    if (arr[j] > arr[x]) {
                        x = j;
                    }
                }
                [arr[i], arr[x]] = [arr[x], arr[i]];
            }
        }
        return [...ans, ...arr.flatMap(num => Array(frq).fill(num))];
    }, []);
};
// @lc code=end
/*
console.log(frequencySort([1,1,2,2,2,3]))
console.log(frequencySort([2,3,1,3,2]))
*/