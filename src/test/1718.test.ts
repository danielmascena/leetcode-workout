import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import constructDistancedSequence from "src/solutions/1718.construct-the-lexicographically-largest-valid-sequence";
import data from "src/mocks/1718.mock";

describe("[1718] Construct the Lexicographically Largest Valid Sequence", () => {
  it("test case 1", () => {
    deepEqual(constructDistancedSequence(data[0]), [3, 1, 2, 3, 2]);
  });

  it("test case 2", () => {
    deepEqual(constructDistancedSequence(data[1]), [5, 3, 1, 4, 3, 5, 2, 4, 2]);
  });
});
