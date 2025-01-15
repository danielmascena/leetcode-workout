/*
 * @lc app=leetcode id=2429 lang=typescript
 *
 * [2429] Minimize XOR
 */

// @lc code=start
function minimizeXor(num1: number, num2: number): number {
  const sb1 = num1.toString(2);
  const sb2 = num2.toString(2);
  const sbarr = Array.from(sb2).map(Number);
  const { length: len1 } = sb1;
  const { length: len2 } = sb2;
  const len = Math.max(len1, len2);
  const { length: nof1 } = sbarr.filter(Boolean);
  const arr = Array(len - nof1)
    .fill(0)
    .concat(Array(nof1).fill(1)) as number[];
  const seen = new Set<string>();
  let num = num2 ^ num1;
  let ans = num2;

  const checkMin = (sa: string) => {
    const n = parseInt(sa, 2);

    if ((n ^ num1) < num) {
      num = n ^ num1;
      ans = n;
    }
    return ans;
  };
  const dp = (i: number, arr: number[], fw: number) => {
    if (i < 0 || i >= len) {
      return;
    }
    while (fw && i < len && !arr[i]) i++;

    const copyArr = [...arr];
    const sa = copyArr.join("");
    checkMin(sa);

    if (i - 1 >= 0) [copyArr[i], copyArr[i - 1]] = [copyArr[i - 1], copyArr[i]];

    if (seen.has(copyArr.join(""))) return;

    seen.add(sa);
    dp(i - 1, copyArr, 0);
    dp(i + 1, copyArr, 1);
  };
  dp(len - nof1, arr, 0);
  return ans;
}
// @lc code=end

export default minimizeXor;

/**
 * Time Limit Exceeded
112/277 cases passed (N/A)
Testcase
871412
895187
Expected Answer
871408
 */
