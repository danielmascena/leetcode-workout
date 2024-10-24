import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import maximumSwap from "src/solutions/670.maximum-swap";
import data from "../mocks/670.mock";

describe("670.", () => {
  it("test case 1", () => {
    strictEqual(maximumSwap(data[0]), 7236);
  });

  it("test case 2", () => {
    strictEqual(maximumSwap(data[1]), 9973);
  });

  it("test case 3", () => {
    strictEqual(maximumSwap(data[2]), 3);
  });

  it("test case 4", () => {
    strictEqual(maximumSwap(data[3]), 9913);
  });

  it("test case 5", () => {
    strictEqual(maximumSwap(data[4]), 8667);
  });

  it("test case 6", () => {
    strictEqual(maximumSwap(data[5]), 98863);
  });

  it("test case 7", () => {
    strictEqual(maximumSwap(data[6]), 90909011);
  });

  it("test case 8", () => {
    strictEqual(maximumSwap(data[7]), 96867858);
  });

  it("test case 9", () => {
    strictEqual(maximumSwap(data[8]), 98604305);
  });

  it("test case 10", () => {
    strictEqual(maximumSwap(data[9]), 98765432);
  });

  it("test case 11", () => {
    strictEqual(maximumSwap(data[10]), 98850430);
  });
});
