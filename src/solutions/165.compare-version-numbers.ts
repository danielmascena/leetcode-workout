/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
   const v1arr = version1.split(".");
   const v2arr = version2.split(".");
   const len = Math.max(v1arr.length, v2arr.length);

   for (let i = 0; i < len; i++) {
    const n1 = +v1arr[i] >> 0;
    const n2 = +v2arr[i] >> 0;

    if (n1 < n2) {
        return -1;
    } else if (n1 > n2) {
        return 1;
    }
   }
   return 0;
};
// @lc code=end
/*
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0"));
console.log(compareVersion("0.1", "1.1"));
console.log(compareVersion("1.0.1", "1"));
console.log(compareVersion("1", "1.1"));
*/
