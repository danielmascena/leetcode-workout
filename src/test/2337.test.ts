import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import canChange from "2337.move-pieces-to-obtain-a-string";
import data from "src/mocks/2337.mock";

describe("2337.", () => {
  test("case 1", () => {
    equal(canChange(...data[0]), true);
  });

  test("case 2", () => {
    equal(canChange(...data[1]), false);
  });

  test("case 3", () => {
    equal(canChange(...data[2]), false);
  });

  test("case 4", () => {
    equal(canChange(...data[3]), false);
  });

  test("case 5", () => {
    equal(canChange(...data[4]), false);
  });

  test("case 7", () => {
    equal(canChange(...data[6]), false);
  });

  test("case 8", () => {
    equal(canChange(...data[7]), false);
  });

  test("case 9", () => {
    equal(canChange(...data[8]), false);
  });

  test("case 10", () => {
    equal(canChange(...data[9]), true);
  });

  test("case 11", () => {
    equal(canChange(...data[10]), true);
  });

  test("case 12", () => {
    equal(canChange(...data[5]), true);
  });

  test("case 6", () => {
    equal(canChange(...data[11]), false);
  });
});
