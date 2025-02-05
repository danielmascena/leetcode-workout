import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import areAlmostEqual from "src/solutions/1790.check-if-one-string-swap-can-make-strings-equal";
import data from "src/mocks/1790.mock";

describe("[1790] Check if One String Swap Can Make Strings Equal", () => {
  it("test case 1", () => {
    equal(areAlmostEqual(...data[0]), true);
  });

  it("test case 2", () => {
    equal(areAlmostEqual(...data[1]), false);
  });

  it("test case 3", () => {
    equal(areAlmostEqual(...data[2]), true);
  });

  it("test case 4", () => {
    equal(areAlmostEqual(...data[3]), false);
  });

  it("test case 5", () => {
    equal(areAlmostEqual(...data[4]), false);
  });

  it("test case 6", () => {
    equal(areAlmostEqual(...data[5]), false);
  });

  it("test case 7", () => {
    equal(areAlmostEqual(...data[6]), false);
  });

  it("test case 8", () => {
    equal(areAlmostEqual(...data[7]), false);
  });

  it("test case 9", () => {
    equal(areAlmostEqual(...data[8]), true);
  });

  it("test case 10", () => {
    equal(areAlmostEqual(...data[9]), true);
  });

  it("test case 11", () => {
    equal(areAlmostEqual(...data[10]), false);
  });
});
