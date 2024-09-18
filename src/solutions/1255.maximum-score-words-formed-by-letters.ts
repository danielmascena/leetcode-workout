/*
 * @lc app=leetcode id=1255 lang=typescript
 *
 * [1255] Maximum Score Words Formed by Letters
 */

// @lc code=start
function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    let msw = 0;
    const len = words.length;
    const ltrMap = new Map<string, number>();
    const getPos = (l: string) => l.codePointAt(0)! - 97;
    const mWords: number[] = new Array(len);
    const validate = (s: string, m2: Map<string, number>) => {
        const m3 = new Map([...m2]);

        for (const c of s) {
            const q = m3.get(c) ?? 0;
            if (q <= 0) {
                return m2;
            }
            m3.set(c, q - 1);
        }
        return m3;
    };
    const dp = (i: number, t: number, m: Map<string, number>, v: Set<number>) => {
        const tr = mWords[i];
        const nm = validate(words[i], m);

        if (nm !== m) {
            t += tr;
            m = nm;
        }
        v.add(i);
        msw = Math.max(msw, t);
//        console.log(words[i], m, t) 

        for (let j = 0; j < len; j++) {
            if (v.has(j)) continue;

            dp(j, t, new Map(m), new Set(v));
        }
    }
    letters.forEach(l => ltrMap.set(l, (ltrMap.get(l) ?? 0) + 1));
    words.forEach((word, idx) => {
        const cpLM = new Map();
        let ttl = 0;

        for (const l of word) {
            ttl += score[getPos(l)];
            cpLM.set(l, (cpLM.get(l) ?? 0) + 1);
        }
        mWords[idx] = ttl;
    });
    for (let i = 0; i < len; i++) {
        dp(i, 0, new Map(ltrMap), new Set());
    }
    return msw;
};
// @lc code=end
/*
console.log(maxScoreWords(["dog","cat","dad","good"],
    ["a","a","c","d","d","d","g","o","o"], 
    [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]));
console.log(maxScoreWords(["xxxz","ax","bx","cx"], ["z","a","b","c","x","x","x"], [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]))
console.log(maxScoreWords(["leetcode"], ["l","e","t","c","o","d"], [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]))
*/