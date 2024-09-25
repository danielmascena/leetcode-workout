/*
 * @lc app=leetcode id=1684 lang=typescript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
    const all = new Set(allowed);
    return words.filter(word => [... (new Set(word))].every(c => all.has(c))).length;
};
// @lc code=end

export default countConsistentStrings;