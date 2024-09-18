/*
 * @lc app=leetcode id=1460 lang=typescript
 *
 * [1460] Make Two Arrays Equal by Reversing Subarrays
 */

// @lc code=start
function canBeEqual(target: number[], arr: number[]): boolean {
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        const t = target[i];

        if (t !== arr[i]) {
            const j = arr.indexOf(t, i);

            if (j === -1) return false;

            arr = [...arr.slice(0, i), ...arr.slice(i, j + 1).reverse(), ...arr.slice(j+1)];
        }
    }
    return String(arr) === String(target);
};
// @lc code=end

console.log(canBeEqual([1,2,3,4], [2,4,1,3]))
console.log(canBeEqual([7],[7]))
console.log(canBeEqual([3,7,9],[3,7,11]))

