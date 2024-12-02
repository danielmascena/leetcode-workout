import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import rotateString from "src/solutions/796.rotate-string";
import data from "src/mocks/796.mock";

describe("796.", () => {
  test("case 1", () => {
    strictEqual(rotateString(...data[0]), true);
  });

  test("case 2", () => {
    strictEqual(rotateString(...data[1]), false);
  });

  test("case 3", () => {
    strictEqual(rotateString(...data[2]), true);
  });

  test("case 4", () => {
    strictEqual(rotateString(...data[3]), false);
  });

  test("case 5", () => {
    strictEqual(rotateString(...data[4]), false);
  });

  test("case 6", () => {
    strictEqual(rotateString(...data[5]), false);
  });

  test("case 7", () => {
    strictEqual(rotateString(...data[6]), false);
  });

  test("case 8", () => {
    strictEqual(rotateString(...data[7]), true);
  });

  test("case 9", () => {
    strictEqual(rotateString(...data[8]), true);
  });

  test("case 10", () => {
    strictEqual(rotateString(...data[9]), true);
  });

  test("test 49", () => {
    strictEqual(rotateString(...data[10]), false);
  });
});
