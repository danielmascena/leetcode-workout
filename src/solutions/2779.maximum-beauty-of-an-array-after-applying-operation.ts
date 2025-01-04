/*
 * @lc app=leetcode id=2779 lang=typescript
 *
 * [2779] Maximum Beauty of an Array After Applying Operation
 */

// @lc code=start
function maximumBeauty(nums: number[], k: number): number {
  const numsQty = new Map<number, number>();
  const genRange = function* genRange(
    start: number,
    end: number
  ): IterableIterator<number> {
    while (start <= end) {
      yield start++;
    }
  };
  const ranges = nums.map((n) => [...genRange(n - k, n + k)]);
  ranges.forEach((range) =>
    range.forEach((num) => numsQty.set(num, (numsQty.get(num) ?? 0) + 1))
  );
  //console.log(ranges, numsQty);
  return Math.max(...numsQty.values());
}
// @lc code=end

export default maximumBeauty;
