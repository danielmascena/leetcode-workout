/*
 * @lc app=leetcode id=1316 lang=typescript
 *
 * [1316] Distinct Echo Substrings
 */

// @lc code=start
function distinctEchoSubstrings(text: string): number {
    const h = text.length >> 1;
    const u = new Set<string>();
    var q = 0;

    for (let i = 0; i < h; i++) {

        for (let j = i, c = ''; j < h + c.length; j++) {
            c += text.charAt(j);
            console.log(c)

            if (c === text.slice(j + 1, j + 1 + c.length)) {
                u.add(c);
            }
        }
    }
    return u.size;
};
// @lc code=end

