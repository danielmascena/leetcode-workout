import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import maximumBeauty from "src/solutions/2070.most-beautiful-item-for-each-query";
import data from "SRC/mocks/2070.mock";

describe("2070.", () => {
  test("case 1", () => {
    deepEqual(maximumBeauty(...data[0]), [2, 4, 5, 5, 6, 6]);
  });

  test("case 2", () => {
    deepEqual(maximumBeauty(...data[1]), [4]);
  });

  test("case 3", () => {
    deepEqual(maximumBeauty(...data[2]), [0]);
  });

  test("case 15", () => {
    deepEqual(
      maximumBeauty(...data[3]),
      [
        962, 962, 962, 962, 746, 962, 962, 962, 946, 962, 962, 919, 746, 746,
        962, 962, 962, 919, 962,
      ]
    );
  });
});
