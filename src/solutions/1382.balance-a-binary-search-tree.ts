/*
 * @lc app=leetcode id=1382 lang=typescript
 *
 * [1382] Balance a Binary Search Tree
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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const list = Array<number>();
    const traverse = (node: TreeNode | null) => {
        if (!node) return;

        traverse(node.left);
        list.push(node.val);
        traverse(node.right);
    };
    traverse(root);
    console.log(list)

    function mount(arr: number[]): TreeNode | null {
        const len = arr.length;
        
        if (len === 0) return null;

        let mid = Math.floor(len/2);
        
        if (mid && len % 2 === 0) {
            mid--;
        }
        const node = new TreeNode(arr[mid]);
        node.left = mount(arr.slice(0, mid));
        node.right = mount(arr.slice(mid+1));

        return node;
    }
    return mount(list);
};
// @lc code=end
/*
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
}

console.log(balanceBST(new TreeNode(2,new TreeNode(1,null,null),new TreeNode(3,null,null))))
console.log(balanceBST(new TreeNode(1,null,new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null,null))))));
*/