import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import minimumTime from "src/solutions/2577.minimum-time-to-visit-a-cell-in-a-grid";
import data from "src/mocks/2577.mock";

describe("2577.", () => {
  test.skip("case 1", () => {
    equal(minimumTime(data[0]), 7);
  });

  test.skip("case 2", () => {
    equal(minimumTime(data[1]), -1);
  });

  test.skip("case 3", () => {
    equal(minimumTime(data[2]), 6);
  });

  test.skip("case 4", () => {
    equal(minimumTime(data[3]), -1);
  });

  test.skip("case 5", () => {
    equal(minimumTime(data[4]), 8);
  });

  test.skip("case 6", () => {
    equal(minimumTime(data[5]), 7);
  });

  test.skip("case 7", () => {
    equal(minimumTime(data[6]), 10);
  });

  test("case 8", () => {
    equal(minimumTime(data[7]), 89);
  });

  test.skip("case 9", () => {
    equal(minimumTime(data[8]), 42);
  });

  test.skip("case 10", () => {
    equal(minimumTime(data[9]), 91199);
  });
});
