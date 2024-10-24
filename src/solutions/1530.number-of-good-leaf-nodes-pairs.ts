/*
 * @lc app=leetcode id=1530 lang=typescript
 *
 * [1530] Number of Good Leaf Nodes Pairs
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

function countPairs(root: TreeNode | null, distance: number): number {
    const counter = new Set<string>();
    const parents = new Map<TreeNode, Set<TreeNode>>();
    const leaves = new Map<TreeNode, TreeNode[]>();
    const depths = new Map<string, number>();
    const traverse = (node: TreeNode|null, ancestors: TreeNode[], depth=0) => {
        if (!node) return;

        const { left, right, val } = node;

        if (!left && !right) {
            leaves.set(node, ancestors);
            ancestors.forEach((ancestor, idx) => {
                const children = parents.get(ancestor) ?? new Set();
                children.add(node)
                parents.set(ancestor, children)
                depths.set(`${ancestor.val}-${val}`, depth-idx)
            });
            return;
        }
        if (left)
            traverse(left, [...ancestors, node], depth + 1)
        if (right)
            traverse(right, [...ancestors, node], depth + 1)
    };
    traverse(root, [])
    /*
    console.log('parents:')
    for (const [p, s] of parents) {
        console.log(p, s)
    }
    console.log('leaves:')
    for (const [l, a] of leaves) {
        console.log(l, a)
    }
    */
    leaves.forEach((parr, leaf) => {
        parr.forEach((parent) => {
            const children = parents.get(parent);
            const k1 = `${parent.val}-${leaf.val}`
            const d1 = depths.get(k1)!
            children?.forEach(node => {
                const k2 = `${parent.val}-${node.val}`
                if (node !== leaf && d1 + depths.get(k2)! <= distance) {
                    counter.add(k1+k2)
                }
            })
        })
    })
    debugger;
    return counter.size / 2;
};
// @lc code=end

class TreeNode {
    constructor(public val?:number, public left?: TreeNode|null, public right?: TreeNode|null) {}
}

function t(arr: (number|null)[]): TreeNode|null {
    if (!arr.length) return null
    const root = new TreeNode(arr.shift()!)
    const queue = Array<TreeNode>();
    let node = root;

    while (node && arr.length) {
        const l = arr.shift();
        const r = arr.shift();

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
    return root
}
/*
console.log(countPairs(t([1,2,3,null,4]),3))// 1
console.log(countPairs(t([1,2,3,4,5,6,7]), 3))// 2
console.log(countPairs(t([7,1,4,6,null,5,3,null,null,null,null,null,2]), 3))// 1
*/
console.log(countPairs(t([15,66,55,97,60,12,56,null,54,null,49,null,9,null,null,null,null,null,90]), 5))// 3