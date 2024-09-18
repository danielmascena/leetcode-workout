/*
 * @lc app=leetcode id=1137 lang=typescript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
function tribonacci(n: number): number {
    const memo = new Map<number, number>();
    const dp = (num: number): number => {
        if (memo.has(num)) {
            return memo.get(num) as number;
        }
        if (num <= 1) {
            return Math.max(0, num);
        }
        const [p1,p2,p3] = [num-1,num-2,num-3];
        const a = memo.get(p3) ?? dp(p3);
        memo.set(p3, a);
        const b = memo.get(p2) ?? dp(p2);
        memo.set(p2, b);
        const c = memo.get(p1) ?? dp(p1);
        memo.set(p1, c);
        const t = a + b + c;
        memo.set(num, t);
        return t;
    };
    return dp(n);
};
// @lc code=end

