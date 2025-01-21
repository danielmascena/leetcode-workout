import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import gridGame from "src/solutions/2017.grid-game";
import data from "src/mocks/2017.mock";

describe("[2017] Grid Game", () => {
  it("test case 1", () => {
    equal(gridGame(data[0]), 4);
  });

  it("test case 2", () => {
    equal(gridGame(data[1]), 4);
  });

  it("test case 3", () => {
    equal(gridGame(data[2]), 7);
  });

  it("test case 4", () => {
    equal(gridGame(data[3]), 0);
  });

  it("test case 5", () => {
    equal(gridGame(data[4]), 1);
  });

  it("test case 6", () => {
    equal(gridGame(data[5]), 21);
  });

  it("test case 7", () => {
    equal(gridGame(data[6]), 7);
  });

  it("test case 8", () => {
    equal(gridGame(data[7]), 55);
  });

  it("test case 9", () => {
    equal(gridGame(data[8]), 63);
  });

  it("test case 10", () => {
    equal(gridGame(data[9]), 407);
  });

  it("test case 11", () => {
    equal(gridGame(data[10]), 733);
  });
});
