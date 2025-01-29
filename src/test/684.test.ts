import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import findRedundantConnection from "src/solutions/684.redundant-connection";
import data from "src/mocks/684.mock";

describe("[684] Redundant Connection", () => {
  it("test case 1", () => {
    deepEqual(findRedundantConnection(data[0]), [2, 3]);
  });

  it("test case 2", () => {
    deepEqual(findRedundantConnection(data[1]), [1, 4]);
  });

  it("test case 3", () => {
    deepEqual(findRedundantConnection(data[2]), [2, 3]);
  });

  it("test case 4", () => {
    deepEqual(findRedundantConnection(data[3]), [1, 2]);
  });

  it("test case 5", () => {
    deepEqual(findRedundantConnection(data[4]), [8, 9]);
  });

  it("test case 6", () => {
    deepEqual(findRedundantConnection(data[5]), [4, 10]);
  });

  it("test case 7", () => {
    deepEqual(findRedundantConnection(data[6]), [6, 24]);
  });

  it("test case 8", () => {
    deepEqual(findRedundantConnection(data[7]), [1, 4]);
  });

  it("test case 9", () => {
    deepEqual(findRedundantConnection(data[8]), [37, 46]);
  });

  it("test case 11", () => {
    deepEqual(findRedundantConnection(data[9]), [160, 470]);
  });

  it("test case 10", () => {
    deepEqual(findRedundantConnection(data[10]), [2, 5]);
  });

  it("test case 28", () => {
    deepEqual(findRedundantConnection(data[11]), [5, 25]);
  });
});
