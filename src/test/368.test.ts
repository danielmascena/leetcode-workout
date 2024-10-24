import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import lexicalOrder from "src/solutions/386.lexicographical-numbers";
import data from "../mocks/386.mock";
import { stringifyArray } from "src/utils/helpers";

describe("368.Lexicographical Numbers", () => {
  it.skip("test case 1", () => {
    strictEqual(
      stringifyArray(lexicalOrder(data[0])),
      "1,10,11,12,13,2,3,4,5,6,7,8,9"
    );
  });
  it.skip("test case 2", () => {
    strictEqual(stringifyArray(lexicalOrder(data[1])), "1,2");
  });
});
