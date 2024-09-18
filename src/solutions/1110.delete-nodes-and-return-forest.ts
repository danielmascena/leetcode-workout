/*
 * @lc app=leetcode id=1110 lang=typescript
 *
 * [1110] Delete Nodes And Return Forest
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

type delNodesReturnType = ReturnType<typeof delNodes>
//   ^?

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    type nodeElement = typeof root;
    //   ^?
    const dutList = new Set([root]);
    //    ^?
    const seekAndDestroy = (node: nodeElement, parent?: nodeElement, isLeft?: number): void => {
        if (!node) return;

        const { left, val, right } = node;

        if (to_delete.includes(val)) {
            dutList.delete(node);

            if (parent) {
                parent[isLeft ? 'right' : 'left'] = null;
            }
            if (left)
                dutList.add(left);
            if (right)
                dutList.add(right)
        }
        seekAndDestroy(left, node)
        seekAndDestroy(right, node, 1)
    };
    seekAndDestroy(root)
    return [...dutList];
};
// @lc code=end

/*
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode|null, right?:TreeNode|null){
        this.val = val === undefined ? 0 : val
        this.left = left === undefined?null:left
        this.right=right===undefined?null:right
    }
}
function t(a: (number|null)[]): TreeNode|null {
    const root = a.length?new TreeNode(a.shift()!):null
    const queue = new Array<TreeNode>();
    let node = root;

    while (node && a.length) {
        const l = a.shift();
        const r = a.shift();

        if (l) {
            const left = new TreeNode(l)
            node.left = left
            queue.push(left)
        }
        if (r) {
            const right = new TreeNode(r)
            node.right = right
            queue.push(right)
        }
        node = queue.shift()!
    }
    console.log(`
        ***
        ****`)
    return root
}
console.log(delNodes(t([1,2,3,4,5,6,7]), [3,5]))// [[1,2,null,4],[6],[7]]
console.log(delNodes(t([1,2,4,null,3]),[3]))// [[1,2,4]]
console.log(delNodes(t([1,2,null,4,3]),[2,3]))// [[1],[4]]...
console.log(delNodes(t([1,2,3,null,null,null,4]),[2,1]))
*/