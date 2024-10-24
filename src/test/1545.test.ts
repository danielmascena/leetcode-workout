import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import findKthBit from "src/solutions/1545.find-kth-bit-in-nth-binary-string";
import data from "../mocks/1545.mock";

describe("1545.", () => {
  it("test case 1", () => {
    strictEqual(findKthBit(...data[0]), "0");
  });

  it("test case 2", () => {
    strictEqual(findKthBit(...data[1]), "1");
  });
});
