import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minGroups from "src/solutions/2406.divide-intervals-into-minimum-number-of-groups";
import data from "../mocks/2406.mock";

describe("2406.", () => {
  it("test case 1", () => {
    strictEqual(minGroups(data[0]), 3);
  });

  it("test case 2", () => {
    strictEqual(minGroups(data[1]), 1);
  });

  it("test case 29", () => {
    strictEqual(minGroups(data[2]), 36774);
  });
});
