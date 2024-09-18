/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function partition(s: string): string[][] {
    const len = s.length;
    const list = new Array<Array<string>>(len);
    const res = new Array<Array<string>>();
    const isPal = (ss: string) => {
        let rs = '';

        for (const c of ss) {
            rs = c + rs;
        }
        return rs === ss;
    };
    const dp = (idx: number, ss: string) => {
        if (idx === len) {
            const arr = ss.split(',').filter(Boolean);

            if (arr.every(isPal)) {
                res.push(arr);
            }
            return;
        }
        list[idx].forEach(sfq => {
            dp(idx+sfq.length, `${ss},${sfq}`);
        });
    }
    let lp = '';

    for (let i = s.length - 1; i >= 0; i--) {
        const c = s.charAt(i);
        let ss = c;
        list[i] = new Array<string>();

        for (let j = 0, l = lp.length; j < l; j++) {
            list[i].push(ss += lp.charAt(j));
        }
        list[i].unshift(c);
        lp = ss;
    }
    dp(0, '');
    return res;
};
// @lc code=end
/*
console.log(partition("ab")) // [["a","b"]]...
console.log(partition("bb")) // [["b","b"],["bb"]]...
console.log(partition("abbab")) // [["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]...
console.log(partition("aab")) // [["a","a","b"],["aa","b"]]
console.log(partition("a")) // [["a"]]
console.log(partition("cbbbcc")); // [["c","b","b","b","c","c"],["c","b","b","b","cc"],["c","b","bb","c","c"],["c","b","bb","cc"],["c","bb","b","c","c"],["c","bb","b","cc"],["c","bbb","c","c"],["c","bbb","cc"],["cbbbc","c"]]...
*/