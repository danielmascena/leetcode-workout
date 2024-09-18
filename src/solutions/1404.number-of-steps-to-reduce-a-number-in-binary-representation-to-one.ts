/*
 * @lc app=leetcode id=1404 lang=typescript
 *
 * [1404] Number of Steps to Reduce a Number in Binary Representation to One
 */

// @lc code=start
function numSteps(s: string): number {
    var steps = 0;
    const num = Array.from(s, Number);

    while (parseInt(num.join(''), 2) > 1) {
        if (num.at(-1) === 1) {
            let co = 1;

            for (let i = num.length - 1; co === 1 && i >= 0; i--) {
                const n = num[i];
                num[i] ^= co;
                co = n;
            }
            if (co) {
                num.unshift(1);
            }
        } else {
            num.pop();
        }
        steps++;
    }
    return steps;
};
// @lc code=end
/*
console.log(numSteps("1101"))
console.log(numSteps("10"))
console.log(numSteps("1"))
console.log(numSteps("1111011110000011100000110001011011110010111001010111110001"))
*/