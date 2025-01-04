import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import minimumOperations from "2471.minimum-number-of-operations-to-sort-a-binary-tree-by-level";
import data from "src/mocks/2471.mock";

describe("2471.", () => {
  it("case 1", () => {
    equal(minimumOperations(data[0]), 3);
  });

  it("case 2", () => {
    equal(minimumOperations(data[1]), 3);
  });

  it("case 3", () => {
    equal(minimumOperations(data[2]), 0);
  });

  it("case 4", () => {
    equal(minimumOperations(data[3]), 0);
  });

  it("case 5", () => {
    equal(minimumOperations(data[4]), 0);
  });

  it("case 6", () => {
    equal(minimumOperations(data[5]), 2);
  });

  it("case 7", () => {
    equal(minimumOperations(data[6]), 2);
  });

  it("case 8", () => {
    equal(minimumOperations(data[7]), 3);
  });

  it("case 9", () => {
    equal(minimumOperations(data[8]), 18);
  });

  it("case 10", () => {
    equal(minimumOperations(data[9]), 55);
  });

  it("case 11", () => {
    equal(minimumOperations(data[10]), 1215);
  });
});
