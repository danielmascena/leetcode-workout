import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import mergeAlternately from "src/solutions/1768.merge-strings-alternately";
import data from "src/mocks/1768.mock";

describe("1768.", () => {
  it("case 1", () => {
    equal(mergeAlternately(...data[0]), "apbqcr");
  });

  it("case 2", () => {
    equal(mergeAlternately(...data[1]), "apbqrs");
  });

  it("case 3", () => {
    equal(mergeAlternately(...data[2]), "apbqcd");
  });
});
