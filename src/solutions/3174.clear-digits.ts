function clearDigits(s: string): string {
  const stack = [];

  for (const c of s) {
    if (Number.isNaN(+c) === false) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
}

export default clearDigits;
