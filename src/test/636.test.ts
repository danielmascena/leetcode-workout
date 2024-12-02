import { describe, test } from "node:test";
import { deepStrictEqual } from "node:assert";

import exclusiveTime from "src/solutions/636.exclusive-time-of-functions";
import data from "src/mocks/636.mock";

describe("636.Exclusive Time of Functions", () => {
  test("case 1", () => {
    deepStrictEqual(exclusiveTime(...data[0]), [3, 4]);
  });

  test("case 2", () => {
    deepStrictEqual(exclusiveTime(...data[1]), [8]);
  });

  test("case 3", () => {
    deepStrictEqual(exclusiveTime(...data[2]), [7, 1]);
  });

  test("case 9", () => {
    deepStrictEqual(exclusiveTime(...data[3]), [6]);
  });
});
