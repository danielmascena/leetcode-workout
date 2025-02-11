/*
 * @lc app=leetcode id=1910 lang=typescript
 *
 * [1910] Remove All Occurrences of a Substring
 */

// @lc code=start
function removeOccurrences(s: string, part: string): string {
  const len = part.length;
  const stack = [] as string[];

  for (const c of s) {
    stack.push(c);

    if (stack.length >= len) {
      if (stack.slice(-len).join("") === part) {
        for (let i = len; i; i--) {
          stack.pop();
        }
      }
    }
  }
  return stack.join("");
}
// @lc code=end

export default removeOccurrences;
/**
 * Accepted
80/80 cases passed (34 ms)
Your runtime beats 8.33 % of typescript submissions
Your memory usage beats 12.5 % of typescript submissions (56.2 MB)
 */
