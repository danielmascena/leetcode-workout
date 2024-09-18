/*
 * @lc app=leetcode id=1219 lang=typescript
 *
 * [1219] Path with Maximum Gold
 */

// @lc code=start
function getMaximumGold(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    if (new Set(grid.flat()).size === 1) {
        return grid[0][0] * (m * n);
    }
    const { max } = Math;
    var mVal = 0;
    const dp = (y: number, x: number, vst = new Set<string>): number => {
        const k = `${y}-${x}`;

        if (y < 0 || y === m || x < 0 || x === n || grid[y][x] === 0 || vst.has(k)) {
            vst.add(k);
            return 0;
        }
        const val = grid[y][x];
        vst.add(k);
        const ru = val + dp(y-1,x,new Set(vst));
        const rl = val + dp(y,x+1,new Set(vst));
        const rb = val + dp(y+1,x,new Set(vst));
        const rr = val + dp(y,x-1,new Set(vst));
        const mval = max(ru,rl,rb,rr);
        return mval;
    };
    grid.forEach((r,i) => r.forEach((c, j) => {
        if (c) {
            mVal = max(mVal, dp(i, j));
        }
    }));
    return mVal;
};
// @lc code=end
    