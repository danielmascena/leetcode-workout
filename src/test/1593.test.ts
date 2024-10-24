import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import maxUniqueSplit from "src/solutions/1593.split-a-string-into-the-max-number-of-unique-substrings";
import data from "../mocks/1593.mock";

describe("1593.", () => {
  it("test case 1", () => {
    strictEqual(maxUniqueSplit(data[0]), 5);
  });

  it("test case 2", () => {
    strictEqual(maxUniqueSplit(data[1]), 2);
  });

  it("test case 3", () => {
    strictEqual(maxUniqueSplit(data[2]), 1);
  });

  it("test case 60", () => {
    strictEqual(maxUniqueSplit(data[3]), 11);
  });
});
