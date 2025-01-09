import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import prefixCount from "src/solutions/2185.counting-words-with-a-given-prefix";
import data from "src/mocks/2185.mock";

describe("2185.", () => {
  it("case 1", () => {
    equal(prefixCount(...data[0]), 2);
  });

  it("case 2", () => {
    equal(prefixCount(...data[1]), 0);
  });
});
