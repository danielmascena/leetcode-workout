

import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import parseBoolExpr from "src/solutions/1106.parsing-a-boolean-expression";
import data from "../mocks/1106.mock";

describe("1106.", () => {
  it("test case 1", () => {
    strictEqual(parseBoolExpr(data[0]), false);
  });

  it("test case 2", () => {
    strictEqual(parseBoolExpr(data[1]), true);
  });

  it("test case 3", () => {
    strictEqual(parseBoolExpr(data[2]), true);
  });

  it("test case 4", () => {
    strictEqual(parseBoolExpr(data[3]), true);
  });

  it("test case 5", () => {
    strictEqual(parseBoolExpr(data[4]), false);
  });

  it("test case 6", () => {
    strictEqual(parseBoolExpr(data[5]), true);
  });

  it("test case 7", () => {
    strictEqual(parseBoolExpr(data[6]), true);
  });

  it("test case 8", () => {
    strictEqual(parseBoolExpr(data[7]), true);
  });

  it("test case 9", () => {
    strictEqual(parseBoolExpr(data[8]), false);
  });

  it("test case 10", () => {
    strictEqual(parseBoolExpr(data[9]), true);
  });

  it("test case 11", () => {
    strictEqual(parseBoolExpr(data[10]), false);
  });
});
