import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import smallestRange from "src/solutions/632.smallest-range-covering-elements-from-k-lists";
import data from "../mocks/632.mock";
import { stringifyArray } from "src/utils/helpers";

describe("632.", () => {
  it("test case 1", () => {
    strictEqual(stringifyArray(smallestRange(data[0])), "20,24");
  });

  it("test case 2", () => {
    strictEqual(stringifyArray(smallestRange(data[1])), "1,1");
  });
});
