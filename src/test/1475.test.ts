import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import finalPrices from "1475.final-prices-with-a-special-discount-in-a-shop";
import data from "src/mocks/1475.mock";

describe("1475.", () => {
  test("test 1", () => {
    deepEqual(finalPrices(data[0]), [4, 2, 4, 2, 3]);
  });

  test("test 2", () => {
    deepEqual(finalPrices(data[1]), [1, 2, 3, 4, 5]);
  });

  test("test 3", () => {
    deepEqual(finalPrices(data[2]), [9, 0, 1, 6]);
  });
});
