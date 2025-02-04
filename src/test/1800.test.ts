import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maxAscendingSum from "src/solutions/1800.maximum-ascending-subarray-sum";
import data from "src/mocks/1800.mock";

describe("[1800] Maximum Ascending Subarray Sum", () => {
  it("test case 1", () => {
    equal(maxAscendingSum(data[0]), 65);
  });

  it("test case 2", () => {
    equal(maxAscendingSum(data[1]), 150);
  });

  it("test case 3", () => {
    equal(maxAscendingSum(data[2]), 33);
  });

  it("test case 4", () => {
    equal(maxAscendingSum(data[3]), 6);
  });

  it("test case 5", () => {
    equal(maxAscendingSum(data[4]), 16);
  });

  it("test case 6", () => {
    equal(maxAscendingSum(data[5]), 100);
  });

  it("test case 7", () => {
    equal(maxAscendingSum(data[6]), 167);
  });

  it("test case 8", () => {
    equal(maxAscendingSum(data[7]), 147);
  });

  it("test case 9", () => {
    equal(maxAscendingSum(data[8]), 438);
  });

  it("test case 10", () => {
    equal(maxAscendingSum(data[9]), 455);
  });

  it("test case 11", () => {
    equal(maxAscendingSum(data[10]), 231);
  });
});
