import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import findMaxFish from "src/solutions/2658.maximum-number-of-fish-in-a-grid";
import data from "src/mocks/2658.mock";

describe("[2658] Maximum Number of Fish in a Grid", () => {
  it("test case 1", () => {
    equal(findMaxFish(data[0]), 7);
  });

  it("test case 2", () => {
    equal(findMaxFish(data[1]), 1);
  });

  it("test case 3", () => {
    equal(findMaxFish(data[2]), 0);
  });

  it("test case 4", () => {
    equal(findMaxFish(data[3]), 4);
  });

  it("test case 5", () => {
    equal(findMaxFish(data[4]), 0);
  });

  it("test case 6", () => {
    equal(findMaxFish(data[5]), 9);
  });

  it("test case 7", () => {
    equal(findMaxFish(data[6]), 24);
  });

  it("test case 8", () => {
    equal(findMaxFish(data[7]), 21);
  });

  it("test case 9", () => {
    equal(findMaxFish(data[8]), 71);
  });

  it("test case 10", () => {
    equal(findMaxFish(data[9]), 458);
  });
});
