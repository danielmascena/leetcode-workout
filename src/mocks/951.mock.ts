import { genTreeFromArray } from "src/utils/helpers";
import { TreeNode } from "src/model/models";

export default [
  [
    genTreeFromArray([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]),
    genTreeFromArray([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]),
  ],
  [genTreeFromArray([]), genTreeFromArray([])],
  [genTreeFromArray([]), genTreeFromArray([1])],
  [
    genTreeFromArray([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]),
    genTreeFromArray([99, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]),
  ],
] as [TreeNode, TreeNode][];
