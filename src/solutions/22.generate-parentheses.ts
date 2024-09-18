/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let res = new Set(['()']);
    const PAR = '()';

    for (let i = 2; i <= n; i++) {
        const pars = new Set<string>();
        res.forEach(gend => {
            for (let j = 0, len = gend.length; j < len; j++) {
                pars.add(gend.slice(0, j) + PAR + gend.slice(j));
            }
            pars.add(gend + PAR);
        });
        res = pars;
    }
    return [...res];
};
// @lc code=end

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
console.log(generateParenthesis(5))
console.log(generateParenthesis(4))
console.log(generateParenthesis(2))