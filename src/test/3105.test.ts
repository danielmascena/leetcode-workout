import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import longestMonotonicSubarray from "src/solutions/3105.longest-strictly-increasing-or-strictly-decreasing-subarray";
import data from "src/mocks/3105.mock";

describe("[3105] Longest Strictly Increasing of Strictly Decreasing Subarray", () => {
  it("test case 1", () => {
    equal(longestMonotonicSubarray(data[0]), 2);
  });

  it("test case 2", () => {
    equal(longestMonotonicSubarray(data[1]), 1);
  });

  it("test case 3", () => {
    equal(longestMonotonicSubarray(data[2]), 3);
  });

  it("test case 4", () => {
    equal(longestMonotonicSubarray(data[3]), 1);
  });

  it("test case 5", () => {
    equal(longestMonotonicSubarray(data[4]), 3);
  });

  it("test case 6", () => {
    equal(longestMonotonicSubarray(data[5]), 5);
  });

  it("test case 7", () => {
    equal(longestMonotonicSubarray(data[6]), 4);
  });

  it("test case 8", () => {
    equal(longestMonotonicSubarray(data[7]), 6);
  });

  it("test case 9", () => {
    equal(longestMonotonicSubarray(data[8]), 5);
  });

  it("test case 10", () => {
    equal(longestMonotonicSubarray(data[9]), 43);
  });

  it("test case 11", () => {
    equal(longestMonotonicSubarray(data[10]), 1);
  });
});
