/*
 * @lc app=leetcode id=1942 lang=typescript
 *
 * [1942] The Number of the Smallest Unoccupied Chair
 */

// @lc code=start
//          ^?
import { MinPriorityQueue } from "@datastructures-js/priority-queue";

interface EndTime {
    end: number;
    chair: number;
}

function smallestChair(times: number[][], targetFriend: number): number {
    const endingTime = new MinPriorityQueue<{end: number; chair: number}>({
        priority: (endTime: EndTime) => endTime.end
    });
    const chairs = new MinPriorityQueue<number>();
    const sortedTimeInterval = times.map((t, i) => [t[0], t[1], i]).sort(([a], [b]) => a - b);

    for (let n = 0, len = times.length; n < len; n++) {
        chairs.enqueue(n);
    }
    while (sortedTimeInterval.length) {
        const [b, e, i] = sortedTimeInterval.shift()!;

        while (!endingTime.isEmpty() && endingTime.front().element.end <= b) {
            const { element: {chair} } = endingTime.dequeue();
            chairs.enqueue(chair);
        }
        const { element: nextChair } = chairs.dequeue();

        if (i === targetFriend) {
            return nextChair;
        }
        endingTime.enqueue({end: e, chair: nextChair});
    }
    return 0;
};
// @lc code=end

export default smallestChair;