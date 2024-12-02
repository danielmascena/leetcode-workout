function shortestDistanceAfterQueries(
  n: number,
  queries: number[][]
): number[] {
  const { min } = Math;
  const grpPaths = Array.from({ length: n }, (_, i) => [i + 1]);
  let shortPath = n;
  const search = (idx: number, count: number): number => {
    if (count >= shortPath) {
      return shortPath;
    }
    if (idx === n) {
      shortPath = count;
      return count;
    }
    count++;
    return grpPaths[idx].reduce<number>(
      (ttl, ndx) => min(ttl, search(ndx, count)),
      n
    );
  };

  return queries.map(([u, v]) => {
    grpPaths[u].push(v);
    return search(0, -1);
  });
}

export default shortestDistanceAfterQueries;
