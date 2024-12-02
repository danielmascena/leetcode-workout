import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import minChanges from "src/solutions/2914.minimum-number-of-changes-to-make-binary-string-beautiful";
import data from "src/mocks/2914.mock";

describe("2914.", () => {
  test("case 1", () => {
    equal(minChanges(data[0]), 2);
  });

  test("case 2", () => {
    equal(minChanges(data[1]), 1);
  });

  test("case 3", () => {
    equal(minChanges(data[2]), 0);
  });

  test("case 4", () => {
    equal(minChanges(data[3]), 1);
  });

  test("case 5", () => {
    equal(minChanges(data[4]), 0);
  });

  test("case 6", () => {
    equal(minChanges(data[5]), 3);
  });

  test("case 7", () => {
    equal(minChanges(data[6]), 3);
  });

  test("case 8", () => {
    equal(minChanges(data[7]), 3);
  });

  test("case 9", () => {
    equal(minChanges(data[8]), 8);
  });

  test("case 10", () => {
    equal(minChanges(data[9]), 141);
  });

  test("case 11", () => {
    equal(minChanges(data[10]), 7498);
  });
});
