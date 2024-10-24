/*
 * @lc app=leetcode id=2641 lang=typescript
 *
 * [2641] Cousins in Binary Tree II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from "src/model/models";

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  const levels = new Array<number>();
  const { max } = Math;
  const computeSum = (node = root, depth = 0) => {
    if (!node) {
        return;
    }
    const { val, left, right } = node;
    levels[depth] ??= 0;
    levels[depth] += val;
    computeSum(left, depth + 1);
    computeSum(right, depth + 1);
  };
  computeSum();
  const len = levels.length;
  const updateNodeValueWithCousins = (node: TreeNode | null, depth = 0, sibling = 0) => {
    if (depth < len && node) {
      const { val, left, right } = node;
      const lval = left?.val;
      const rval = right?.val;
      node.val = max(levels[depth] - val - sibling, 0);
      /* if mutating the object, save the previuos state. Avoid this ❌
      updateNodeValueWithCousins(left, depth + 1, right?.val);
      updateNodeValueWithCousins(right, depth + 1, left?.val);
      */
      updateNodeValueWithCousins(left, depth + 1, rval);
      updateNodeValueWithCousins(right, depth + 1, lval);
    }
  };
  updateNodeValueWithCousins(root);
  return root
}
// @lc code=end

export default replaceValueInTree;
