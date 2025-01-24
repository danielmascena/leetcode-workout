import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import eventualSafeNodes from "src/solutions/802.find-eventual-safe-states";
import data from "src/mocks/802.mock";

describe("[802] Find Eventual Safe States", () => {
  it("test case 1", () => {
    deepEqual(eventualSafeNodes(data[0]), [2, 4, 5, 6]);
  });

  it("test case 2", () => {
    deepEqual(eventualSafeNodes(data[1]), [4]);
  });

  it("test case 21", () => {
    deepEqual(eventualSafeNodes(data[2]), [4]);
  });

  it("test case 38", () => {
    deepEqual(eventualSafeNodes(data[3]), [2, 3, 4]);
  });

  it("test case 51", () => {
    deepEqual(eventualSafeNodes(data[4]), [3]);
  });

  it("test case 83", () => {
    deepEqual(
      eventualSafeNodes(data[5]),
      [
        4, 7, 14, 20, 21, 26, 31, 37, 64, 67, 73, 87, 96, 99, 101, 105, 106,
        107, 110, 127, 129, 130, 133, 138, 146, 150, 153, 154, 157, 165, 169,
        172, 176, 177, 180, 181, 182, 185, 189, 190, 191, 192, 193, 194, 195,
        196, 197, 198, 199,
      ]
    );
  });

  it("test case 60", () => {
    deepEqual(eventualSafeNodes(data[6]), [0, 1, 2, 3, 4]);
  });

  it("test case 67", () => {
    deepEqual(eventualSafeNodes(data[7]), [0, 1, 2, 3, 4]);
  });
});
