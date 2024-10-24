/*
 * @lc app=leetcode id=1106 lang=typescript
 *
 * [1106] Parsing A Boolean Expression
 */

// @lc code=start
function parseBoolExpr(expression: string): boolean {
  if (expression.length === 1) {
    return expression[0] === "t" ? true : false;
  }
  const cache = new Map<string, boolean>();
  const operations = {
    "&": (arr: boolean[]) => arr.reduce((acc: boolean, cur: boolean) => acc && cur),
    "|": (arr: boolean[]) => arr.reduce((acc: boolean, cur: boolean) => acc || cur),
    "!": (arr: boolean[]) => !arr.pop(),
  };
  type ops = "&" | "|" | "!";
  const stack: ops[] = [];
  let values: boolean[] = [];
  let idx = 0;
  const df = (oper: string, arr: string[]): boolean => {
    const bools: boolean[] = [];
    let c = arr.shift();

    while (c && c !== ')') {
        if (c !== ',' && c !== '(') {
            if (c == 'f' || c == 't') {
                bools.push(c == 't');
            } else {
                bools.push(df(c!, arr));
            }
        }
        c = arr.shift();
    }
    return operations[oper as ops](bools);
  };
  const a = Array.from(expression);
  return df(a.shift()!, a);
  /*
  for (const c of expression) {
    switch (c) {
      case "&":
      case "|":
      case "!":
        stack.push();
        stack[idx] = c;
        break;
      case "(":
        stack.push();
        idx++;
        break;
      case ",":
        break;
      case ")":
        const op = stack.pop()!;

        if (op === "!") {
          //const r = !vals.pop();
        } else {
          //const r = vals.reduce(operations[op]);
        }
        break;
      default:
        //vals.push(c == "f" ? true : false);
    }
  }
  */
}
// @lc code=end

export default parseBoolExpr;
