import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import kthLargestLevelSum from "src/solutions/2583.kth-largest-sum-in-a-binary-tree";
import data from "../mocks/2583.mock";
import { generateTreeIntoArray } from "src/utils/helpers";

describe("2583.", () => {
  it("test case 1", () => {
    const [arr, k] = data[0];
    const head = generateTreeIntoArray(arr);
    strictEqual(kthLargestLevelSum(head, k), 13);
  });

  it("test case 2", () => {
    const [arr, k] = data[1];
    const head = generateTreeIntoArray(arr);
    strictEqual(kthLargestLevelSum(head, k), 3);
  });
});
