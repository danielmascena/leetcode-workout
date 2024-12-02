import { describe, test } from "node:test";
import { equal } from "node:assert/strict";

import isPrefixOfWord from "src/solutions/1455.check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence";
import data from "src/mocks/1455.mock";

describe("1455", () => {
  test("case 1", () => {
    equal(isPrefixOfWord(...data[0]), 4);
  });
  test("case 2", () => {
    equal(isPrefixOfWord(...data[1]), 2);
  });

  test("case 3", () => {
    equal(isPrefixOfWord(...data[2]), -1);
  });

  test("case 27", () => {
    equal(isPrefixOfWord(...data[3]), -1);
  });

  test("case 35", () => {
    equal(isPrefixOfWord(...data[4]), -1);
  });
});
