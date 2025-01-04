import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maxScoreSightseeingPair from "src/solutions/1014.best-sightseeing-pair";
import data from "src/mocks/1014.mock";

describe("1014.", () => {
  it("case 1", () => {
    equal(maxScoreSightseeingPair(data[0]), 11);
  });

  it("case 2", () => {
    equal(maxScoreSightseeingPair(data[1]), 2);
  });

  it("case 3", () => {
    equal(maxScoreSightseeingPair(data[2]), 14);
  });

  it("case 4", () => {
    equal(maxScoreSightseeingPair(data[3]), 11);
  });

  it("case 5", () => {
    equal(maxScoreSightseeingPair(data[4]), 1999);
  });

  it("case 6", () => {
    equal(maxScoreSightseeingPair(data[5]), 999);
  });

  it("case 7", () => {
    equal(maxScoreSightseeingPair(data[6]), 9);
  });

  it("case 8", () => {
    equal(maxScoreSightseeingPair(data[7]), 1998);
  });

  it("case 9", () => {
    equal(maxScoreSightseeingPair(data[8]), 1003);
  });

  it("case 10", () => {
    equal(maxScoreSightseeingPair(data[9]), 1998);
  });

  it("case 11", () => {
    equal(maxScoreSightseeingPair(data[10]), 192);
  });
});
