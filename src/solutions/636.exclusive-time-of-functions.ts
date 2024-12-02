/*
 * @lc app=leetcode id=636 lang=typescript
 *
 * [636] Exclusive Time of Functions
 */
import { MinPriorityQueue } from "@datastructures-js/priority-queue";
// @lc code=start
function exclusiveTime(n: number, logs: string[]): number[] {
  const callStack = new Array<[number, number]>();
  //const callTime = new MinPriorityQueue()
  const fns = Array(n).fill(0);
  const callStart = new Array<[number, number]>();
  const callEnd = new Array<[number, number]>();

  for (const g of logs) {
    const [id, act, tp] = g.split(":");
    if (act === "start") {
      callStart.push([+tp, +id]);
    } else {
      callEnd.push([+tp, +id]);
    }
  }
  callStart.sort(([a], [b]) => a - b);
  callEnd.sort(([a], [b]) => a - b);
  const len = callEnd.length;
  let i = 0;
  //console.log(callStart, " | ", callEnd);

  while (callEnd.length) {
    while (i < len && callStart[i][0] <= callEnd[0][0]) {
      callStack.push(callStart[i++]);
    }
    const [x, d] = callEnd.shift()!;
    const [y, v] = callStack.pop()!;
    const t = x + 1 - y;
    callStack.forEach((a) => (a[0] += t));
    fns[d] += t;
    //console.log("Start ", y, v, " end ", x, d, t);
  }
  return fns;
}
// @lc code=end

export default exclusiveTime;
