import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import maxCount from "2554.maximum-number-of-integers-to-choose-from-a-range-i";
import mock from "src/mocks/2554.mock";

describe("2554.", () => {
  test("case 1", () => {
    equal(maxCount(...mock[0]), 2);
  });

  test("case 2", () => {
    equal(maxCount(...mock[1]), 0);
  });

  test("case 3", () => {
    equal(maxCount(...mock[2]), 7);
  });

  test("case 106", () => {
    equal(maxCount(...mock[3]), 17);
  });

  test("case 4", () => {
    equal(maxCount(...mock[4]), 9999);
  });

  test("case 5", () => {
    equal(maxCount(...mock[5]), 12);
  });

  test("case 6", () => {
    equal(maxCount(...mock[6]), 124);
  });

  test("case 7", () => {
    equal(maxCount(...mock[7]), 17);
  });

  test("case 8", () => {
    equal(maxCount(...mock[8]), 10);
  });

  test("case 9", () => {
    equal(maxCount(...mock[9]), 3954);
  });

  test("case 10", () => {
    equal(maxCount(...mock[10]), 64);
  });

  test("case 11", () => {
    equal(maxCount(...mock[11]), 7122);
  });
});
