import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import countConsistentStrings from "src/solutions/1684.count-the-number-of-consistent-strings";
import data from "../mocks/1684.mock";

describe("1684.Count the Number of Consistent Strings", () => {
    it("test case 1", () => {
        strictEqual(countConsistentStrings(...data[0]), 2);
    });

    it("test case 2", () => {
        strictEqual(countConsistentStrings(...data[1]), 7);
    });

    it("test case 3", () => {
        strictEqual(countConsistentStrings(...data[2]), 4);
    });
});