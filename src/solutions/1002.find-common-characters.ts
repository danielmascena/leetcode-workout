/*
 * @lc app=leetcode id=1002 lang=typescript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
function commonChars(words: string[]): string[] {
    const res: number[] = Array.from(words[0]).reduce<number[]>((arr, chr) => {
        const pos: number = chr.codePointAt(0) as number - 97;
        arr[pos]++;
        return arr;
    }, new Array(26).fill(0));
    const { min } = Math;

    for (let i = 1, len = words.length; i < len; i++) {
        const lst = new Array<number>(26).fill(0);
        const word = words[i];

        for (const c of word) {
            const pos = c.charCodeAt(0) as number - 97;
            lst[pos]++;
        }
        lst.forEach((q, j) => res[j] = min(res[j], q));
    }
    return res.reduce<string[]>((lts, qnt, idx) => {
        const chr = String.fromCodePoint(idx + 97);
        lts.push(...Array.from(chr.repeat(qnt)));
        return lts;
    }, new Array());
};
// @lc code=end

console.log(commonChars(["bella", "label", "roller"])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o]
console.log(commonChars(['aaaa', 'aab', 'aaaaab'])); // ['a', 'a']
console.log(commonChars(['hello', 'world'])); // ['l', 'o']
console.log(commonChars(['the', 'wheels', 'on', 'the', 'bus'])); // []
