/*
 * @lc app=leetcode id=951 lang=typescript
 *
 * [951] Flip Equivalent Binary Trees
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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const traverse = (node1: TreeNode | null, node2: TreeNode | null) => {
    if (!(node1 && root2)) {
      return !(node1 || root2);
    }
    const { left: l1 = null, right: r1 = null } = node1 ?? {};
    const { left: l2 = null, right: r2 = null } = node2 ?? {};

    if (
      !(
        (l1?.val === l2?.val && r2?.val === r1?.val) ||
        (l1?.val === r2?.val && r1?.val === l2?.val)
      )
    ) {
      return false;
    }
    return (
      (flipEquiv(l1, l2) || flipEquiv(l1, r2)) &&
      (flipEquiv(r1, r2) || flipEquiv(r1, l2))
    );
  };
  return root1?.val === root2?.val && traverse(root1, root2);
}
// @lc code=end

export default flipEquiv;
