/*
 * @lc app=leetcode id=1497 lang=typescript
 *
 * [1497] Check If Array Pairs Are Divisible by k
 */

// @lc code=start
function canArrange(arr: number[], k: number): boolean {
    const len = arr.length;
    let isValid = false;
    const dp = (tgt: number, lst: number[], count: number): void => {
        if (count == len || isValid) {
            return;
        }
        lst.forEach((n, i) => {
            if ((n+tgt) % k == 0) {
                const cp = [...lst.slice(0,i), ...lst.slice(i+1)];
                if (cp.length)
                    cp.forEach((v, j) => dp(v, [...cp.slice(0, j), ...cp.slice(j+1)], count+2));
                else isValid = true;
            }
        })
    };
    for (let i = 0; i < len; i++) {
        dp(arr[i], [...arr.slice(0, i), ...arr.slice(i+1)], 0);
    }
    return isValid;
};
// @lc code=end

export default canArrange;