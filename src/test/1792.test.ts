import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maxAverageRatio from "1792.maximum-average-pass-ratio";
import data from "src/mocks/1792.mock";

describe("1792.", () => {
  it("case 1", () => {
    equal(maxAverageRatio(...data[0]), 0.78333);
  });

  it("case 2", () => {
    equal(maxAverageRatio(...data[1]), 0.53485);
  });
});
