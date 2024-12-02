/*
 * @lc app=leetcode id=1957 lang=typescript
 *
 * [1957] Delete Characters to Make Fancy String
 */

import { off } from "node:process";

// @lc code=start
function makeFancyString(s: string): string {
  let ttl = 1;
  let [cur] = s;
  let fys = cur;

  for (let i = 1, len = s.length; i < len; i++) {
    const c = s.charAt(i);

    if (c === cur) {
      ttl++;
    } else {
      ttl = 1;
    }
    if (ttl <= 2) {
      fys += c;
    }
    cur = c;
  }
  return fys;
}
// @lc code=end

export default makeFancyString;
