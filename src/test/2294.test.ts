import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import partitionArray from "2294.partition-array-such-that-maximum-difference-is-k";
import data from "src/mocks/2294.mock";

describe("2294.", () => {
  it("case 1", () => {
    equal(partitionArray(...data[0]), 2);
  });

  it("case 2", () => {
    equal(partitionArray(...data[1]), 2);
  });

  it("case 3", () => {
    equal(partitionArray(...data[2]), 3);
  });

  it("case 63", () => {
    equal(partitionArray(...data[3]), 4);
  });
});
