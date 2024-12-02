/*
 * @lc app=leetcode id=1861 lang=typescript
 *
 * [1861] Rotating the Box
 */

import MyCalendarThree from "src/solutions/732.my-calendar-iii";

// @lc code=start
function rotateTheBox(box: string[][]): string[][] {
  const m = box.length;
  const n = box[0].length;
  const ans = Array.from({ length: n }, () => Array(m).fill("."));
  const chgBox = box.map((row) => {
    let i = n - 1;
    let j = n - 1;
    const cr = Array(n).fill(".");

    while (j >= 0 && row[j] === "*") {
      cr[j] = "*";
      i = --j;
    }

    while (i >= 0) {
      const c = row[i];

      if (c === "#") {
        cr[j--] = "#";
      } else if (c === "*") {
        while (row[i] === "*" || row[i] === "#") {
          cr[i] = row[i--];
        }
        j = i;
      }
      i--;
    }
    return cr;
  });
  chgBox.forEach((row, idx) => {
    const r = m - idx - 1;
    row.forEach((c, j) => {
      ans[j][r] = c;
    });
  });
  return ans;
}
// @lc code=end

export default rotateTheBox;
