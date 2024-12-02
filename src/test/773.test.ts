import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import slidingPuzzle from "src/solutions/773.sliding-puzzle";
import data from "src/mocks/773.mock";

describe("773.", () => {
  test("case 1", () => {
    equal(slidingPuzzle(data[0]), 1);
  });

  test("case 2", () => {
    equal(slidingPuzzle(data[1]), -1);
  });

  test("case 3", () => {
    equal(slidingPuzzle(data[2]), 5);
  });

  test("case 4", () => {
    equal(slidingPuzzle(data[3]), 14);
  });

  test("case 5", () => {
    equal(slidingPuzzle(data[4]), 14);
  });

  test("case 6", () => {
    equal(slidingPuzzle(data[5]), 12);
  });

  test("case 7", () => {
    equal(slidingPuzzle(data[6]), 15);
  });

  test("case 8", () => {
    equal(slidingPuzzle(data[7]), 7);
  });

  test("case 9", () => {
    equal(slidingPuzzle(data[8]), -1);
  });

  test("case 10", () => {
    equal(slidingPuzzle(data[9]), -1);
  });

  test("case 11", () => {
    equal(slidingPuzzle(data[10]), 0);
  });
});
