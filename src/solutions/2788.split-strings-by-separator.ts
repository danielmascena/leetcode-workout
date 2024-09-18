/*
 * @lc app=leetcode id=2788 lang=typescript
 *
 * [2788] Split Strings by Separator
 */

// @lc code=start
function splitWordsBySeparator(words: string[], separator: string): string[] {
    return words.flatMap(w => w.split(separator)).filter(Boolean);
};
// @lc code=end

