import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import canMakeSubsequence from "2825.make-string-a-subsequence-using-cyclic-increments";
import data from "src/mocks/2825.mock";

describe("2825.", () => {
  test("case 1", () => {
    equal(canMakeSubsequence(...data[0]), true);
  });

  test("case 2", () => {
    equal(canMakeSubsequence(...data[1]), true);
  });

  test("case 3", () => {
    equal(canMakeSubsequence(...data[2]), false);
  });

  test("case 4", () => {
    equal(canMakeSubsequence(...data[3]), false);
  });

  test("case 5", () => {
    equal(canMakeSubsequence(...data[4]), true);
  });

  test("case 6", () => {
    equal(canMakeSubsequence(...data[5]), false);
  });

  test("case 7", () => {
    equal(canMakeSubsequence(...data[6]), false);
  });

  test("case 8", () => {
    equal(canMakeSubsequence(...data[7]), true);
  });

  test("case 9", () => {
    equal(canMakeSubsequence(...data[8]), false);
  });

  test("case 10", () => {
    equal(canMakeSubsequence(...data[9]), true);
  });

  test("case 11", () => {
    equal(canMakeSubsequence(...data[10]), true);
  });
});
