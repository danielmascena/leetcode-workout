import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import minEnd from "src/solutions/3133.minimum-array-end";
import data from "src/mocks/3133.mock";

describe("3133.", () => {
  test("case 1", () => {
    equal(minEnd(...data[0]), 6);
  });
  test("case 2", () => {
    equal(minEnd(...data[1]), 15);
  });
  test("case 3", () => {
    equal(minEnd(...data[2]), 1);
  });
  test("case 4", () => {
    equal(minEnd(...data[3]), 52);
  });
  test("case 5", () => {
    equal(minEnd(...data[4]), 31);
  });
  test("case 6", () => {
    equal(minEnd(...data[5]), 151);
  });
  test("case 7", () => {
    equal(minEnd(...data[6]), 25471);
  });
});
