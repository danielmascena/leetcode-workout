import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import pickGifts from "2558.take-gifts-from-the-richest-pile";
import mock from "src/mocks/2558.mock";

describe("2558.", () => {
  it("case 1", () => {
    equal(pickGifts(...mock[0]), 29);
  });

  it("case 2", () => {
    equal(pickGifts(...mock[1]), 4);
  });

  it("case 3", () => {
    equal(pickGifts(...mock[2]), 7);
  });

  it("case 4", () => {
    equal(pickGifts(...mock[3]), 17);
  });

  it("case 5", () => {
    equal(pickGifts(...mock[4]), 33);
  });

  it("case 6", () => {
    equal(pickGifts(...mock[5]), 191);
  });

  it("case 7", () => {
    equal(pickGifts(...mock[6]), 591);
  });

  it("case 8", () => {
    equal(pickGifts(...mock[7]), 214);
  });

  it("case 9", () => {
    equal(pickGifts(...mock[8]), 396);
  });

  it("case 10", () => {
    equal(pickGifts(...mock[9]), 36685293358);
  });
});
