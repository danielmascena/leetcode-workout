import test, { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import {
  genArrayFromTree,
  genTreeFromArray,
  stringifyArray,
} from "src/utils/helpers";
import { TreeNode } from "src/model/models";

describe("Helper functions", () => {
  let root: TreeNode | null = null;

  it("convert an array into tree", () => {
    root = genTreeFromArray([5, 4, 9, 1, 10, null, 7]);
    strictEqual(root?.val, 5);
    strictEqual(root?.left?.val, 4);
    strictEqual(root?.right?.right?.val, 7);
  });

  it("convert a tree into array", () => {
    const arr = genArrayFromTree(root);
    console.log(arr);
    /*
      > a = [1,2,null,3]
        [ 1, 2, null, 3 ]
        > a+''
        '1,2,,3'
    */
    strictEqual(stringifyArray(arr), "5,4,9,1,10,,7");
  });
});
