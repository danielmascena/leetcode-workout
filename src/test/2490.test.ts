import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import isCircularSentence from "src/solutions/2490.circular-sentence";
import data from "src/mocks/2490.mock";

describe("2490.", () => {
  test("case 1", () => {
    strictEqual(isCircularSentence(data[0]), true);
  });

  test("case 2", () => {
    strictEqual(isCircularSentence(data[1]), true);
  });

  test("case 3", () => {
    strictEqual(isCircularSentence(data[2]), false);
  });

  test("case 4", () => {
    strictEqual(isCircularSentence(data[3]), true);
  });

  test("case 5", () => {
    strictEqual(isCircularSentence(data[4]), false);
  });

  test("case 6", () => {
    strictEqual(isCircularSentence(data[5]), false);
  });

  test("case 7", () => {
    strictEqual(isCircularSentence(data[6]), false);
  });
});
