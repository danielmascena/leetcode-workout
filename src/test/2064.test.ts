import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import minimizedMaximum from "src/solutions/2064.minimized-maximum-of-products-distributed-to-any-store";
import data from "src/mocks/2064.mock";

describe("2064.", () => {
  test("case 1", () => {
    equal(minimizedMaximum(...data[0]), 3);
  });

  test("case 2", () => {
    equal(minimizedMaximum(...data[1]), 5);
  });

  test("case 3", () => {
    equal(minimizedMaximum(...data[2]), 100_000);
  });
});
