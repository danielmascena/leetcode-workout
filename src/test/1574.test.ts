import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import findLengthOfShortestSubarray from "src/solutions/1574.shortest-subarray-to-be-removed-to-make-array-sorted";
import data from "src/mocks/1574.mock";

describe("1574.", () => {
  test("case 1", () => {
    equal(findLengthOfShortestSubarray(data[0]), 3);
  });

  test("case 2", () => {
    equal(findLengthOfShortestSubarray(data[1]), 4);
  });

  test("case 3", () => {
    equal(findLengthOfShortestSubarray(data[2]), 0);
  });

  test("case 55", () => {
    equal(findLengthOfShortestSubarray(data[3]), 3);
  });
});
