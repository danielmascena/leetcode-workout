/*
 * @lc app=leetcode id=2096 lang=typescript
 *
 * [2096] Step-By-Step Directions From a Binary Tree Node to Another
 */

import { root } from "lodash";

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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    const parentTable = new Map<TreeNode, TreeNode|null>();
    const visited = new WeakSet<TreeNode>();
    let sNode: TreeNode|undefined;
    let dNode: TreeNode|undefined;
    const traverse = (node: TreeNode|null, parent:TreeNode|null): void => {
        if (!node) return

        const { val, left, right } = node
        parentTable.set(node, parent)

        if (val == startValue) sNode=node
        if (val == destValue) dNode=node

        traverse(left,node)
        traverse(right,node)
    }
    traverse(root,null);
    let pathResult='';
    let done = false;
    const seekNDestroy = (node: TreeNode, path: string) => {
        if (!node || done || visited.has(node)) return;

        const {left, right} = node;
        const parent = parentTable.get(node);
        visited.add(node);

        if (node === dNode) {
            pathResult = path;
            done = true;
            return;
        }
        if (parent) {
            seekNDestroy(parent, path+'U')
        }
        if (left) {
            seekNDestroy(left, path+'L')
        }
        if (right) {
            seekNDestroy(right, path+'R')
        }
    };
    seekNDestroy(sNode!,'')
    return pathResult;
};
// @lc code=end
/*
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val=0,left=null,right=null) {
        this.val=val;
        this.left=left;
        this.right=right;
    }
}
function trans(arr: (number|null)[], s: number, t: number):void {
    if (!arr.length) return ;

    const root = new TreeNode(arr.shift()!)
    const queue = Array<TreeNode>();
    let node = root;

    while (arr.length && node) {
        const l = arr.shift();
        const r = arr.shift();
        if (l) {
            const left = new TreeNode(l);
            node.left=left;
            queue.push(left);
        }
        if (r) {
            const right = new TreeNode(r);
            node.right=right;
            queue.push(right);
        }
        node = queue.shift()!;
    }
    console.log(getDirections(root, s, t))
}
console.log(trans([5,1,2,3,null,6,4],3,6))// "UURL"
console.log(trans([5,1,2,3,null,6,4],4,6))// "UURRUL"
console.log(trans([2,1],2,1)) // "L"
console.log(trans([1,null,10,12,13,4,6,null,15,null,null,5,11,null,2,14,7,null,8,null,null,null,9,3],6,15))
// "UURR"...
console.log(trans([1,2],2,1))// "U"...
console.log(trans([5,8,3,1,null,4,7,6,null,null,null,null,null,null,2],4,3))
// "U"...
console.log(trans([2,8,9,7,5,1,6,null,null,null,null,null,4,null,3],9,3))
// "RR"...
console.log(trans([12,3,10,4,9,null,null,null,5,13,2,6,11,8,null,null,7,null,null,null,null,null,null,1],8,7))
// "UURR"...
*/