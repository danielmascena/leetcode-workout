import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import countPrefixSuffixPairs from "src/solutions/3042.count-prefix-and-suffix-pairs-i";
import data from "src/mocks/3042.mock";

describe("3042.", () => {
  it("case 1", () => {
    equal(countPrefixSuffixPairs(data[0]), 4);
  });

  it("case 2", () => {
    equal(countPrefixSuffixPairs(data[1]), 2);
  });

  it("case 3", () => {
    equal(countPrefixSuffixPairs(data[2]), 0);
  });

  it("case 4", () => {
    equal(countPrefixSuffixPairs(data[3]), 0);
  });

  it("case 5", () => {
    equal(countPrefixSuffixPairs(data[4]), 0);
  });

  it("case 6", () => {
    equal(countPrefixSuffixPairs(data[5]), 0);
  });

  it("case 7", () => {
    equal(countPrefixSuffixPairs(data[6]), 3);
  });

  it("case 8", () => {
    equal(countPrefixSuffixPairs(data[7]), 8);
  });

  it("case 9", () => {
    equal(countPrefixSuffixPairs(data[8]), 5);
  });

  it("case 10", () => {
    equal(countPrefixSuffixPairs(data[9]), 666);
  });

  it("case 11", () => {
    equal(countPrefixSuffixPairs(data[10]), 730);
  });
});
