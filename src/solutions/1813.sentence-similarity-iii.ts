/*
 * @lc app=leetcode id=1813 lang=typescript
 *
 * [1813] Sentence Similarity III
 */

// @lc code=start
function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    const [sm, bg] = sentence1.length < sentence2.length ? [sentence1, sentence2] : [sentence2, sentence1];
    let head = '';

    if (bg.endsWith(` ${sm}`) || bg.startsWith(`${sm} `) || bg === sm) return true;

    for (let i = 0, lens = sm.length; i <= lens; i++) {
        const curr = sm.charAt(i);
        const tail = sm.substring(i);

        if (curr === ' ' && bg.startsWith(head + ' ') && bg.endsWith(tail)) {
            return true;
        }
        head += curr;
    }
    return false;
};
// @lc code=end

export default areSentencesSimilar;