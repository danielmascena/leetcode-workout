import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import countServers from "src/solutions/1267.count-servers-that-communicate";
import data from "src/mocks/1267.mock";

describe("[1267] Count Servers that Communicate", () => {
  it("test case 1", () => {
    equal(countServers(data[0]), 0);
  });

  it("test case 2", () => {
    equal(countServers(data[1]), 3);
  });

  it("test case 3", () => {
    equal(countServers(data[2]), 4);
  });

  it("test case 12", () => {
    equal(countServers(data[3]), 12);
  });

  it("test case 4", () => {
    equal(countServers(data[4]), 0);
  });

  it("test case 5", () => {
    equal(countServers(data[5]), 0);
  });

  it("test case 6", () => {
    equal(countServers(data[6]), 3);
  });

  it("test case 7", () => {
    equal(countServers(data[7]), 3);
  });

  it("test case 8", () => {
    equal(countServers(data[8]), 3);
  });

  it("test case 9", () => {
    equal(countServers(data[9]), 4);
  });

  it("test case 10", () => {
    equal(countServers(data[10]), 595);
  });
});
