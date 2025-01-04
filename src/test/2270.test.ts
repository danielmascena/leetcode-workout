import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import waysToSplitArray from "src/solutions/2270.number-of-ways-to-split-array";
import data from "src/mocks/2270.mock";

describe("2270.", () => {
  it("case 1", () => {
    equal(waysToSplitArray(data[0]), 2);
  });

  it("case 2", () => {
    equal(waysToSplitArray(data[1]), 2);
  });

  it("case 85", () => {
    equal(waysToSplitArray(data[2]), 1);
  });

  it("case 3", () => {
    equal(waysToSplitArray(data[3]), 1);
  });

  it("case 4", () => {
    equal(waysToSplitArray(data[4]), 0);
  });

  it("case 5", () => {
    equal(waysToSplitArray(data[5]), 2);
  });

  it("case 6", () => {
    equal(waysToSplitArray(data[6]), 2);
  });

  it("case 7", () => {
    equal(waysToSplitArray(data[7]), 7);
  });

  it("case 8", () => {
    equal(waysToSplitArray(data[8]), 71);
  });
});
