/*
 * @lc app=leetcode id=2486 lang=typescript
 *
 * [2486] Append Characters to String to Make Subsequence
 */

// @lc code=start
function appendCharacters(s: string, t: string): number {
   let p = 0;
   const lent = t.length;
   const lens = s.length;
   
   for (let i = 0; i < lens && p < lent; i++) {
    if (s.charAt(i) === t.charAt(p)) {
        p++;
    }
   }
   return lent - p;
};
// @lc code=end

console.log(appendCharacters('coaching', 'coding'))
console.log(appendCharacters('abcde', 'a'))
console.log(appendCharacters('z','abcde'))
