/*
 * @lc app=leetcode id=1910 lang=typescript
 *
 * [1910] Remove All Occurrences of a Substring
 */

// @lc code=start
function removeOccurrences(s: string, part: string): string {
  const size = part.length;
  const stack = new Array<string>();
  const point = new Array<number>();

  for (let i = 0, j = 0, len = s.length; i < len; i++) {
    const c = s.charAt(i);
    const k = part.charAt(j);

    console.log(stack, point);
    if (c !== k) {
      j = 0;
    }
    if (c === part.charAt(j)) {
      const weight = (point.at(-1) ?? 0) + 1;
      if (weight === size) {
        while (--j) {
          stack.pop();
          point.pop();
        }
        j = point.at(-1) ?? 0;
      } else {
        stack.push(c);
        point.push(weight);
        j++;
      }
    } else {
      stack.push(c);
      point.push(0);
      j = 0;
    }
  }
}
// @lc code=end

export default removeOccurrences;
