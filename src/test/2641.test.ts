import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import replaceValueInTree from "src/solutions/2641.cousins-in-binary-tree-ii";
import data from "../mocks/2641.mock";
import {
  stringifyArray,
  genArrayFromTree,
  genTreeFromArray,
} from "src/utils/helpers";

describe("2641.", () => {
  it("test case 1", () => {
    strictEqual(
      stringifyArray(
        genArrayFromTree(replaceValueInTree(genTreeFromArray(data[0])))
      ),
      "0,0,0,7,7,,11"
    );
  });

  it("test case 2", () => {
    strictEqual(
      stringifyArray(
        genArrayFromTree(replaceValueInTree(genTreeFromArray(data[1])))
      ),
      "0,0,0"
    );
  });
});
