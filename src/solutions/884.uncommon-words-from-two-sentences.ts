/*
 * @lc app=leetcode id=884 lang=typescript
 *
 * [884] Uncommon Words from Two Sentences
 */

// @lc code=start
function uncommonFromSentences(s1: string, s2: string): string[] {
    const ms1 = new Map<string, number>();
    const ms2 = new Map<string, number>();
    const st1 = s1.split(' ');
    const st2 = s2.split(' ');

    for (const w of st1) {
        const q = (ms1.get(w) ?? 0) + 1;
        ms1.set(w, q);
    }
    for (const w of st2) {
        const q = (ms2.get(w) ?? 0) + 1;
        ms2.set(w, q);
    }
    for (const [w, q] of ms1) {
        if (ms2.has(w)) {
            ms1.delete(w);
            ms2.delete(w);
        }
        if (q > 1) {
            ms1.delete(w);
        }
    }
    for (const [w, q] of ms2) {
        if (q > 1) ms2.delete(w);
    }
    return [...ms1.keys(), ...ms2.keys()];
};
// @lc code=end

export default uncommonFromSentences;