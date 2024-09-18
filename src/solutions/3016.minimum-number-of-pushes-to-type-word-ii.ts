/*
 * @lc app=leetcode id=3016 lang=typescript
 *
 * [3016] Minimum Number of Pushes to Type Word II
 */

// @lc code=start
function minimumPushes(word: string): number {
    type Mapped = [string, number][];
    let inc = 1;
    let i = 1;
    let ttl = 0;
    const mapped = new Map<string, number>();
    const partition = (arr: Mapped, low: number, high: number) => {
        const pivot = arr[high][1];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j][1] > pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
        return i + 1;
    };
    const quickSort = (arr: Mapped, low: number, high: number) => {
        if (low < high) {
            const pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    };
    for (const c of word) {
        mapped.set(c, (mapped.get(c) ?? 0) + 1);
    }
    const sortedFreq = [...mapped];
    quickSort(sortedFreq, 0, mapped.size - 1);

    for (const tp of sortedFreq) {
        tp[1] = inc;

        if (i++ % 8 === 0) {
            inc++;
        }
    }
    const transformedMap = new Map(sortedFreq);

    for (const c of word) {
        ttl += transformedMap.get(c)!;
    }
    return ttl;
};
// @lc code=end
export default minimumPushes;