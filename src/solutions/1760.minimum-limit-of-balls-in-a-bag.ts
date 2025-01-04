/*
 * @lc app=leetcode id=1760 lang=typescript
 *
 * [1760] Minimum Limit of Balls in a Bag
 */

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// @lc code=start
function minimumSize(nums: number[], maxOperations: number): number {
  const xpQueue = new MaxPriorityQueue<number>();
  const { floor } = Math;
  nums.forEach((n) => xpQueue.enqueue(n));

  while (maxOperations !== 0) {}
  return xpQueue.front().element;
}
// @lc code=end

export default minimumSize;
