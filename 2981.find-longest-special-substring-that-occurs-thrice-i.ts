/*
 * @lc app=leetcode id=2981 lang=typescript
 *
 * [2981] Find Longest Special Substring That Occurs Thrice I
 */

// @lc code=start
function maximumLength(s: string): number {
  const codeS = new Uint8Array(Buffer.from(s));
  const pos = Array(26).fill(0);
  const { max } = Math;
  let ans = -1;

  /* TODO: to be removed - start */
  type MyObj = {
    x: number;
  };
  const o1: MyObj = { x: 2 };
  const o2: typeof o1 = JSON.parse('{"x": 3}');
  //    ^?
  const foo = <T>(t: T) => {
    console.log(t);
  };
  function bar<T extends string>(t: T) {
    console.log(t.toLowerCase());
  }
  foo(true);
  foo(o2);
  bar(String(2));
  /* to be removed - end */

  codeS.forEach((c) => pos[c - 97]++);
  //console.log(codeS, pos);
  pos.forEach((q, j) => {
    if (q >= 3) {
      if (q === 3) {
        ans = max(ans, 1);
      } else {
        const char = String.fromCodePoint(j + 97);
        let size = q - 2;

        while (size > 0) {
          let last = 0;
          let count = 0;

          for (let i = 1; i <= 3; i++) {
            const idx = s.indexOf(char.repeat(size), last);
            if (idx === -1) {
              break;
            }
            count++;
            last = idx + 1;
          }
          if (count === 3) {
            ans = max(ans, size);
            break;
          }
          size--;
        }
      }
    }
  });
  return ans;
}
// @lc code=end

export default maximumLength;

/**
 * Accepted
 * 811/811 cases passed (9 ms)
 * Your runtime beats 50 % of typescript submissions
 * Your memory usage beats 100 % of typescript submissions (52.4 MB)
 */
