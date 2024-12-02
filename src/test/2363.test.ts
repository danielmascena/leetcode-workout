import { describe, test } from "node:test";
import { strictEqual } from "node:assert";

import mergeSimilarItems from "src/solutions/2363.merge-similar-items";
import data from "src/mocks/2363.mock";

describe("2363.", () => {
  test("case 1", () => {
    strictEqual(String(mergeSimilarItems(...data[0])), "1,6,3,9,4,5");
  });

  test("case 2", () => {
    strictEqual(String(mergeSimilarItems(...data[1])), "1,4,2,4,3,4");
  });

  test("case 3", () => {
    strictEqual(String(mergeSimilarItems(...data[2])), "1,7,2,4,7,1");
  });
});
