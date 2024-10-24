/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    let tgt = '';
    let count = 1;
    let [prev] = s2;
    let left = 0;
    let right = 0;
    const len2 = s2.length;
    const s1m = new Map<string, number>();
    const s2m = new Map<string, number>();

    for (const c of s1) {
        s1m.set(c, (s1m.get(c) ?? 0) + 1);
    }
    for (let i = 1; i <= len2; i++) {
        const curr = s2.charAt(i);

        if (curr !== prev) {
            tgt += `${prev}${count}`;
            prev = curr;
            count = 1;
        } else {
            count++;
        }
    }
    const ks1 = s1m.size;
    const checkVFn = () => {
        let matches = 0;

        for (const [k, q] of s1m) {
            const q2 = s2m.get(k);

            if (q2 === q) {
                matches++;
            } else if (q2! > q) {
                matches = -1;
                break;
            }
        }
        if (matches === ks1) {
            return 1;
        } else if (matches < 0) {
            return -1; 
        }
        return 0;
    };
    while (left < len2) {

        while (right < len2 && s2m.size <= ks1) {
            const c2 = s2.charAt(right++);
            const q2 = (s2m.get(c2) ?? 0) + 1;
            s2m.set(c2, q2);

            if (s1m.has(c2) && q2 > s1m.get(c2)!) {
                break;
            }
            if (s2m.size === ks1) {
                const v = checkVFn();
                if (v == 1) return true;
                else if (v == -1) break;
            }
        }
        const k2 = s2.charAt(left++);
        const q2 = s2m.get(k2) as number - 1;

        if (!q2) {
            s2m.delete(k2);
        } else {
            s2m.set(k2, q2);
        }
        if (s2m.size == ks1 && checkVFn() == 1) {
            return true;
        }
    }
    return false;
};
// @lc code=end

export default checkInclusion;