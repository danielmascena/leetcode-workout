/*
 * @lc app=leetcode id=2406 lang=typescript
 *
 * [2406] Divide Intervals Into Minimum Number of Groups
 */
// @lc code=start
function minGroups(intervals: number[][]): number {
    const { max, min } = Math;
    const groups = new Set<[number, number]>();
    intervals.sort(([a], [b]) => a - b);
    
    for (const i1 of intervals) {
        const [b1, e1] = i1;
        let hasFound = false;

        for (const i2 of groups) {
            const [b2, e2] = i2;

            if (e1 < b2 || b1 > e2) {
                hasFound = true;
                groups.delete(i2);
                groups.add([min(b1, b2), max(e1, e2)]);
                break;
            }
        }
        if (!hasFound) {
            groups.add(i1 as [number, number]);
        }
    }
    return groups.size;
};
// @lc code=end

export default minGroups;