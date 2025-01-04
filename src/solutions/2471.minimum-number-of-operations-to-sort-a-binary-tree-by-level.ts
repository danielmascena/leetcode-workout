/*
 * @lc app=leetcode id=2471 lang=typescript
 *
 * [2471] Minimum Number of Operations to Sort a Binary Tree by Level
 */
import { TreeNode } from "src/model/models";

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

function minimumOperations(root: TreeNode | null): number {
  const nodes: Record<string, TreeNode> = {};
  const levels = new Array<TreeNode[]>();
  const vals = new Array<number[]>();
  const sortFn = (pv: number, nx: number) => pv - nx;
  const dfs = (node: TreeNode | null, depth: number) => {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    if (val) {
      levels[depth] ??= [];
      vals[depth] ??= [];
      nodes[val] = node;
      levels[depth].push(node);
      vals[depth].push(val);
    }
    dfs(left, depth + 1);
    dfs(right, depth + 1);
  };
  let count = 0;
  dfs(root, 0);
  vals.forEach((row, idx) => {
    // get the current level
    const level = levels[idx];
    // iterate over the sorted values
    row.sort(sortFn).forEach((v, j) => {
      // lookup the current position
      const cur = level[j];
      if (cur.val !== v) {
        count++;
        const tmp = nodes[v];
        const { val } = cur;
        [cur.val, tmp.val] = [v, val];
        nodes[v] = cur;
        nodes[val] = tmp;
      }
    });
  });
  return count;
}
// @lc code=end

export default minimumOperations;
/**
 * Accepted
146/146 cases passed (256 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 25 % of typescript submissions (112.6 MB)
 */
