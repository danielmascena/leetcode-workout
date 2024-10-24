/*
 * @lc app=leetcode id=1963 lang=typescript
 *
 * [1963] Minimum Number of Swaps to Make the String Balanced
 */

// @lc code=start
function minSwaps(s: string): number {
    var count = 0;
    const stack = new Array<string>();

    for (const c of s) {
        if (stack.at(-1) == '[' && c == ']') {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    console.log(stack);
    return Math.ceil(stack.length / 4);
};
// @lc code=end

export default minSwaps;