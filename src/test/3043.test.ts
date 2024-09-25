import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import longestCommonPrefix from "src/solutions/3043.find-the-length-of-the-longest-common-prefix";
import data from "../mocks/3043.mock";

describe("3043.Find the Length of the Longest Common Prefix", () => {
    it("test case 1", () => {
        strictEqual(longestCommonPrefix(...data[0]), 3);
    });
    it("test case 2", () => {
        strictEqual(longestCommonPrefix(...data[1]), 0);
    });
    it("test case 122", () => {
        strictEqual(longestCommonPrefix(...data[2]), 0);
    });
    it("test case 153", () => {
        strictEqual(longestCommonPrefix(...data[3]), 1);
    });
    it("test case 712", () => {
        strictEqual(longestCommonPrefix(...data[4]), 8);
    });
});