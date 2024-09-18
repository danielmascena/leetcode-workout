/*
 * @lc app=leetcode id=1598 lang=typescript
 *
 * [1598] Crawler Log Folder
 */

// @lc code=start
function minOperations(logs: string[]): number {
    let steps = 0;
    const stack = new Array<string>();
    logs.forEach(dir => {
        switch (dir) {
            case '../':
                stack.pop();
                break;
            case './':
                break;
            default:
                stack.push(dir);
        }
    });
    return stack.length;
};
// @lc code=end
/*
console.log(minOperations(["d1/","d2/","../","d21/","./"])) // 2
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"])) // 3
console.log(minOperations(["d1/","../","../","../"])) // 0
console.log(minOperations(["./","ho3/","tl8/"])) // 2
*/