/*
 * @lc app=leetcode id=2109 lang=typescript
 *
 * [2109] Adding Spaces to a String
 */

// @lc code=start
function addSpaces(s: string, spaces: number[]): string {
  const SPACE = "\u0020";
  if (s.length === spaces.length) {
    return " " + s.split("").join(" ");
  }
  let spc = spaces.shift();
  let ans = "";

  for (let i = 0, len = s.length; i < len; i++) {
    if (i === spc) {
      ans += SPACE;
      spc = spaces.shift();
    }
    ans += s.charAt(i);
  }
  return ans;
}
// @lc code=end

export default addSpaces;
