/*
 * @lc app=leetcode id=2418 lang=typescript
 *
 * [2418] Sort the People
 */

// @lc code=start
function sortPeople(names: string[], heights: number[]): string[] {
    const len = names.length;
    const ans = new Array<string>(len);
    const comparator = (a: number, b: number) => b > a;

    for (let i = 0; i < len - 1; i++) {
        let x = i;
        for (let j = i+1; j<len;j++) {
            if (comparator(heights[x], heights[j])) {
                x=j;
            }
        }
        [heights[i],heights[x]]=[heights[x],heights[i]];
        [names[i],names[x]]=[names[x],names[i]];
    }
    return names;
};
// @lc code=end
/*
console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150]))
*/
