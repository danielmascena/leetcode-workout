import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import countPalindromicSubsequence from "src/solutions/1930.unique-length-3-palindromic-subsequences";
import data from "src/mocks/1930.mock";

describe("1930.", () => {
  it("case 1", () => {
    equal(countPalindromicSubsequence(data[0]), 3);
  });

  it("case 2", () => {
    equal(countPalindromicSubsequence(data[1]), 0);
  });

  it("case 3", () => {
    equal(countPalindromicSubsequence(data[2]), 4);
  });

  it("case 24", () => {
    equal(countPalindromicSubsequence(data[3]), 676);
  });

  it("case 44", () => {
    equal(countPalindromicSubsequence(data[4]), 676);
  });

  it("case 56", () => {
    equal(countPalindromicSubsequence(data[5]), 676);
  });

  it("case 69", () => {
    equal(countPalindromicSubsequence(data[6]), 676);
  });
});
