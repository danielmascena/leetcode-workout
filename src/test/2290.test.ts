import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import minimumObstacles from "src/solutions/2290.minimum-obstacle-removal-to-reach-corner";
import data from "src/mocks/2290.mock";

describe("2290.", () => {
  test("case 1", () => {
    equal(minimumObstacles(data[0]), 2);
  });

  test("case 2", () => {
    equal(minimumObstacles(data[1]), 0);
  });

  test("case 3", () => {
    equal(minimumObstacles(data[2]), 0);
  });

  test("case 4", () => {
    equal(minimumObstacles(data[3]), 1);
  });

  test("case 5", () => {
    equal(minimumObstacles(data[4]), 2);
  });

  test("case 6", () => {
    equal(minimumObstacles(data[5]), 3);
  });

  test("case 7", () => {
    equal(minimumObstacles(data[6]), 4);
  });

  test("case 8", () => {
    equal(minimumObstacles(data[7]), 5);
  });

  test("case 9", () => {
    equal(minimumObstacles(data[8]), 454);
  });

  test("case 10", () => {
    equal(minimumObstacles(data[9]), 159);
  });
});
