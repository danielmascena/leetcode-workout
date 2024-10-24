import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import maxKelements from "src/solutions/2530.maximal-score-after-applying-k-operations";
import data from "../mocks/2530.mock";

describe("2530.", () => {
  it("test case 1", () => {
    strictEqual(maxKelements(...data[0]), 50);
  });

  it("test case 2", () => {
    strictEqual(maxKelements(...data[1]), 17);
  });

  it("test case 3", () => {
    strictEqual(maxKelements(...data[2]), 564960737);
  });

  it("test case 4", () => {
    strictEqual(maxKelements(...data[3]), 100000);
  });

  it("test case 5", () => {
    strictEqual(maxKelements(...data[4]), 3603535575);
  });

  it("test case 6", () => {
    strictEqual(maxKelements(...data[5]), 35039762941);
  });

  it("test case 7", () => {
    strictEqual(maxKelements(...data[6]), 2120259565);
  });

  it("test case 8", () => {
    strictEqual(maxKelements(...data[7]), 29362251389);
  });
});
