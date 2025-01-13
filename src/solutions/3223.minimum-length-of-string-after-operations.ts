// [3223] Minimum Length of String After Operations
function minimumLength(s: string): number {
  const len = s.length;
  const lts = new Map<string, number[]>();
  let removed = 0;

  for (let i = 0; i < len; i++) {
    const c = s.charAt(i);
    const a = lts.get(c) ?? [];
    a.push(i);
    lts.set(c, a);
  }
  const arr = [...lts.keys()];

  while (arr.length) {
    const c = arr.pop()!;
    const a = lts.get(c) ?? [];

    if (a.length >= 3) {
      removed += 2;
      const na = a.slice(1, -1);
      lts.set(c, na);
      arr.push(c);
    } else {
      lts.delete(c);
    }
  }
  return len - removed;
}

export default minimumLength;

