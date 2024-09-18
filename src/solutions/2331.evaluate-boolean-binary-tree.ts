/*
 * @lc app=leetcode id=2331 lang=typescript
 *
 * [2331] Evaluate Boolean Binary Tree
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

function evaluateTree(root: TreeNode | null): boolean {
    return function dfs({ left, right, val } = root): boolean {
        if (!left && !right) {
            return !!val;
        }
        return val === 2 ? dfs(left) || dfs(right) : dfs(left) && dfs(right); 
    }();
};
// @lc code=end

