import {describe, beforeEach, it} from "node:test";
import {equal} from "node:assert/strict";

import NumberContainers from "src/solutions/2349.design-a-number-container-system";
import data from "src/mocks/2349.mock";

describe("[2349] Design a Number Container System", () => {
  let numCont: NumberContainers;

  beforeEach(() => {
    numCont = new NumberContainers();
  });

  it("test case 1", () => {
    const [cmds, args] = data[0];
    const anss = [null, -1, null, null, null, null, 1, null, 2];

    for (let i = 1, len = cmds.length; i < len; i++) {
      equal(numCont[cmds[i] as "find" | "change"](...args[i]) ?? null, anss[i]);
    }
  });
});
