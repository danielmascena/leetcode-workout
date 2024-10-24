import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import countMaxOrSubsets from "src/solutions/2044.count-number-of-maximum-bitwise-or-subsets";
import data from "../mocks/2044.mock";

describe("2044.", () => {
  it("test case 1", () => {
    strictEqual(countMaxOrSubsets(data[0]), 2);
  });
  it("test case 2", () => {
    strictEqual(countMaxOrSubsets(data[1]), 7);
  });
  it("test case 3", () => {
    strictEqual(countMaxOrSubsets(data[2]), 6);
  });
});
