/*
[Medium]

You are given two integers n and x. You have to construct an ansay of positive integers nums of size n where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x.

Return the minimum possible value of nums[n - 1].

Example 1:
Input: n = 3, x = 4
Output: 6

Explanation:
nums can be [4,5,6] and its last element is 6.

Example 2:
Input: n = 2, x = 7
Output: 15

Explanation:
nums can be [7,15] and its last element is 15.

Constraints:
1 <= n, x <= 108
*/
function minEnd(n: number, x: number): number {
  const ans = Array.of(x);
  let inc = 1;
  n--;

  while (n) {
    const nxt = x + inc++;

    if ((nxt & x) === x) {
      ans.push(nxt);
      n--;
    }
  }
  return ans.at(-1) as number;
}
export default minEnd;
