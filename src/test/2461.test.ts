import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import maximumSubarraySum from "src/solutions/2461.maximum-sum-of-distinct-subarrays-with-length-k";
import data from "src/mocks/2461.mock";

describe("2461.", () => {
  test("case 1", () => {
    equal(maximumSubarraySum(...data[0]), 15);
  });

  test("case 2", () => {
    equal(maximumSubarraySum(...data[1]), 0);
  });

  test("case 63", () => {
    equal(maximumSubarraySum(...data[2]), 0);
  });
  test("case 85", () => {
    equal(maximumSubarraySum(...data[3]), 12);
  });
});
