import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import takeCharacters from "src/solutions/2516.take-k-of-each-character-from-left-and-right";
import data from "src/mocks/2516.mock";

describe("2516.", () => {
  test("case 1", () => {
    equal(takeCharacters(...data[0]), 8);
  });

  test("case 2", () => {
    equal(takeCharacters(...data[1]), -1);
  });

  test("case 3", () => {
    equal(takeCharacters(...data[2]), 0);
  });

  test("case 4", () => {
    equal(takeCharacters(...data[3]), -1);
  });

  test("case 5", () => {
    equal(takeCharacters(...data[4]), 4);
  });

  test("case 6", () => {
    equal(takeCharacters(...data[5]), 3);
  });

  test("case 7", () => {
    equal(takeCharacters(...data[6]), 6);
  });

  test("case 8", () => {
    equal(takeCharacters(...data[7]), 4);
  });

  test("case 9", () => {
    equal(takeCharacters(...data[8]), -1);
  });

  test("case 10", () => {
    equal(takeCharacters(...data[9]), 17347);
  });

  test("case 71", () => {
    equal(takeCharacters(...data[10]), 0);
  });

  test("case 90", () => {
    equal(takeCharacters(...data[11]), -1);
  });

  test("case 117", () => {
    equal(takeCharacters(...data[12]), 3);
  });
});
