import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import mincostTickets from "src/solutions/983.minimum-cost-for-tickets";
import data from "src/mocks/983.mock";

describe("983.", () => {
  it("case 1", () => {
    equal(mincostTickets(...data[0]), 11);
  });

  it("case 2", () => {
    equal(mincostTickets(...data[1]), 17);
  });

  it.skip("case 37", () => {
    equal(mincostTickets(...data[2]), 170);
  });

  it("case 20", () => {
    equal(mincostTickets(...data[3]), 44);
  });
});
