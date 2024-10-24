import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import { stringifyArray } from "src/utils/helpers";
import diffWaysToCompute from "src/solutions/241.different-ways-to-add-parentheses";
import data from "../mocks/241.mock";

describe("241.Different Ways to Add Parentheses", () => {
  it.skip("test case 1", () => {
    strictEqual(stringifyArray(diffWaysToCompute(data[0])), "0,2");
  });

  it.skip("test case 2", () => {
    strictEqual(
      stringifyArray(diffWaysToCompute(data[1])),
      "-34,-14,-10,-10,10"
    );
  });
});
