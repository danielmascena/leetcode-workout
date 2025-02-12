import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maximumSum from "src/solutions/2342.max-sum-of-a-pair-with-equal-sum-of-digits";
import data from "src/mocks/2342.mock";

describe("[2342] Max Sum of a Pair Equal Sum of Digits", () => {
  it("test case 1", () => {
    equal(maximumSum(data[0]), 54);
  });

  it("test case 2", () => {
    equal(maximumSum(data[1]), -1);
  });

  it("test case 3", () => {
    equal(maximumSum(data[2]), -1);
  });

  it("test case 4", () => {
    equal(maximumSum(data[3]), -1);
  });

  it("test case 5", () => {
    equal(maximumSum(data[4]), 12);
  });

  it("test case 6", () => {
    equal(maximumSum(data[5]), 10);
  });

  it("test case 7", () => {
    equal(maximumSum(data[6]), 835);
  });

  it("test case 8", () => {
    equal(maximumSum(data[7]), 973);
  });

  it("test case 9", () => {
    equal(maximumSum(data[8]), 1962583070);
  });

  it("test case 10", () => {
    equal(maximumSum(data[9]), 1996618848);
  });
});
