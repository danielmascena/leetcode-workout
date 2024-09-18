/*
 * @lc app=leetcode id=1380 lang=typescript
 *
 * [1380] Lucky Numbers in a Matrix
 */

// @lc code=start
function luckyNumbers (matrix: number[][]): number[] {
    const m = matrix.length;
    const n = matrix[0].length;
    const colArr = Array(n).fill(0)
    const miMap = new Map<number, number>();

    for (let i = 0; i < m; i++) {
        const row = matrix[i]
        let minIdx=0
        let [minVal]=row

        for (let j = 0; j<n; j++) {
            const c = row[j];

            if (c < minVal) {
                minIdx = j
                minVal = c
            }
            if (c > colArr[j]) {
                colArr[j] = c
            }
        }
        miMap.set(minVal, minIdx)
    }
    return colArr.filter((n, i) => miMap.get(n) === i)
};
// @lc code=end
/*
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))
console.log(luckyNumbers([[7,8],[1,2]]))
*/