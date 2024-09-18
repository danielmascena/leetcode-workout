/*
 * @lc app=leetcode id=1038 lang=typescript
 *
 * [1038] Binary Search Tree to Greater Sum Tree
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

function bstToGst(root: TreeNode | null): TreeNode | null {
    const { max } = Math;
    const traverseBST = (node: TreeNode, acc = 0): number => {

        if (!node) return acc;

        const { val, right, left } = node;
        const rr = traverseBST(right, acc);
        const nv = rr + val;
        const rl = traverseBST(left, nv);
        node.val = nv;
        return max(rl, nv);
    }
    traverseBST(root);
    return root;
};
// @lc code=end

