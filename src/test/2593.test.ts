import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import findScore from "2593.find-score-of-an-array-after-marking-all-elements";
import data from "src/mocks/2593.mock";

describe("2593.", () => {
  it("case 1", () => {
    equal(findScore(data[0]), 7);
  });

  it("case 2", () => {
    equal(findScore(data[1]), 5);
  });

  it("case 1036", () => {
    equal(findScore(data[2]), 9581425236);
  });

  it("case 1038", () => {
    equal(findScore(data[3]), 14980108728);
  });

  it("case 3", () => {
    equal(findScore(data[4]), 7);
  });

  it("case 4", () => {
    equal(findScore(data[5]), 5);
  });

  it("case 5", () => {
    equal(findScore(data[6]), 3);
  });

  it("case 6", () => {
    equal(findScore(data[7]), 25);
  });

  it("case 7", () => {
    equal(findScore(data[8]), 2);
  });

  it("case 8", () => {
    equal(findScore(data[9]), 212);
  });

  it("case 9", () => {
    equal(findScore(data[10]), 18);
  });
});
