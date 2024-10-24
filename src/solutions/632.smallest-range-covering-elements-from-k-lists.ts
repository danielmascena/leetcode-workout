/*
 * @lc app=leetcode id=632 lang=typescript
 *
 * [632] Smallest Range Covering Elements from K Lists
 */

// @lc code=start
function smallestRange(nums: number[][]): number[] {
  const lens = nums.map(({ length }) => length);
  const flattedNums = nums.flat(1);
  const { length: ln } = nums;
  const { length: lf } = flattedNums;
  const numsIdx = new Array<[number, number]>(lf);
  const indexes = new Map<number, number>();
  let smRg = Number.MAX_SAFE_INTEGER;

  for (let i = 0, j = 0, index = lens.shift()!; i < lf; i++, index--) {
    if (!index) {
      j++;
      index = lens.shift()!;
    }
    numsIdx[i] = [flattedNums[i], j];
  }
  numsIdx.sort(([a], [b]) => a - b);
  let st, ed: number | undefined;
  const arr = new Array<number>();

  for (let i = 0; i < ln; i++) {
    const [num, idx] = numsIdx[i];
    indexes.set(idx, (indexes.get(idx) ?? 0) + 1);
    arr.push(num);
  }
  if (indexes.size === ln) {
    st = arr[0];
    ed = arr[ln-1];
    smRg = ed - st;
  }
  for (let i = ln, j = 0; i < lf; i++, j++) {
    const [num, idx] = numsIdx[i];
    indexes.set(idx, (indexes.get(idx) ?? 0) + 1);
    const [, ji] = numsIdx[j];
    const nq = (indexes.get(ji) ?? 0) - 1;
    indexes.set(ji, nq);
    arr.shift()!;
    const f = arr[0];
    arr.push(num);
    const sum = num - f;

    if (nq <= 0) {
      indexes.delete(ji);
    }
    if (indexes.size === ln && sum < smRg) {
        smRg = sum;
        st = f;
        ed = num;
    }
  }
  return [st!, ed!];
}
// @lc code=end

export default smallestRange;
