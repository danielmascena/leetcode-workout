/*
 * @lc app=leetcode id=1325 lang=typescript
 *
 * [1325] Delete Leaves With a Given Value
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

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    const dfs = (node: TreeNode): boolean => {
        let { left, val, right } = node;

        if (left && dfs(left)) {
            node.left = left = null;
        }
        if (right && dfs(right)) {
            node.right = right = null;
        }
        if (val === target && !left && !right) {
            return true;
        }
        return false;
    };
    return dfs(root) ? null : root;
};
// @lc code=end

