import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import longestDiverseString from "src/solutions/1405.longest-happy-string";
import data from "../mocks/1405.mock";

describe("1405.", () => {
  it("test case 1", () => {
    strictEqual(longestDiverseString(...data[0]), "ccaccbcc");
  });

  it("test case 2", () => {
    strictEqual(longestDiverseString(...data[1]), "aabaa");
  });

  it("test case 3", () => {
    strictEqual(longestDiverseString(...data[2]), "aabbc");
  });

  it("test case 15", () => {
    strictEqual(longestDiverseString(...data[3]), "aabbccaabbc");
  });

  it("test case 14", () => {
    strictEqual(longestDiverseString(...data[4]), "ccbbccbbac");
  });
});
