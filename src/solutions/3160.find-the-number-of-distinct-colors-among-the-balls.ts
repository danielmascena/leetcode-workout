function queryResults(limit: number, queries: number[][]): number[] {
  let counter = 0;
  const qutCol = new Map<number, number>();
  const pos2Col = new Map<number, number>();
  return queries.map(([n, c]) => {
    const w = pos2Col.get(n);

    if (w === c) {
      return counter;
    }
    const q1 = qutCol.get(c) ?? 0;

    if (!qutCol.has(c)) {
      counter++;
    }
    if (w !== undefined) {
      const q2 = qutCol.get(w)! - 1;

      if (!q2) {
        qutCol.delete(w);
        counter--;
      } else {
        qutCol.set(w, q2);
      }
    }
    qutCol.set(c, q1+1);
    pos2Col.set(n, c);
    return counter;
  }) as number[];
}

export default queryResults;
/**
 * Accepted
551 / 551 testcases passed
Runtime 64ms Beats 61.54%
Memory 89.64MB Beats 100.00%
*/