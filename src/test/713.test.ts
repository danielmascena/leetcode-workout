import { describe, it } from "node:test";
import assert from "node:assert";

import numSubarrayProductLessThanK from "src/solutions/713.subarray-product-less-than-k";
import data from "../mocks/713.mock";

describe("713.Subarray Product Less Than K", () => {
  it("test case 1", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[0]), 8);
  });

  it("test case 2", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[1]), 0);
  });

  it("test case 3", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[2]), 6);
  });

  it("test case 4", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[3]), 18);
  });

  it("test case 5", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[4]), 31);
  });

  it("test case 6", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[5]), 5092836);
  });

  it("test case 7", () => {
    assert.strictEqual(numSubarrayProductLessThanK(...data[6]), 0);
  });
});
