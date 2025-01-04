import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import countGoodStrings from "src/solutions/2466.count-ways-to-build-good-strings";
import data from "src/mocks/2466.mock";

describe("2466.", () => {
  it("case 1", () => {
    equal(countGoodStrings(...data[0]), 8);
  });

  it("case 2", () => {
    equal(countGoodStrings(...data[1]), 5);
  });

  it.skip("case 3", () => {
    equal(countGoodStrings(...data[2]), 215447031);
  });

  it.skip("case 4", () => {
    equal(countGoodStrings(...data[3]), 764262396);
  });

  it.skip("case 5", () => {
    equal(countGoodStrings(...data[4]), 2);
  });

  it.skip("case 6", () => {
    equal(countGoodStrings(...data[5]), 271302617);
  });

  it.skip("case 7", () => {
    equal(countGoodStrings(...data[6]), 267484946);
  });

  it.skip("case 8", () => {
    equal(countGoodStrings(...data[7]), 987490208);
  });

  it("case 9", () => {
    equal(countGoodStrings(...data[8]), 2);
  });
});
