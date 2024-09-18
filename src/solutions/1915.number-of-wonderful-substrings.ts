/*
 * @lc app=leetcode id=1915 lang=typescript
 *
 * [1915] Number of Wonderful Substrings
 */

// @lc code=start
function wonderfulSubstrings(word: string): number {
    const len = word.length;
    var count = len;
    const lmap = new Map<string, number>();
    var odd = 0;
    var even = 0;
    var l = 0;
    var r = 0;

    while (l <= r) {
        while (r < len) {
            const c = word.charAt(r++);
            const q = (lmap.get(c) ?? 0) + 1;
            lmap.set(c, q);
/*
            if (q % 2 === 1) {
                odd += 1;
                
                if (even > 0)
                    even -= 1;
            } else {
                even += 1;

                if (odd > 0)
                    odd -= 1;
            }
            if (odd <= 1 && r - l > 1) {
                count += 1;
            }
            */
           if ([...lmap.values()].filter(q => q % 2).length <= 1) {
            count += 1;
           } else {
            break;
           }
        }
        while (l <= r) {
            const c = word.charAt(l++);
            const q = lmap.get(c)! - 1;

            if (q)
                lmap.set(c, q);
            else
                lmap.delete(c);

            /*
            if (q % 2 === 1) {
                odd -= 1;
            } else {
                even -= 1;
            }
            if (odd <= 1 && r - l > 1) {
                count += 1;
            } else if (odd > 1 && r + 1 < len) {
                break;
            }
            */
           if ([...lmap.values()].filter(q => q % 2).length <= 1) {
            count++;
           } else if (r + 1 < len) {
            break;
           }
        }
    }
    return count;
};
// @lc code=end

console.log(wonderfulSubstrings("ehaehcjjaafjdceac"));
console.log(wonderfulSubstrings("aba"));
console.log(wonderfulSubstrings("aabb"));
console.log(wonderfulSubstrings("he"));