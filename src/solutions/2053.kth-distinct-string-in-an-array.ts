/*
 * @lc app=leetcode id=2053 lang=typescript
 *
 * [2053] Kth Distinct String in an Array
 */

// @lc code=start
function kthDistinct(arr: string[], k: number): string {
    const strs = new Set<string>();
    const seen = new Set<string>();
    arr.forEach(s => {
        if (strs.has(s)) {
            seen.add(s);
        }
        strs.add(s);
    });
    const it = strs.values();
    //    ^?
    for (let ck = k, { done, value} = it.next(); !done; {done, value} = it.next()) {

        if (seen.has(value!)) {
            continue;
        }
        ck--;

        if (!ck) {
            return value!;
        }
    }
    return "";
};
// @lc code=end

console.log(kthDistinct(["d","b","c","b","c","a"],2))
console.log(kthDistinct(["aaa","aa","a"],1))
console.log(kthDistinct(['a','b','a'], 3))
