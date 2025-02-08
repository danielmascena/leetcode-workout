/*
 * @lc app=leetcode id=2349 lang=typescript
 *
 * [2349] Design a Number Container System
 */

// @lc code=start
class NumberContainers {
  numIndex: Map<number, Record<number | string, number>>;
  idxNumber: Map<number, number>;

  constructor() {
    this.numIndex = new Map();
    this.idxNumber = new Map();
  }

  change(index: number, number: number): void {
    const {numIndex, idxNumber} = this;
    const r = numIndex.get(number) ?? {};
    const n = idxNumber.get(index) ?? number;

    if (n !== number) {
      const o = numIndex.get(n)!;
      delete o[index];
    }
    r[index] = index;
    numIndex.set(number, r);
    idxNumber.set(index, number);
  }

  find(number: number): number {
    const {numIndex} = this;
    const r = numIndex.get(number) ?? {};

    for (const k in r) {
      return r[k];
    }
    return -1;
  }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
// @lc code=end

export default NumberContainers;
