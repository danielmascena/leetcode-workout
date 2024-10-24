/*
 * @lc app=leetcode id=2938 lang=typescript
 *
 * [2938] Separate Black and White Balls
 */

// @lc code=start
function minimumSteps(s: string): number {
  /*
    // naive approach
    var counter = 0;
    let ones = s.replaceAll('0', '');
    const tgt = '0'.repeat(s.length - ones.length) + '1'.repeat(ones.length);

    while (s !== tgt) {
        s = s.replace('10', '01');
        counter++;
    }
    return counter;
*/
  var right = s.length - 1;
  const dist: number[] = [];

  while (s[right] === "1") {
    right--;
  }
  for (let i = 0; i < right; i++) {
    if (s[i] === "1") {
      dist.push(i);
    }
  }
  console.log(dist, right);
  return dist.reduceRight((ttl, pos) => ttl + (right-- - pos), 0);
}
// @lc code=end

export default minimumSteps;
