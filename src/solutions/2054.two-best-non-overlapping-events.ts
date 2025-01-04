/*
 * @lc app=leetcode id=2054 lang=typescript
 *
 * [2054] Two Best Non-Overlapping Events
 */

// @lc code=start
function maxTwoEvents(events: number[][]): number {
  const sortedEvents = events.sort(
    (a, b) => (b.at(-1) as number) - (a.at(-1) as number)
  );
  let [, , bestEv] = sortedEvents[0];
  console.log(sortedEvents);
  for (let i = 0, len = events.length; i < len - 1; i++) {
    const [st, et, v] = sortedEvents[i];
    const part = sortedEvents.find(([a, b]) => b < st || a > et);

    if (part) {
      const t = v + (part.at(-1) as number);

      if (t > bestEv) {
        bestEv = t;
      }
    }
  }
  return bestEv;
}
// @lc code=end

export default maxTwoEvents;
