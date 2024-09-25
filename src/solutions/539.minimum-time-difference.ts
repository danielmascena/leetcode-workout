/*
 * @lc app=leetcode id=539 lang=typescript
 *
 * [539] Minimum Time Difference
 */

// @lc code=start
function findMinDifference(timePoints: string[]): number {
    const { min } = Math;
    const difs = timePoints.map(([a,b,,c,d]) => {
        const h = +(a+b);
        const m = +(c+d);
        const t = (h * 60) + m;
        return (t < 1440 ? t : 0);
    }).sort((a,b) => a - b);
    let mtd = (1440 - difs.at(-1)!) + difs[0];

    for (let i = 1, len = difs.length; i < len; i++) {
        mtd = min(mtd, difs[i] - difs[i-1]);
    }
    return mtd;
};
// @lc code=end
export default findMinDifference;