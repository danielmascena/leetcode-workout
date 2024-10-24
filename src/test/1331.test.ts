import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import arrayRankTransform from "src/solutions/1331.rank-transform-of-an-array";
import data from "../mocks/1331.mock";
import { stringifyArray } from "src/utils/helpers";

describe("1331.Rank Transform of an Array", () => {
  it("test case 1", () => {
    strictEqual(stringifyArray(arrayRankTransform(data[0])), "4,1,2,3");
  });

  it("test case 2", () => {
    strictEqual(stringifyArray(arrayRankTransform(data[1])), "1,1,1");
  });

  it("test case 3", () => {
    strictEqual(
      stringifyArray(arrayRankTransform(data[2])),
      "5,3,4,2,8,6,7,1,3"
    );
  });
});
