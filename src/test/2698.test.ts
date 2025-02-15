import { describe, it } from "node:test";
import { equal } from "node:assert/strict";

import punishmentNumber from "src/solutions/2698.find-the-punishment-number-of-an-integer";
import data from "src/mocks/2698.mock";

describe("[2698] Find the Punishment Number of an Integer", () => {
  it("test case 1", () => {
    equal(punishmentNumber(data[0]), 182);
  });

  it("test case 2", () => {
    equal(punishmentNumber(data[1]), 1478);
  });

  it("test case 91", () => {
    equal(punishmentNumber(data[2]), 21533);
  });
});
