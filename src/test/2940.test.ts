import {describe, it} from "node:test";
import {deepEqual} from "node:assert/strict";

import leftmostBuildingQueries from "src/solutions/2940.find-building-where-alice-and-bob-can-meet";
import data from "src/mocks/2940.mock";

describe("2940.", () => {
  it("case 1", () => {
    deepEqual(leftmostBuildingQueries(...data[0]), [2, 5, -1, 5, 2]);
  });

  it("case 2", () => {
    deepEqual(leftmostBuildingQueries(...data[1]), [7, 6, -1, 4, 6]);
  });
});
