/*
 * @lc app=leetcode id=2458 lang=typescript
 *
 * [2458] Height of Binary Tree After Subtree Removal Queries
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

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  const { max } = Math;
  const queriesSet = new Set(queries);
  const queriesMappedNodes = new Map<number, TreeNode>();
  const nodes = new Array<[TreeNode, number]>();
  const nodesWithChildren = new Map<TreeNode, Set<TreeNode>>();
  const dfs = (node = root, depth = 0): Set<TreeNode> => {
    const { val, left, right } = node!;

    if (queriesSet.has(val as number)) {
      queriesMappedNodes.set(val as number, node!);
    }
    nodes.push([node!, depth]);
    let lchildren = new Set<TreeNode>();
    let rchildren = new Set<TreeNode>();

    if (left) lchildren = dfs(left, depth + 1);
    if (right) rchildren = dfs(right, depth + 1);

    const allChildren = new Set([...lchildren, ...rchildren]);
    const toBeRemoved = new Set([...allChildren, node!]);
    nodesWithChildren.set(node!, toBeRemoved);
    return toBeRemoved;
  };
  if (root) dfs();

  return queries.map((query) => {
    const target = queriesMappedNodes.get(query);
    const removedNodes = nodesWithChildren.get(target!);
    let deeper = 0;

    for (const [node, depth] of nodes) {
      if (!removedNodes?.has(node)) {
        deeper = max(deeper, depth);
      }
    }
    return deeper;
  });
  /*
  const cache = new Map<number, number>();
  const dfs = (
    node: TreeNode | undefined | null,
    depth: number,
    query: number
  ): number => {
    if (!node || node?.val === query) {
      return depth - 1;
    }
    const lval = dfs(node.left, depth + 1, query);
    const rval = dfs(node.right, depth + 1, query);
    return max(lval, rval);
  };
  return queries.map((query) => {
    if (cache.has(query)) {
      return cache.get(query) as number;
    }
    const mv = dfs(root, 0, query);
    cache.set(query, mv);
    return mv;
  });
  */
}
// @lc code=end

export default treeQueries;
