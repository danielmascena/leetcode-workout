/*
 * @lc app=leetcode id=2593 lang=typescript
 *
 * [2593] Find Score of an Array After Marking All Elements
 */

import { MinPriorityQueue } from "@datastructures-js/priority-queue";
// @lc code=start
function findScore(nums: number[]): number {
  const { max, min } = Math;
  const { length: len } = nums;
  /*
  const { MAX_SAFE_INTEGER } = Number;
  const noPickup = new Set<number>();
  let ans = 0;

  while (noPickup.size < len) {
    let x = MAX_SAFE_INTEGER;
    let p: number | undefined;

    for (let i = len - 1; i >= 0; i--) {
      const n = nums[i];

      if (!noPickup.has(i) && n <= x) {
        x = n;
        p = i;
      }
    }
    ans += x;
    const j = p as number;
    noPickup
      .add(j)
      .add(max(j - 1, 0))
      .add(min(len - 1, j + 1));
  }
  return ans;
*/
  const pqueue = new MinPriorityQueue<[number, number]>({
    compare: (a, b) => {
      const [av, ai] = a;
      const [bv, bi] = b;

      if (av === bv) {
        return ai - bi;
      }
      return av - bv;
    },
  });
  nums.forEach((n, i) => pqueue.enqueue([n, i]));
  const blockedIdx = new Set<number>();
  let ans = 0;

  while (blockedIdx.size < len) {
    const [v, i] = pqueue.dequeue();

    if (!blockedIdx.has(i)) {
      ans += v;
      blockedIdx
        .add(i)
        .add(min(i + 1, len - 1))
        .add(max(i - 1, 0));
    }
  }
  return ans;
}
// @lc code=end

export default findScore;
