/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
    var n = 1;
    const pos = new Array(10e4);
    score.forEach((n, i) => {
        pos[n-1] = i;
    });
    return pos.reduceRight<string[]>((a, i) => {
        let rank = "";
        
        if (n === 1) {
            rank = "Gold Medal";
        } else if (n === 2) {
            rank = "Silver Medal";
        } else if (n === 3) {
            rank = "Bronze Medal";
        } else {
            rank += n;
        }
        a[i] = rank;
        n++;
        return a;
    }, []).filter(Boolean);
};
// @lc code=end
// console.log(findRelativeRanks([5,4,3,2,1]))
//console.log(findRelativeRanks([123123,11921,1,0,123]));