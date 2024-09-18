/*
 * @lc app=leetcode id=2295 lang=typescript
 *
 * [2295] Replace Elements in an Array
 */

// @lc code=start
//   ^?
function arrayChange(nums: number[], operations: [number,number][]): number[] {
    const opm = new Map(operations.values());
    const used = new Set();
    let trk = new Map<number, number>(
        nums.flatMap((n, i) => opm.has(n) ? [[n, i]] : []) as [number, number][]
    );
    while (trk.size) {
        const tmp = new Map<number,number>();

        trk.forEach((i, n) => {
            const v = opm.get(n)!;
            nums[i] = v;
            used.add(n);

            if (!used.has(v) && opm.has(v)) {
                tmp.set(v, i);
            }
        });
        trk = tmp;
    }
    return nums;
}
// @lc code=end

