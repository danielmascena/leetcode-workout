/*
 * @lc app=leetcode id=179 lang=typescript
 *
 * [179] Largest Number
 */

// @lc code=start
function largestNumber(nums: number[]): string {
    return nums.map(String).sort((a, b) => {
        const la = a.length;
        const lb = b.length;
        const mx = Math.max(la, lb);

        if (la !== lb && a.padEnd(mx, '0') === b.padEnd(mx, '0')) {
            return lb < la ? 1 : -1;
        } else if (la !== lb && (b.startsWith(a) || a.startsWith(b))) {
            const [l, g] = la < lb ? [a,b] : [b,a];
            var i = l.length-1;
            var j = g.length-1;
            var sl = l[i];
            var sg = g[j];

            while (sl < sg && i >= 0) {
                sl = l[--i] + sl;
                sg = g[--j] + sg;
            }
            return sl > sg ? -1 : 1;
        }
        return b > a ? 1 : -1;
    }).join("");
};
// @lc code=end

export default largestNumber;