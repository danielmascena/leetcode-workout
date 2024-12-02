import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import longestSquareStreak from "src/solutions/2501.longest-square-streak-in-an-array";
import data from "src/mocks/2501.mock";

describe("2501.", () => {
  test("test case 1", () => {
    strictEqual(longestSquareStreak(data[0]), 3);
  });

  test("test case 2", () => {
    strictEqual(longestSquareStreak(data[1]), -1);
  });

  test("test case 3", () => {
    strictEqual(longestSquareStreak(data[2]), -1);
  });

  test("test case 4", () => {
    strictEqual(longestSquareStreak(data[3]), 3);
  });

  test("test case 5", () => {
    strictEqual(longestSquareStreak(data[4]), 3);
  });

  test("test case 6", () => {
    strictEqual(longestSquareStreak(data[5]), 4);
  });

  test("test case 7", () => {
    strictEqual(longestSquareStreak(data[6]), -1);
  });

  test("test case 8", () => {
    strictEqual(longestSquareStreak(data[7]), -1);
  });

  test("test case 9", () => {
    strictEqual(longestSquareStreak(data[8]), 4);
  });

  test("test case 10", () => {
    strictEqual(longestSquareStreak(data[9]), 2);
  });
});
