/*
 * @lc app=leetcode id=2037 lang=typescript
 *
 * [2037] Minimum Number of Moves to Seat Everyone
 */

// @lc code=start
function minMovesToSeat(seats: number[], students: number[]): number {
  var changes = 0;
  const { abs } = Math;
  const selectionSort = <T>(arr: T[]): T[] => {
    const copyList = Array.from(arr);

    for (let i = 0, len = copyList.length; i < len - 1; i++) {
      let p = i;
      for (let j = i + 1; j < len; j++) {
        if (copyList[j] < copyList[p]) {
          p = j;
        }
      }
      if (i !== p) {
        [copyList[i], copyList[p]] = [copyList[p], copyList[i]];
      }
    }
    return copyList;
  };
  const sseats = selectionSort(seats);
  const sstudents = selectionSort(students);
  sseats.forEach((seat, idx) => changes += abs(seat - sstudents[idx]));
  return changes;
}
// @lc code=end

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 1,3,5 - 2,4,7 = 1,1,2 = 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 1,4,5,9 - 1,2,3,6 = 0,2,2,3 = 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 2,2,6,6 - 1,2,3,6 = 1,0,3,0 = 4
