import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import rotateTheBox from "src/solutions/1861.rotating-the-box";
import data from "src/mocks/1861.mock";

describe("1861.", () => {
  test("case 1", () => {
    deepEqual(rotateTheBox(data[0]), [["."], ["#"], ["#"]]);
  });

  test("case 1", () => {
    deepEqual(rotateTheBox(data[1]), [
      ["#", "."],
      ["#", "#"],
      ["*", "*"],
      [".", "."],
    ]);
  });

  test("case 1", () => {
    deepEqual(rotateTheBox(data[2]), [
      [".", "#", "#"],
      [".", "#", "#"],
      ["#", "#", "*"],
      ["#", "*", "."],
      ["#", ".", "*"],
      ["#", ".", "."],
    ]);
  });
});
