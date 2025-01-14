import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import findThePrefixCommonArray from "src/solutions/2657.find-the-prefix-common-array-of-two-arrays(2)";
import data from "src/mocks/2657.mock";

describe("2657.Find the Prefix Common Array of Two Arrays", () => {
  it("test case 1", () => {
    deepEqual(findThePrefixCommonArray(...data[0]), [0, 2, 3, 4]);
  });

  it("test case 2", () => {
    deepEqual(findThePrefixCommonArray(...data[1]), [0, 1, 3]);
  });

  it("test case 3", () => {
    deepEqual(findThePrefixCommonArray(...data[2]), [1]);
  });

  it("test case 4", () => {
    deepEqual(findThePrefixCommonArray(...data[3]), [0, 2]);
  });

  it("test case 5", () => {
    deepEqual(findThePrefixCommonArray(...data[4]), [0, 0, 0, 1, 3, 5, 7]);
  });

  it("test case 6", () => {
    deepEqual(findThePrefixCommonArray(...data[5]), [0, 0, 0, 2, 4, 5, 6, 8]);
  });

  it("test case 7", () => {
    deepEqual(
      findThePrefixCommonArray(...data[6]),
      [0, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 10, 10, 11, 12, 14, 16, 18, 20]
    );
  });

  it("test case 8", () => {
    deepEqual(
      findThePrefixCommonArray(...data[7]),
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 4, 4, 6, 7, 7, 7, 7, 8, 9, 11,
        12, 14, 15, 15, 17, 18, 19, 19, 20, 22, 23, 25, 27, 28, 30, 32, 32, 34,
        35, 37, 39, 41, 43, 45, 47, 49,
      ]
    );
  });

  it("test case 9", () => {
    deepEqual(
      findThePrefixCommonArray(...data[8]),
      [
        0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6, 6, 7, 9, 10, 10,
        11, 13, 14, 14, 16, 16, 16, 18, 19, 21, 23, 25, 27, 29, 31, 32, 33, 34,
        36, 38, 40, 42, 44, 45, 47, 49,
      ]
    );
  });

  it("test case 10", () => {
    deepEqual(
      findThePrefixCommonArray(...data[9]),
      [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 6, 8, 9, 9, 10, 11,
        12, 13, 14, 16, 16, 17, 18, 18, 19, 20, 22, 24, 26, 28, 29, 30, 32, 34,
        36, 38, 39, 41, 42, 44, 46, 48, 50,
      ]
    );
  });
});
