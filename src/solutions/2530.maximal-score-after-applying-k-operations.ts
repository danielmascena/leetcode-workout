/*
 * @lc app=leetcode id=2530 lang=typescript
 *
 * [2530] Maximal Score After Applying K Operations
 */

//import { MaxPriorityQueue } from "@datastructures-js/priority-queue";
// @lc code=start
function maxKelements(nums: number[], k: number): number {
  const { ceil } = Math;
  let count = 0;
  /*
  // solution 1 - using priority queue
    const mpq = new MaxPriorityQueue<number>();
    nums.forEach(num => mpq.enqueue(num));

    while (k) {
        const { element: num } = mpq.dequeue();
        const rst = ceil(num / 3);
        count += num;
        mpq.enqueue(rst);
        k--;
    }
    return count;
    */
  class LinkedList {
    constructor(private _val: number, private _next?: LinkedList) {}

    get val() {
      return this._val;
    }
    get next(): LinkedList | null {
      return this._next ?? null;
    }
    set next(newNext: LinkedList) {
      this._next = newNext;
    }
  }
  let first, prev: LinkedList | undefined;
  const head = new LinkedList(0);

  for (const n of nums.sort((a, b) => b - a)) {
    const node = new LinkedList(n);

    if (prev) {
      prev.next = node;
    }
    prev = node;
    first ||= node;
  }
  head.next = first as LinkedList;

  while (k && head.next) {
    const { val, next } = head.next;
    const num = val;
    const rst = ceil(num / 3);
    counter += num;
    head.next = next as LinkedList;
    const node = new LinkedList(rst);
    let tmp = head;

    while (tmp?.next && tmp.next.val > rst) {
      tmp = tmp.next;
    }
    node.next = tmp.next as LinkedList;
    tmp.next = node;
    k--;
  }
  return counter;
}
// @lc code=end

export default maxKelements;
