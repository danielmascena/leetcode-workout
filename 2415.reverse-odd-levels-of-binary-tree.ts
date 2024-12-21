import { TreeNode } from "src/model/models";

/*
 * @lc app=leetcode id=2415 lang=typescript
 *
 * [2415] Reverse Odd Levels of Binary Tree
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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  const odds = new Map<number, TreeNode[]>();
  const dfs = (node: TreeNode | null, depth = 0) => {
    if (!node) {
      return;
    }
    if (depth % 2) {
      const arr = odds.get(depth) ?? [];
      arr.push(node);
      odds.set(depth, arr);
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root);
  odds.forEach((row) => {
    let l = 0;
    let r = row.length - 1;

    while (l < r) {
      [row[r].val, row[l].val] = [row[l].val, row[r].val];
      l++;
      r--;
    }
  });
  return root;
}
// @lc code=end

export default reverseOddLevels;

/**
 * Accepted
57/57 cases passed (12 ms)
Your runtime beats 37.93 % of typescript submissions
Your memory usage beats 79.31 % of typescript submissions (76 MB)
 */
