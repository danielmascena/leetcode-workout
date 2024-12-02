import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import countSquares from "src/solutions/1277.count-square-submatrices-with-all-ones";
import data from "../mocks/1277.mock";

describe("1277.", () => {
  test("test case 1", () => {
    strictEqual(countSquares(data[0]), 15);
  });

  test("test case 2", () => {
    strictEqual(countSquares(data[1]), 7);
  });

  test("test case 28", () => {
    strictEqual(countSquares(data[2]), 42206);
  });
});
