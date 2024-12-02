import { describe, test } from "node:test";
import { deepEqual } from "node:assert/strict";

import stringSequence from "src/solutions/3324.find-the-sequence-of-strings-appeared-on-the-screen";
import data from "src/mocks/3324.mock";

describe("3324.", () => {
  test("case 1", () => {
    deepEqual(stringSequence(data[0]), ["a", "aa", "ab", "aba", "abb", "abc"]);
  });

  test("case 2", () => {
    deepEqual(stringSequence(data[1]), [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "ha",
      "hb",
      "hc",
      "hd",
      "he",
    ]);
  });
});
