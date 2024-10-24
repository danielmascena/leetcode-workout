/*
 * @lc app=leetcode id=1331 lang=typescript
 *
 * [1331] Rank Transform of an Array
 */

import { SimpleDict } from "src/model/models";

// @lc code=start
function arrayRankTransform(arr: number[]): number[] {
    let r = 1;
    const ranked = new Map(
        [...(new Set(arr))].sort((a,b) => a-b).map((n, i) => [n, i+1])
    );
    return arr.map(n => ranked.get(n)!);
};
// @lc code=end

export default arrayRankTransform;