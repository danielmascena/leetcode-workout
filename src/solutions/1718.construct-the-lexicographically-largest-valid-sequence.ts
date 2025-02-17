/*
 * @lc app=leetcode id=1718 lang=typescript
 *
 * [1718] Construct the Lexicographically Largest Valid Sequence
 */

// @lc code=start
function constructDistancedSequence(n: number): number[] {
  const size = n * 2 - 1;
  const ans = new Array<number>(size).fill(0);
  let num = n;
  let i = 0;

  while (num > 1) {
    while (i + num < size && (ans[i] || ans[i + num])) i++;

    if (i + num < size) {
      ans[i] = num;
      ans[i + num] = num;
    } else {
      break;
    }
    num--;
  }
  if (num === 1) {
    for (let i = 0; i < size; i++) {
      if (!ans[i]) {
        ans[i] = num;
      }
    }
  } else {
    //
  }
  console.log(num, ans);
  return ans;
}
// @lc code=end

export default constructDistancedSequence;
