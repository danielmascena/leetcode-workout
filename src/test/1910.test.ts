import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import removeOccurrences from "1910.remove-all-occurrences-of-a-substring";
import mock from "src/mocks/1910.mock";

describe("1910.", () => {
  it("test 1", () => {
    equal(removeOccurrences(...mock[0]), "dab");
  });

  it("test 2", () => {
    equal(removeOccurrences(...mock[1]), "ab");
  });
});
