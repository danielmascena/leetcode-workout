import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import flipEquiv from "src/solutions/951.flip-equivalent-binary-trees";
import data from "../mocks/951.mock";

describe("951.", () => {
  it("test case 1", () => {
    strictEqual(flipEquiv(...data[0]), true);
  });

  it("test case 2", () => {
    strictEqual(flipEquiv(...data[1]), true);
  });

  it("test case 3", () => {
    strictEqual(flipEquiv(...data[2]), false);
  });

  it("test case 73", () => {
    strictEqual(flipEquiv(...data[3]), false);
  });
});
