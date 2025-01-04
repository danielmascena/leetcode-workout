function minimumDiameterAfterMerge(
  edges1: number[][],
  edges2: number[][]
): number {
  const { max, min } = Math;
  type Graph = Map<number, number[]>;
  const graph1: Graph = new Map();
  const graph2: Graph = new Map();
  const leaves1 = new Set<number>();
  const leaves2 = new Set<number>();
  const dfs = (
    nd: number,
    grh: Graph,
    seen: Set<number> = new Set(),
    count = 0
  ): number => {
    seen.add(nd);
    return max(
      max(
        ...(grh.get(nd) ?? []).map((n) => {
          if (seen.has(n)) {
            return count;
          }
          return dfs(n as number, grh, new Set(seen), count + 1);
        })
      ),
      0
    );
  };
  let maxDepth1 = Infinity;
  let maxDepth2 = Infinity;
  let m = 0;
  let n = 0;

  for (const [a, b] of edges1) {
    const aa = graph1.get(a) ?? [];
    const ba = graph1.get(b) ?? [];
    aa?.push(b);
    ba?.push(a);
    graph1.set(a, aa);
    graph1.set(b, ba);
    n = max(n, a, b);
  }
  for (const [u, v] of edges2) {
    const ua = graph2.get(u) ?? [];
    const va = graph2.get(v) ?? [];
    ua.push(v);
    va.push(u);
    graph2.set(u, ua);
    graph2.set(v, va);
    m = max(m, u, v);
  }
  for (let i = 0; i <= n; i++) {
    maxDepth1 = min(maxDepth1, dfs(i, graph1));
  }
  for (let i = 0; i <= m; i++) {
    maxDepth2 = min(maxDepth2, dfs(i, graph2));
  }
  //  console.log(graph1, graph2, leaves1, leaves2, maxDepth1, maxDepth2);
  return maxDepth1 + maxDepth2 + 1;
}

export default minimumDiameterAfterMerge;
