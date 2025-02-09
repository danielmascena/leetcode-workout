import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import countBadPairs from "src/solutions/2364.count-number-of-bad-pairs";
import data from "src/mocks/2364.mock";

describe("[2364] Count Number of Bad Pairs", () => {
  it("test case 1", () => {
    equal(countBadPairs(data[0]), 5);
  });

  it("test case 2", () => {
    equal(countBadPairs(data[1]), 0);
  });

  it("test case 3", () => {
    equal(countBadPairs(data[2]), 0);
  });

  it("test case 4", () => {
    equal(countBadPairs(data[3]), 10);
  });

  it("test case 5", () => {
    equal(countBadPairs(data[4]), 36);
  });

  it("test case 6", () => {
    equal(countBadPairs(data[5]), 15);
  });

  it("test case 7", () => {
    equal(countBadPairs(data[6]), 136);
  });

  it("test case 8", () => {
    equal(countBadPairs(data[7]), 1923725);
  });

  it("test case 9", () => {
    equal(countBadPairs(data[8]), 2016);
  });

  it("test case 10", () => {
    equal(countBadPairs(data[9]), 1891);
  });
});
