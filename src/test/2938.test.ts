import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import minimumSteps from "src/solutions/2938.separate-black-and-white-balls";
import data from "../mocks/2938.mock";

describe("2938.", () => {
  it("test case 1", () => {
    strictEqual(minimumSteps(data[0]), 1);
  });

  it("test case 2", () => {
    strictEqual(minimumSteps(data[1]), 2);
  });

  it("test case 3", () => {
    strictEqual(minimumSteps(data[2]), 0);
  });

  it("test case 142", () => {
    strictEqual(minimumSteps(data[3]), 6);
  });

  it("test case 554", () => {
    strictEqual(minimumSteps(data[4]), 2573155);
  });
});
