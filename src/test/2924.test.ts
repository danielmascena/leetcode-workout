import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import findChampion from "src/solutions/2924.find-champion-ii";
import data from "src/mocks/2924.mock";

describe("2924.", () => {
  test("case 1", () => {
    equal(findChampion(...data[0]), 0);
  });

  test("case 2", () => {
    equal(findChampion(...data[1]), -1);
  });

  test("case 3", () => {
    equal(findChampion(...data[2]), -1);
  });

  test("case 4", () => {
    equal(findChampion(...data[3]), -1);
  });

  test("case 5", () => {
    equal(findChampion(...data[4]), 1);
  });

  test("case 6", () => {
    equal(findChampion(...data[5]), 1);
  });

  test("case 7", () => {
    equal(findChampion(...data[6]), -1);
  });

  test("case 8", () => {
    equal(findChampion(...data[7]), 6);
  });

  test("case 9", () => {
    equal(findChampion(...data[8]), 41);
  });

  test("case 10", () => {
    equal(findChampion(...data[9]), 82);
  });
});
