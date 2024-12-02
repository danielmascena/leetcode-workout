import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import checkIfExist from "src/solutions/1346.check-if-n-and-its-double-exist";
import data from "src/mocks/1346.mock";

describe("1346.", () => {
  test("case 1", () => {
    equal(checkIfExist(data[0]), true);
  });

  test("case 2", () => {
    equal(checkIfExist(data[1]), false);
  });

  test("case 95", () => {
    equal(checkIfExist(data[2]), true);
  });

  test("case 104", () => {
    equal(checkIfExist(data[3]), true);
  });

  test("case 3", () => {
    equal(checkIfExist(data[4]), false);
  });

  test("case 4", () => {
    equal(checkIfExist(data[5]), false);
  });

  test("case 5", () => {
    equal(checkIfExist(data[6]), true);
  });

  test("case 6", () => {
    equal(checkIfExist(data[7]), true);
  });

  test("case 7", () => {
    equal(checkIfExist(data[8]), true);
  });

  test("case 8", () => {
    equal(checkIfExist(data[9]), true);
  });

  test("case 9", () => {
    equal(checkIfExist(data[10]), false);
  });
});
