/*
 * @lc app=leetcode id=2337 lang=typescript
 *
 * [2337] Move Pieces to Obtain a String
 */

// @lc code=start
function canChange(start: string, target: string): boolean {
  const sls = new Array<number>();
  const srs = new Array<number>();
  const tls = new Array<number>();
  const trs = new Array<number>();
  const len = start.length;

  for (let i = 0; i < len; i++) {
    const cs = start[i];
    const ct = target[i];

    if (cs === "L") {
      sls.push(i);
    } else if (cs === "R") {
      srs.push(i);
    }
    if (ct === "L") {
      tls.push(i);
    } else if (ct === "R") {
      trs.push(i);
    }
  }
  const lentl = tls.length;
  const lensl = sls.length;
  const lentr = trs.length;
  const lensr = srs.length;
  let tl = 0;
  let sl = 0;
  let tr = 0;
  let sr = 0;

  if (lensl !== lentl || lentr !== lensr) {
    return false;
  }
  while (sl < lensl && tl < lentl) {
    const tvl = tls[tl];
    let svl = sls[sl];

    if (svl < tvl) {
      return false;
    }
    while (svl >= tvl) {
      if (start[svl] === "R") {
        return false;
      }
      svl--;
    }
    tl++;
    sl++;
  }
  while (tr < lentr && sr < lensr) {
    const tvr = trs[tr];
    let svr = srs[sr];

    if (tvr < svr) {
      return false;
    }
    while (svr <= tvr) {
      if (start[svr] === "L") {
        return false;
      }
      svr++;
    }
    tr++;
    sr++;
  }
  return true;
}
// @lc code=end

export default canChange;
