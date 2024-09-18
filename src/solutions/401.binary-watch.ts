/*
 * @lc app=leetcode id=401 lang=typescript
 *
 * [401] Binary Watch
 */

// @lc code=start
function readBinaryWatch(turnedOn: number): string[] {
    const res = new Array<string>();

    if (turnedOn < 9) {
        const hours = Int8Array.of(1, 2, 4, 8);
        const minutes = Int8Array.of(1, 2, 4, 8, 16, 32);
        const hrMap = new Map<number, number[]>();
        const mtMap = new Map<number, number[]>();
        const getHours = (idx: number, hour: number, count: number) => {
            if (idx === 4) {
                if (hour > 0 && hour <= 12) {
                    const arr = hrMap.get(count) ?? [];
                    arr.push(hour);
                    hrMap.set(count, arr);
                }
                return;
            }
            getHours(idx + 1, hour + hours[idx], count + 1);
            getHours(idx + 1, hour, count);
        };
        const getMinutes = (idx: number, minute: number, count: number) => {
            if (idx === 6) {
                if (minute > 0 && minute <= 59) {
                    const arr = mtMap.get(count) ?? [];
                    arr.push(minute);
                    mtMap.set(count, arr);
                }
                return;
            }
            getMinutes(idx + 1, minute + minutes[idx], count + 1);
            getMinutes(idx + 1, minute, count);
        };
        getHours(0, 0, 0);
        getMinutes(0, 0, 0);
        console.log(hrMap, mtMap)

        for (let n = 1; n <= turnedOn; n++) {
            const d = turnedOn - n;

            if (hrMap.has(n)) {
                hrMap.get(n)?.forEach(h => res.push(`${h}:00`));
            }
            if (mtMap.has(n)) {
                mtMap.get(n)?.forEach(m => res.push(`0:${m.toString().padStart(2, '0')}`));
            }
            if (hrMap.has(n) && mtMap.has(d)) {
                hrMap.get(n)?.forEach(h => mtMap.get(d)?.forEach(m => res.push(`${h}:${m.toString().padStart(2, '0')}`)));
            }
            if (hrMap.has(d) && mtMap.has(n)) {
                hrMap.get(d)?.forEach(h => mtMap.get(n)?.forEach(m => res.push(`${h}:${m.toString().padStart(2,'0')}`)));
            }
        }
    }
    return res;
};
// @lc code=end

/*
console.log(readBinaryWatch(1)); // ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9));
console.log(readBinaryWatch(6));
*/