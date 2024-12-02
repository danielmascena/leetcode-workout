import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import findThePrefixCommonArray from "src/solutions/2657.find-the-prefix-common-array-of-two-arrays";
import data from "src/mocks/2657.mock";

describe("2657.", () => {
  test("case 1", () => {
    deepEqual(findThePrefixCommonArray(...data[0]), [0, 2, 3, 4]);
  });

  test("case 2", () => {
    deepEqual(findThePrefixCommonArray(...data[1]), [0, 1, 3]);
  });
});
