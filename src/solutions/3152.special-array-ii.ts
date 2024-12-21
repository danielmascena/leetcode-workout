function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const sameParity = new Set<string>();

  for (let i = 0, len = nums.length; i < len - 1; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      sameParity.add(`${i}-${i + 1}`);
    }
  }
  return queries.map(([st, ed]) => {
    while (st < ed) {
      const range = `${st}-${++st}`;

      if (sameParity.has(range)) {
        return false;
      }
    }
    return true;
  });
}

export default isArraySpecial;
