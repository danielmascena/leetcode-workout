import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import longestSubarray from "2419.longest-subarray-with-maximum-bitwise-and";
import data from "../mocks/2419.mock";

describe("2419.Longest Subarray With Maximum Bitwise AND", () => {
    it("test case 1", () => {
        strictEqual(longestSubarray(data[0]), 2);
    });

    it("test case 2", () => {
        strictEqual(longestSubarray(data[1]), 1);
    });

    it("test case 3", () => {
        strictEqual(longestSubarray(data[2]), 7);
    });

    it("test case 4", () => {
        strictEqual(longestSubarray(data[3]), 54683);
    });
});