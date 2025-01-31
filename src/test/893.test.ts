import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import numSpecialEquivGroups from "src/solutions/893.groups-of-special-equivalent-strings";
import data from "src/mocks/893.mock";

describe("[893] Groups of Special-Equivalent Strings", () => {
  it("test case 1", () => {
    equal(numSpecialEquivGroups(data[0]), 3);
  });

  it("test case 2", () => {
    equal(numSpecialEquivGroups(data[1]), 3);
  });
});
