import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import minimumDiameterAfterMerge from "src/solutions/3203.find-minimum-diameter-after-merging-two-trees";
import data from "src/mocks/3203.mock";

describe("3203.", () => {
  it("case 1", () => {
    equal(minimumDiameterAfterMerge(...data[0]), 3);
  });

  it("case 2", () => {
    equal(minimumDiameterAfterMerge(...data[1]), 5);
  });

  it("case 545", () => {
    equal(minimumDiameterAfterMerge(...data[2]), 7);
  });
});
