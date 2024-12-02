import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import processQueries from "src/solutions/1409.queries-on-a-permutation-with-key";
import data from "src/mocks/1409.mock";

describe("1409.", () => {
  test("case 1", () => {
    deepEqual(processQueries(...data[0]), [2, 1, 2, 1]);
  });

  test("case 2", () => {
    deepEqual(processQueries(...data[1]), [3, 1, 2, 0]);
  });

  test("case 3", () => {
    deepEqual(processQueries(...data[2]), [6, 5, 0, 7, 5]);
  });
});
