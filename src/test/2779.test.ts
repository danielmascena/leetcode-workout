import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import maximumBeauty from "2779.maximum-beauty-of-an-array-after-applying-operation";
import mocks from "src/mocks/2779.mock";

describe("2779.", () => {
  it("case 1", () => {
    equal(maximumBeauty(...mocks[0]), 3);
  });

  it("case 2", () => {
    equal(maximumBeauty(...mocks[1]), 4);
  });

  it("case 3", () => {
    equal(maximumBeauty(...mocks[2]), 1);
  });

  it("case 4", () => {
    equal(maximumBeauty(...mocks[3]), 1);
  });

  it("case 5", () => {
    equal(maximumBeauty(...mocks[4]), 2);
  });

  it("case 6", () => {
    equal(maximumBeauty(...mocks[5]), 2);
  });

  it("case 7", () => {
    equal(maximumBeauty(...mocks[6]), 3);
  });

  it("case 8", () => {
    equal(maximumBeauty(...mocks[7]), 4);
  });

  it("case 9", () => {
    equal(maximumBeauty(...mocks[8]), 6);
  });

  it("case 10", () => {
    equal(maximumBeauty(...mocks[9]), 2212);
  });
});
