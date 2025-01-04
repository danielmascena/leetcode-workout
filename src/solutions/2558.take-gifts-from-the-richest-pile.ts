/*
 * @lc app=leetcode id=2558 lang=typescript
 *
 * [2558] Take Gifts From the Richest Pile
 */

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
// @lc code=start
function pickGifts(gifts: number[], k: number): number {
  /*
  const { sqrt, floor } = Math;
  const maxQueue = new MaxPriorityQueue<number>({
    compare: (a: number, b: number) => b - a,
  });
  gifts.forEach((g) => maxQueue.enqueue(g));
  console.log(maxQueue);
  while (k--) {
    const p = maxQueue.dequeue();
    const lb = floor(sqrt(p));
    maxQueue.enqueue(lb);
  }
  const arr = maxQueue.toArray();
  return arr.reduce((acc, cur) => acc + cur, 0);
*/
  const { length } = gifts;
  const { floor, sqrt } = Math;

  while (k--) {
    let x = 0;
    let [v] = gifts;

    for (let i = 1; i < length; i++) {
      if (gifts[i] > v) {
        v = gifts[i];
        x = i;
      }
    }
    const lo = floor(sqrt(v));
    gifts[x] = lo;
  }
  return gifts.reduce((acc, cur) => acc + cur, 0);
}
// @lc code=end

export default pickGifts;
