/*
 * @lc app=leetcode id=1074 lang=typescript
 *
 * [1074] Number of Submatrices That Sum to Target
 */

// @lc code=start
function numSubmatrixSumTarget(matrix: number[][], target: number): number {
    const vst: Set<string> = new Set();
    const m = matrix.length;
    const n = matrix[0].length;
    var z = 0, j = 1;
    const grid: number[][] = matrix.map(r => r.map(_ => z+=1));
    var validSubmatrix = 0;
    const dp = function (y: number, x: number, t: number, v: number[]) {
        v[grid[y][x]]=1;
        const kCoord = v + '';

        if (vst.has(kCoord)) {
            return;
        }
        t += matrix[y][x];
        vst.add(kCoord);

        if (t === target) {
            validSubmatrix += 1;
        } else if (t > target) {
            return;
        }
        while (y+j < m) {
            dp(y+j,x,t,[...v])
            j++
        }
        j=1;
        while (y-j >= 0) {
            dp(y-j,x,t,[...v])
            j++
        }
        j=1;
        if (x+j < n) {
            dp(y,x+j,t,[...v])
            j++;
        }
        j=1;
        if (x-j >= 0) {
            dp(y,x-j,t,[...v])
            j++;
        }
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp(i, j, 0, [])
        }
    }
    return validSubmatrix;
};

//console.log(numSubmatrixSumTarget([[0,1,0],[1,1,1],[0,1,0]], 0))
//console.log(numSubmatrixSumTarget([[1,-1],[-1,1]],0))
//console.log(numSubmatrixSumTarget([[904]],0))
//console.log(numSubmatrixSumTarget([[0,0,0,1,1],[1,1,1,0,1],[1,1,1,1,0],[0,0,0,1,0],[0,0,0,1,1]],0))
// @lc code=end

