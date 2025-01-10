/*
 * @lc app=leetcode id=916 lang=typescript
 *
 * [916] Word Subsets
 */

// @lc code=start
function wordSubsets(words1: string[], words2: string[]): string[] {
  const genArrPos = (warr: string[], tgt: number[] = Array(26).fill(0)) => {
    warr.forEach((l) => tgt[Buffer.from(l).readUInt8() - 97]++);
    return tgt;
  };
  const arr2 = [] as number[][];
  words2.forEach((ss) => {
    arr2.push(genArrPos(ss.split("")));
  });
  return words1.filter((word) => {
    const arr = genArrPos(word.split(""));
    for (let i = 0; i < 26; i++) {
      for (const a of arr2) {
        if (arr[i] < a[i]) return false;
      }
    }
    return true;
  });
}
// @lc code=end

export default wordSubsets;
