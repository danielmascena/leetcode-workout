import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import countFairPairs from "src/solutions/2563.count-the-number-of-fair-pairs";
import data from "src/mocks/2563.mock";

describe("2563.", () => {
  test("case 1", () => {
    equal(countFairPairs(...data[0]), 6);
  });

  test("case 2", () => {
    equal(countFairPairs(...data[1]), 1);
  });

  test("case 30", () => {
    equal(countFairPairs(...data[2]), 6);
  });

  test("case 2", () => {
    equal(countFairPairs(...data[3]), 0);
  });

  test("case 12", () => {
    equal(countFairPairs(...data[4]), 15);
  });

  test("case 47", () => {
    equal(countFairPairs(...data[5]), 0);
  });
});
