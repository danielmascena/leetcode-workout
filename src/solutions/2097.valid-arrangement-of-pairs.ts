/*
 * @lc app=leetcode id=2097 lang=typescript
 *
 * [2097] Valid Arrangement of Pairs
 */

// @lc code=start
type Tuple = [number, number] & { next?: Tuple };
function validArrangement(pairs: number[][]): number[][] {
  const lfst = new Map<number, Tuple[]>();
  const lend = new Map<number, Tuple[]>();
  const allStr = new Set<number>();
  let bgn: Tuple | undefined;

  for (const tp of pairs) {
    const [st, ed] = tp;

    if (lend.has(st)) {
      const t = lend.get(st)!;
      const x = t?.shift();
      x!.next = tp as Tuple;
      bgn ||= tp as Tuple;

      if (t.length === 0) {
        lend.delete(st);
      }
    }
    if (lfst.has(ed)) {
      const t = lfst.get(ed);
      const x = t?.shift();
      (tp as Tuple).next = x;

      if (t?.length === 0) {
        lfst.delete(ed);
      }
    }
    const v = lend.get(ed) ?? [];
    const z = lfst.get(st) ?? [];
    v.push(tp as Tuple);
    z.push(tp as Tuple);
    lend.set(ed, v);
    lfst.set(st, z);
  }
  //console.log(lfst, lend);

  const len = pairs.length;
  const ans = new Array<number[]>(len);

  for (let i = 0; i < len && bgn; i++) {
    const [a, b] = bgn;
    ans[i] = [a, b];
    bgn = bgn?.next;
  }
  return ans;
}
// @lc code=end

export default validArrangement;
