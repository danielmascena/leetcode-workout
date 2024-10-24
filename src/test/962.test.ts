import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import maxWidthRamp from "src/solutions/962.maximum-width-ramp";
import data from "../mocks/962.mock";

describe("962.Maximum Width Ramp", () => {
    it("test case 1", () => {
        strictEqual(maxWidthRamp(data[0]), 4);
    });

    it("test case 2", () => {
        strictEqual(maxWidthRamp(data[1]), 7);
    });

    it("test case 99", () => {
        strictEqual(maxWidthRamp(data[2]), 0);
    });
});