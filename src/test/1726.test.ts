import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import tupleSameProduct from "src/solutions/1726.tuple-with-same-product";
import data from "src/mocks/1726.mock";

describe("[1726] Tuple with Same Product", () => {
  it.skip("test case 1", () => {
    equal(tupleSameProduct(data[0]), 8);
  });

  it.skip("test case 2", () => {
    equal(tupleSameProduct(data[1]), 16);
  });

  it.skip("test case 3", () => {
    equal(tupleSameProduct(data[2]), 0);
  });

  it.skip("test case 4", () => {
    equal(tupleSameProduct(data[3]), 40);
  });

  it.skip("test case 5", () => {
    equal(tupleSameProduct(data[4]), 56);
  });

  it.skip("test case 6", () => {
    equal(tupleSameProduct(data[5]), 72);
  });

  it.skip("test case 7", () => {
    equal(tupleSameProduct(data[6]), 48);
  });

  it.skip("test case 8", () => {
    equal(tupleSameProduct(data[7]), 0);
  });

  it("test case 17", () => {
    equal(tupleSameProduct(data[8]), 1288);
  });

  it.skip("test case 10", () => {
    equal(tupleSameProduct(data[9]), 88);
  });
});
