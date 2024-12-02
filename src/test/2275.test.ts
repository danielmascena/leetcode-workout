import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import largestCombination from "src/solutions/2275.largest-combination-with-bitwise-and-greater-than-zero";
import data from "src/mocks/2275.mock";

describe("2275.", () => {
  test("case 1", () => {
    equal(largestCombination(data[0]), 4);
  });
  test("case 2", () => {
    equal(largestCombination(data[1]), 2);
  });
  test("case 3", () => {
    equal(largestCombination(data[2]), 1);
  });
  test("case 4", () => {
    equal(largestCombination(data[3]), 2);
  });
  test("case 5", () => {
    equal(largestCombination(data[4]), 1);
  });
  test("case 6", () => {
    equal(largestCombination(data[5]), 14);
  });
  test("case 7", () => {
    equal(largestCombination(data[6]), 19);
  });
  test("case 8", () => {
    equal(largestCombination(data[7]), 17);
  });
  test("case 9", () => {
    equal(largestCombination(data[8]), 16);
  });
  test("case 10", () => {
    equal(largestCombination(data[9]), 20);
  });
});
