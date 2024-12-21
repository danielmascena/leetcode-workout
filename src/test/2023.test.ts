import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import numOfPairs from "2023.number-of-pairs-of-strings-with-concatenation-equal-to-target";
import data from "src/mocks/2023.mock";

describe("2023.", () => {
  it("case 1", () => {
    equal(numOfPairs(...data[0]), 4);
  });

  it("case 2", () => {
    equal(numOfPairs(...data[1]), 2);
  });

  it("case 3", () => {
    equal(numOfPairs(...data[2]), 6);
  });
});
