/*
 * @lc app=leetcode id=2410 lang=typescript
 *
 * [2410] Maximum Matching of Players With Trainers
 */

// @lc code=start
function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    const mv = Math.max(...trainers);
    const sortFn = (a: number, b: number) => b - a;
    const sortPlayers = players.filter(p => p <= mv).sort(sortFn);
    const sortTrainers = trainers.sort(sortFn);
    var total = 0;

    for (let i = 0, j = 0, lt = sortTrainers.length, lp = sortPlayers.length; j < lt && i < lp; i++) {
        const p = sortPlayers[i];
        const t = sortTrainers[j];

        if (p <= t) {
            total++;
            j++;
        }
    }
    return total;
};
// @lc code=end
/*
console.log(matchPlayersAndTrainers([4,7,9],[8,2,5,8]))
console.log(matchPlayersAndTrainers([1,1,1],[10]))
console.log(matchPlayersAndTrainers([2,3,1,1,3],[2,4,2])) // 3
*/