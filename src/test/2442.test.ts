import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import countDistinctIntegers from "src/solutions/2442.count-number-of-distinct-integers-after-reverse-operations";
import data from "src/mocks/2442.mock";

describe("2442.", () => {
  test("case 1", () => {
    equal(countDistinctIntegers(data[0]), 6);
  });

  test("case 2", () => {
    equal(countDistinctIntegers(data[1]), 1);
  });

  test("case 35", () => {
    equal(countDistinctIntegers(data[2]), 1753);
  });
});
