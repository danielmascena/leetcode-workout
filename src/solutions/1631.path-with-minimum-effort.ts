/*
 * @lc app=leetcode id=1631 lang=typescript
 *
 * [1631] Path With Minimum Effort
 */

// @lc code=start
function minimumEffortPath(heights: number[][]): number {
    const { abs, max, min } = Math;
    const n = heights.length;
    const m = heights[0].length;
    let mep = 1e6+1;

    function dfs (y: number, x: number, v: Set<string>, p: number, b: number): void {
        const key = `${y}-${x}`;

        if (y < 0 || x < 0 || y === n || x === m || v.has(key)) {
            return;
        }
        const val = heights[y][x];
        const nval = max(abs(val-p), b);
        v.add(key);

        if (y === n - 1 && x === m - 1) {
            mep = min(mep, nval);
            return;
        }
        dfs(y,x+1,new Set(v),val, nval);
        dfs(y,x-1,new Set(v),val, nval);
        dfs(y+1,x,new Set(v),val, nval);
        dfs(y-1,x,new Set(v),val, nval);
    }
    dfs(0,0,new Set(),heights[0][0],0);
    return mep;
};
// @lc code=end

