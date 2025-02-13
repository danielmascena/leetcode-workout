import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import minOperations from "src/solutions/3066.minimum-operations-to-exceed-threshold-value-ii";
import data from "src/mocks/3066.mock";

describe("[3066] Minimum Operations to Exceed Threshold Value II", () => {
  it("test case 1", () => {
    equal(minOperations(...data[0]), 2);
  });

  it("test case 2", () => {
    equal(minOperations(...data[1]), 4);
  });

  it("test case 3", () => {
    equal(minOperations(...data[2]), 1);
  });

  it("test case 4", () => {
    equal(minOperations(...data[3]), 0);
  });

  it("test case 5", () => {
    equal(minOperations(...data[4]), 2);
  });

  it("test case 6", () => {
    equal(minOperations(...data[5]), 4);
  });

  it("test case 7", () => {
    equal(minOperations(...data[6]), 4);
  });

  it("test case 8", () => {
    equal(minOperations(...data[7]), 2);
  });

  it("test case 9", () => {
    equal(minOperations(...data[8]), 41);
  });

  it("test case 10", () => {
    equal(minOperations(...data[9]), 233);
  });
});
