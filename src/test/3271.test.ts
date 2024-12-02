import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import stringHash from "src/solutions/3271.hash-divided-string";
import data from "src/mocks/3271.mock";

describe("3271.", () => {
  test("case 1", () => {
    equal(stringHash(...data[0]), "bf");
  });
  test("case 2", () => {
    equal(stringHash(...data[1]), "i");
  });
});
