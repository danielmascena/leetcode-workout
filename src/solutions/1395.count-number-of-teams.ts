/*
 * @lc app=leetcode id=1395 lang=typescript
 *
 * [1395] Count Number of Teams
 */

// @lc code=start
function numTeams(rating: number[]): number {
    const len = rating.length;
    var counter = new Set<string>();
    const [fst] = rating;
    const subset = (idx: number, prv: number, asc: boolean, lst: number[]) => {
        if (lst.length === 3) {
            counter.add(String(lst));
            return;
        }
        if (idx === len) return;

        const cur = rating[idx++];
        
        if (asc && prv < cur) {
            subset(idx, cur, asc, [...lst, cur])
        } else if (!asc && prv > cur) {
            subset(idx, cur, asc, [...lst, cur])
        }
        subset(idx, prv, asc, [...lst])
        subset(idx, cur, asc, [cur]);
    };
    subset(1, fst, true, [fst]);
    subset(1, fst, false, [fst]);
    return counter.size;
}
// @lc code=end

console.log(numTeams([2, 5, 3, 4, 1]));
/*
2,3,4
5,4,1
5,3,1
*/
console.log(numTeams([2, 1, 3]));
/*
[]
*/
console.log(numTeams([1, 2, 3, 4]));
/*
1,2,3
1,3,4
2,3,4
1,2,4
*/
console.log(numTeams([4, 3, 2, 1]));
/*
4,3,2
4,3,1
4,2,1
3,2,1
*/
console.log(numTeams([3, 6, 7, 5, 1]));
/*
3,6,7
6,5,1
7,5,1
*/
console.log(
  numTeams([
    89, 61, 13, 36, 37, 39, 97, 76, 84, 18, 12, 24, 71, 33, 44, 85, 70, 82, 15,
    74, 35, 66, 59, 8, 3, 96, 30, 16, 41, 7, 10, 68, 92, 83, 95, 77, 9, 14, 81,
    88, 38,
  ])
); // 3514