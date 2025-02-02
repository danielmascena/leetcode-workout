import {describe, it} from "node:test";
import {equal} from "node:assert/strict";

import check from "src/solutions/1752.check-if-array-is-sorted-and-rotated";
import data from "src/mocks/1752.mock";

describe("[1752] Check if Array is Sorted and Rotated", () => {
  it("test case 1", () => {
    equal(check(data[0]), true);
  });

  it("test case 2", () => {
    equal(check(data[1]), false);
  });

  it("test case 3", () => {
    equal(check(data[2]), true);
  });

  it("test case 4", () => {
    equal(check(data[3]), true);
  });

  it("test case 5", () => {
    equal(check(data[4]), false);
  });

  it("test case 6", () => {
    equal(check(data[5]), true);
  });

  it("test case 7", () => {
    equal(check(data[6]), false);
  });

  it("test case 8", () => {
    equal(check(data[7]), true);
  });

  it("test case 9", () => {
    equal(check(data[8]), true);
  });

  it("test case 10", () => {
    equal(check(data[9]), true);
  });

  it("test case 11", () => {
    equal(check(data[10]), false);
  });
});
