import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import minimizeXor from "src/solutions/2429.minimize-xor";
import data from "src/mocks/2429.mock";

describe("2429.Minimize XOR", () => {
  it("test case 1", () => {
    equal(minimizeXor(...data[0]), 3);
  });

  it("test case 2", () => {
    equal(minimizeXor(...data[1]), 3);
  });

  it("test case 3", () => {
    equal(minimizeXor(...data[2]), 15);
  });

  it("test case 4", () => {
    equal(minimizeXor(...data[3]), 67);
  });

  it("test case 5", () => {
    equal(minimizeXor(...data[4]), 24);
  });

  it("test case 6", () => {
    equal(minimizeXor(...data[5]), 100);
  });

  it.skip("test case 7", () => {
    equal(minimizeXor(...data[6]), 999817216);
  });

  it.skip("test case 8", () => {
    equal(minimizeXor(...data[7]), 8191);
  });

  it.skip("test case 9", () => {
    equal(minimizeXor(...data[8]), 536870911);
  });

  it("test case 10", () => {
    equal(minimizeXor(...data[9]), 536870911);
  });

  it("test case 55", () => {
    equal(minimizeXor(...data[10]), 76);
  });

  it("test case 73", () => {
    console.log("test 73");
    equal(minimizeXor(...data[11]), 80);
  });
});
