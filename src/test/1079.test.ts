import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import numTilePossibilities from "src/solutions/1079.letter-tile-possibilities";
import data from "src/mocks/1079.mock";

describe("[1079] Letter Tile Possibilities", () => {
  it("test case 1", () => {
    equal(numTilePossibilities(data[0]), 8);
  });

  it("test case 2", () => {
    equal(numTilePossibilities(data[1]), 188);
  });

  it("test case 3", () => {
    equal(numTilePossibilities(data[2]), 1);
  });
});
