/*
 * @lc app=leetcode id=1405 lang=typescript
 *
 * [1405] Longest Happy String
 */
import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
// @lc code=start
function longestDiverseString(a: number, b: number, c: number): string {
    type El = {
        len: number;
        let: string;
    };
    const mpq = new MaxPriorityQueue<El>({priority: el => el.len});
    let ans = '';
    let next: El | undefined;
    mpq.enqueue({len: a, let: 'a'});
    mpq.enqueue({len: b, let: 'b'});
    mpq.enqueue({len: c, let: 'c'});

    while (mpq.size() || next?.len) {
        const {element: el} = mpq.dequeue() ?? next;

        if (el?.len && el.let !== ans.at(-1)) {
            const size = el.len >= 2 ? 2 : 1;
            ans += el.let.repeat(size);
            el.len -= size;
            next = mpq.dequeue()?.element;

            if (el.len)
                mpq.enqueue(el);
        }
        if (next?.len) {
            const size = next.len >= 2 ? 2 : 1;
            ans += next.let.repeat(size);
            next.len -= size;

            if (next.len)
                mpq.enqueue(next);
        }
    }
    return ans;
};
// @lc code=end

export default longestDiverseString;