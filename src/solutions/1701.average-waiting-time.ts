/*
 * @lc app=leetcode id=1701 lang=typescript
 *
 * [1701] Average Waiting Time
 */

// @lc code=start
function averageWaitingTime(customers: number[][]): number {
    const len = customers.length;
    let future = 1;

    for (let i = 0; i< len; i++) {
        const customer = customers[i];
        const [arrival, time] = customer;

        if (arrival < future) {
            customer[1] += future - arrival;
        } else {
            future = arrival;
        }
        future += time;
    }
    return customers.reduce<number>((total, [arrival, wait]) => wait + total, 0) / len;
};
// @lc code=end

/*
console.log(averageWaitingTime([[1,2],[2,5],[4,3]]))
console.log(averageWaitingTime([[5,2],[5,4],[10,3],[20,1]]))
*/