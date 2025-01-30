import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import maxSum from "src/solutions/2428.maximum-sum-of-an-hourglass";
import data from "src/mocks/2428.mock";

describe("[2428] Maximum Sum of an Hourglass", () => {
  it("test case 1", () => {
    equal(maxSum(data[0]), 30);
  });

  it("test case 2", () => {
    equal(maxSum(data[1]), 35);
  });
});
