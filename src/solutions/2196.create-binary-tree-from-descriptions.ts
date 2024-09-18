/*
 * @lc app=leetcode id=2196 lang=typescript
 *
 * [2196] Create Binary Tree From Descriptions
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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
    const mapNodes = new Map<number, TreeNode>();
    const vals = new Set<number>();
    const children = new Set<number>();
    descriptions.forEach(([pVal, cVal, isLeft]) => {
        const parent = mapNodes.get(pVal) ?? new TreeNode(pVal);
        const current = mapNodes.get(cVal) ?? new TreeNode(cVal);
        parent[isLeft ? 'left' : 'right'] = current; 
        children.add(cVal);
        mapNodes.set(pVal, parent);
        mapNodes.set(cVal, current);
        vals.add(pVal).add(cVal);
    });
    children.forEach(val => mapNodes.delete(val))
    return mapNodes.values().next().value;
};
// @lc code=end
/*
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?:number,left?:TreeNode|null,right?:TreeNode|null){
        this.val=(val===undefined?0:val)
        this.left=(left===undefined?null:left)
        this.right=(right===undefined?null:right)
    }
}
console.log(createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]))
console.log(createBinaryTree([[1,2,1],[2,3,0],[3,4,1]]))
*/