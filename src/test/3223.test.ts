import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import minimumLength from "../solutions/3223.minimum-length-of-string-after-operations";
import data from "../mocks/3223.mock";

describe("3223.Minimum Length of String After Operations", () => {
  it("test case 1", () => {
    equal(minimumLength(data[0]), 5);
  });

  it("test case 2", () => {
    equal(minimumLength(data[1]), 2);
  });

  it("test case 3", () => {
    equal(minimumLength(data[2]), 38);
  });

  it("test case 4", () => {
    equal(minimumLength(data[3]), 12);
  });

  it("test case 5", () => {
    equal(minimumLength(data[4]), 1);
  });

  it("test case 6", () => {
    equal(minimumLength(data[5]), 2);
  });

  it("test case 7", () => {
    equal(minimumLength(data[6]), 15);
  });

  it("test case 8", () => {
    equal(minimumLength(data[7]), 17);
  });

  it("test case 9", () => {
    equal(minimumLength(data[8]), 17);
  });

  it("test case 10", () => {
    equal(minimumLength(data[9]), 13);
  });

  it("test case 698", () => {
    equal(minimumLength(data[10]), 2);
  });
});

