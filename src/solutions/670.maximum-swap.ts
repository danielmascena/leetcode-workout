/*
 * @lc app=leetcode id=670 lang=typescript
 *
 * [670] Maximum Swap
 */

// @lc code=start
function maximumSwap(num: number): number {
  const snum = Array.from(String(num));
  /*
  const ssnum = [...snum]
    .map<[string, number]>((c, i) => [c, i])
    .sort(([ac, ai], [bc, bi]) => {
      if (ac === bc) {
        return bi - ai;
      }
      return +bc - +ac;
    });
  console.log(snum, ssnum);
  for (let i = 0, len = snum.length; i < len; i++) {
    const [c, j] = ssnum[i];

    if (c !== snum[i]) {
      [snum[i], snum[j]] = [c, snum[i]];
      return +snum.join("");
    }
  }
    */
  const ssnum = [...snum].sort((a, b) => +b - +a);
  
  for (let i = 0, len = snum.length; i < len; i++) {
    const c1 = ssnum[i];
    const c2 = snum[i];

    if (c1 !== c2) {
        const j = snum.lastIndexOf(c1);
        [snum[i], snum[j]] = [c1, c2];
        return +snum.join('');
    }
  }
  return num;
}
// @lc code=end

export default maximumSwap;
