import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maximumLength from "2981.find-longest-special-substring-that-occurs-thrice-i";
import mocks from "src/mocks/2981.mock";

describe("2981.", () => {
  it("case 1", () => {
    equal(maximumLength(mocks[0]), 2);
  });

  it("case 2", () => {
    equal(maximumLength(mocks[1]), -1);
  });

  it("case 3", () => {
    equal(maximumLength(mocks[2]), 1);
  });

  it("case 4", () => {
    equal(maximumLength(mocks[3]), -1);
  });

  it("case 5", () => {
    equal(maximumLength(mocks[4]), 1);
  });

  it("case 6", () => {
    equal(maximumLength(mocks[5]), 5);
  });

  it("case 7", () => {
    equal(maximumLength(mocks[6]), 8);
  });

  it("case 8", () => {
    equal(maximumLength(mocks[7]), 24);
  });

  it("case 9", () => {
    equal(maximumLength(mocks[8]), 19);
  });

  it("case 10", () => {
    equal(maximumLength(mocks[9]), 17);
  });

  it("case 11", () => {
    equal(maximumLength(mocks[10]), 15);
  });
});
