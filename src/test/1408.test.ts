import { describe, it } from "node:test";
import { deepEqual as deepEqualOriginal } from "node:assert/strict";

import stringMatching from "src/solutions/1408.string-matching-in-an-array";
import data from "src/mocks/1408.mock";

describe("1408.", () => {
  const deepEqual = (a1: string[], a2: string[]) =>
    deepEqualOriginal(a1.sort(), a2.sort());

  it("case 1", () => {
    deepEqual(stringMatching(data[0]), ["as", "hero"]);
  });

  it("case 2", () => {
    deepEqual(stringMatching(data[1]), ["et", "code"]);
  });

  it("case 3", () => {
    deepEqual(stringMatching(data[2]), []);
  });

  it("case 4", () => {
    deepEqual(stringMatching(data[3]), ["leetcode", "od", "am"]);
  });

  it("case 5", () => {
    deepEqual(stringMatching(data[4]), ["as", "hero", "xyzui", "ov"]);
  });

  it("case 6", () => {
    deepEqual(stringMatching(data[5]), [
      "se",
      "ef",
      "o",
      "p",
      "e",
      "n",
      "ol",
      "al",
    ]);
  });

  it("case 7", () => {
    deepEqual(stringMatching(data[6]), ["is", "the"]);
  });
});
