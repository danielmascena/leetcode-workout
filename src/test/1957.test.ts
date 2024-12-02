import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import makeFancyString from "src/solutions/1957.delete-characters-to-make-fancy-string";
import data from "src/mocks/1957.mock";

describe("1957.", () => {
  test("case 1", () => {
    strictEqual(makeFancyString(data[0]), "leetcode");
  });

  test("case 2", () => {
    strictEqual(makeFancyString(data[1]), "aabaa");
  });

  test("case 3", () => {
    strictEqual(makeFancyString(data[2]), "aab");
  });
});
