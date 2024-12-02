import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import countUnguarded from "src/solutions/2257.count-unguarded-cells-in-the-grid";
import data from "src/mocks/2257.mock";

describe("2257.", () => {
  test("case 1", () => {
    equal(countUnguarded(...data[0]), 7);
  });

  test("case 2", () => {
    equal(countUnguarded(...data[1]), 4);
  });

  test("case 3", () => {
    equal(countUnguarded(...data[2]), 0);
  });

  test("case 4", () => {
    equal(countUnguarded(...data[3]), 3);
  });

  test("case 5", () => {
    equal(countUnguarded(...data[4]), 28);
  });

  test("case 6", () => {
    equal(countUnguarded(...data[5]), 1);
  });

  test("case 7", () => {
    equal(countUnguarded(...data[6]), 6266);
  });

  test("case 8", () => {
    equal(countUnguarded(...data[7]), 1459);
  });

  test("case 9", () => {
    equal(countUnguarded(...data[8]), 835);
  });

  test("case 10", () => {
    equal(countUnguarded(...data[9]), 0);
  });

  test("case 11", () => {
    equal(countUnguarded(...data[10]), 0);
  });

  test("case 12", () => {
    equal(countUnguarded(...data[11]), 0);
  });
});
