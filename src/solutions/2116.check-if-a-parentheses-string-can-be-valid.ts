/*
 * @lc app=leetcode id=2116 lang=typescript
 *
 * [2116] Check if a Parentheses String Can Be Valid
 */

// @lc code=start
function canBeValid(s: string, locked: string): boolean {
  const possibleValidS = [] as string[];
  const {length: len} = s;
  const locksIndex = new Set<number>();
  const dp = (i = 0, t = "") => {
    if (i === len) {
      possibleValidS.push(t);
      return;
    }
    const p = t.at(-1);
    const isPre = i <= len / 2;
    if (p === ")" || isPre) dp(i + 1, t + "(");
    if (p === "(" || !isPre) dp(i + 1, t + ")");
  };
  const isValidSequence = (seq: string): boolean => {
    const stack = [] as string[];

    for (const c of seq) {
      if (c === ")" && stack.at(-1) === "(") {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
    return !stack.length;
  };
  dp();
  const validsSeq = possibleValidS.filter(isValidSequence);

  for (let i = 0; i < len; i++) {
    const c = locked[i];

    if (c === "1") {
      locksIndex.add(i);
    }
  }
  return validsSeq.some((vs) => {
    for (let i = 0; i < len; i++) {
      if (locksIndex.has(i) && s[i] !== vs[i]) {
        return false;
      }
    }
    return true;
  });
}
// @lc code=end

export default canBeValid;
