import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import minimumSize from "1760.minimum-limit-of-balls-in-a-bag";
import mock from "src/mocks/1760.mock";

describe("1760.", () => {
  test("case 1", () => {
    equal(minimumSize(...mock[0]), 3);
  });

  test("case 2", () => {
    equal(minimumSize(...mock[1]), 2);
  });

  test("case 3", () => {
    equal(minimumSize(...mock[2]), 1);
  });

  test("case 4", () => {
    equal(minimumSize(...mock[3]), 7);
  });

  test("case 5", () => {
    equal(minimumSize(...mock[4]), 1);
  });

  test("case 6", () => {
    equal(minimumSize(...mock[5]), 500000000);
  });

  test("case 7", () => {
    equal(minimumSize(...mock[6]), 129);
  });

  test("case 8", () => {
    equal(minimumSize(...mock[7]), 531);
  });

  test.skip("case 9", () => {
    equal(minimumSize(...mock[8]), 317);
  });

  test.skip("case 10", () => {
    equal(minimumSize(...mock[9]), 1451);
  });
});
