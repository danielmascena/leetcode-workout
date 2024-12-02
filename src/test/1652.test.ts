import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import decrypt from "src/solutions/1652.defuse-the-bomb";
import data from "src/mocks/1652.mock";

describe("1652.", () => {
  test("case 1", () => {
    deepEqual(decrypt(...data[0]), [12, 10, 16, 13]);
  });

  test("case 2", () => {
    deepEqual(decrypt(...data[1]), [0, 0, 0, 0]);
  });

  test("case 3", () => {
    deepEqual(decrypt(...data[2]), [12, 5, 6, 13]);
  });

  test("case 44", () => {
    deepEqual(
      decrypt(...data[3]),
      [22, 26, 22, 28, 29, 22, 19, 22, 18, 21, 28, 19]
    );
  });
});
