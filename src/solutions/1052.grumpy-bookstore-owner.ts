/*
 * @lc app=leetcode id=1052 lang=typescript
 *
 * [1052] Grumpy Bookstore Owner
 */

// @lc code=start
function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    const { max } = Math;
    const len = customers.length;
    var total = 0;
    var maximum = 0;

    for (let i = 0; i < len; i++) {
        if (grumpy[i] === 0) {
            maximum += customers[i];
        }
    }
    for (let i = minutes; i < len; i++) {
        total += customers[i];
    }
    var maximum = max(maximum, total);
    var i = 0;
    var j = minutes;
    
    while (j < len) {
        total -= customers[j++];
        total += customers[i++];
        maximum = max(maximum, total);
    }
    return maximum;
};
// @lc code=end

console.log(maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3))
console.log(maxSatisfied([1],[0],1))
console.log(maxSatisfied([3],[1],1))