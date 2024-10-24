import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import { stringifyArray } from "src/utils/helpers";
import xorQueries from "src/solutions/1310.xor-queries-of-a-subarray";
import data from "../mocks/1310.mock";

describe("1310.XOR Queries of a Subarray", () => {
  it("test case 1", () => {
    const output = stringifyArray<number>(xorQueries(...data[0]));
    strictEqual(output, "2,7,14,8");
  });

  it("test case 2", () => {
    const output = stringifyArray<number>(xorQueries(...data[1]));
    strictEqual(output, "8,0,4,4");
  });
});
