import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import isArraySpecial from "src/solutions/3152.special-array-ii";
import mock from "src/mocks/3152.mock";

describe("3152.", () => {
  it("case 1", () => {
    deepEqual(isArraySpecial(...mock[0]), [false]);
  });

  it("case 2", () => {
    deepEqual(isArraySpecial(...mock[1]), [false, true]);
  });

  it("case 3", () => {
    deepEqual(isArraySpecial(...mock[2]), [false]);
  });

  it("case 4", () => {
    deepEqual(isArraySpecial(...mock[3]), [true]);
  });

  it("case 5", () => {
    deepEqual(isArraySpecial(...mock[4]), [false]);
  });
});
