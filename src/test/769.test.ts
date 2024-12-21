import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import maxChunksToSorted from "769.max-chunks-to-make-sorted";
import data from "src/mocks/769.mock";

describe("769.", () => {
  test("case 1", () => {
    equal(maxChunksToSorted(data[0]), 1);
  });

  test("case 2", () => {
    equal(maxChunksToSorted(data[1]), 4);
  });

  test("case 3", () => {
    equal(maxChunksToSorted(data[2]), 1);
  });

  test("case 4", () => {
    equal(maxChunksToSorted(data[3]), 1);
  });

  test("case 5", () => {
    equal(maxChunksToSorted(data[4]), 2);
  });

  test("case 6", () => {
    equal(maxChunksToSorted(data[5]), 3);
  });

  test("case 7", () => {
    equal(maxChunksToSorted(data[6]), 3);
  });

  test("case 8", () => {
    equal(maxChunksToSorted(data[7]), 1);
  });

  test("case 9", () => {
    equal(maxChunksToSorted(data[8]), 3);
  });

  test("case 10", () => {
    equal(maxChunksToSorted(data[9]), 10);
  });
});
