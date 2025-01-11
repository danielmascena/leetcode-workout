import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import shiftingLetters from "src/solutions/2381.shifting-letters-ii";
import data from "src/mocks/2381.mock";

describe("2381.", () => {
  it("case 1", () => {
    equal(shiftingLetters(...data[0]), "ace");
  });

  it("case 2", () => {
    equal(shiftingLetters(...data[1]), "catz");
  });

  it.skip("case 37", () => {
    equal(shiftingLetters(...data[2]), "");
  });
});
