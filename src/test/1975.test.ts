import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import maxMatrixSum from "src/solutions/1975.maximum-matrix-sum";
import data from "src/mocks/1975.mock";

describe("1975.", () => {
  test("case 1", () => {
    equal(maxMatrixSum(data[0]), 4);
  });

  test("case 2", () => {
    equal(maxMatrixSum(data[1]), 16);
  });

  test("case 11", () => {
    equal(maxMatrixSum(data[2]), 15);
  });

  test("case 3", () => {
    equal(maxMatrixSum(data[3]), 34);
  });

  test("case 4", () => {
    equal(maxMatrixSum(data[4]), 0);
  });

  test("case 5", () => {
    equal(maxMatrixSum(data[5]), 114);
  });

  test("case 6", () => {
    equal(maxMatrixSum(data[6]), 8);
  });

  test("case 7", () => {
    equal(maxMatrixSum(data[7]), 47);
  });

  test("case 8", () => {
    equal(maxMatrixSum(data[8]), 70000);
  });

  test.skip("case 9", () => {
    equal(maxMatrixSum(data[9]), 279314524);
  });
});
