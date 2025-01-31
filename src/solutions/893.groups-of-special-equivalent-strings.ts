import { createHash } from "node:crypto";
/*
 * @lc app=leetcode id=893 lang=typescript
 *
 * [893] Groups of Special-Equivalent Strings
 */

// @lc code=start
function numSpecialEquivGroups(words: string[]): number {
  const k2w = new Map<string, string[]>();
  //const hashKey = (value: string) => createHash("sha256").update(value).digest("hex");
  words.forEach((w) => {
    const odds = Array(26).fill(0) as number[];
    const evens = Array(26).fill(0) as number[];

    for (let i = 0, len = w.length; i < len; i++) {
      (i % 2 ? odds : evens)[w.codePointAt(i)! - 97]++;
    }
    const k = /*hashKey(*/ String(odds) + String(evens); //)

    if (!k2w.has(k)) {
      k2w.set(k, []);
    }
    k2w.get(k)?.push(w);
  });
  return k2w.size;
}
// @lc code=end

export default numSpecialEquivGroups;
/**
 * Accepted
36/36 cases passed (14 ms)
Your runtime beats 40 % of typescript submissions
Your memory usage beats 60 % of typescript submissions (56.7 MB)
 */
