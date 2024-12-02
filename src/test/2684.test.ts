import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import maxMoves from "src/solutions/2684.maximum-number-of-moves-in-a-grid";
import data from "src/mocks/2684.mock";

describe("2684.", () => {
  test("test case 1", () => {
    strictEqual(maxMoves(data[0]), 3);
  });

  test("test case 2", () => {
    strictEqual(maxMoves(data[1]), 0);
  });

  test("test case 190", () => {
    strictEqual(maxMoves(data[2]), 49);
  });
});
