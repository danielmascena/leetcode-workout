/*
 * @lc app=leetcode id=2583 lang=typescript
 *
 * [2583] Kth Largest Sum in a Binary Tree
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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    const levels: number[] = [];
    const dfs = (node: TreeNode | null, depth = 0): void => {
        if (!node) {
            return;
        }
        const { val, left, right } = node;
        levels[depth] ??= 0;
        levels[depth] += val;
        dfs(left, depth + 1);
        dfs(right, depth + 1);
    };
    dfs(root);
    return levels.sort((a, b) => b - a).at(k - 1) ?? -1;
};
// @lc code=end

export default kthLargestLevelSum;