import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import maxEqualRowsAfterFlips from "src/solutions/1072.flip-columns-for-maximum-number-of-equal-rows";
import data from "src/mocks/1072.mock";

describe("1072.", () => {
  test("case 1", () => {
    equal(maxEqualRowsAfterFlips(data[0]), 1);
  });

  test("case 2", () => {
    equal(maxEqualRowsAfterFlips(data[1]), 2);
  });

  test("case 3", () => {
    equal(maxEqualRowsAfterFlips(data[2]), 2);
  });

  test("case 4", () => {
    equal(maxEqualRowsAfterFlips(data[3]), 1);
  });

  test("case 5", (t) => {
    equal(maxEqualRowsAfterFlips(data[4]), 7);
  });

  test("case 6", () => {
    equal(maxEqualRowsAfterFlips(data[5]), 6);
  });

  test("case 8", () => {
    equal(maxEqualRowsAfterFlips(data[6]), 2);
  });

  test("case 7", () => {
    equal(maxEqualRowsAfterFlips(data[7]), 2);
  });

  test("case 9", () => {
    equal(maxEqualRowsAfterFlips(data[8]), 2);
  });

  test("case 10", () => {
    equal(maxEqualRowsAfterFlips(data[9]), 5);
  });

  test("case 11", () => {
    equal(maxEqualRowsAfterFlips(data[10]), 1);
  });
});
