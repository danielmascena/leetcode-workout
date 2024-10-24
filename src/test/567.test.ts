import { describe, it } from "node:test";
import { strictEqual } from "node:assert";

import checkInclusion from "src/solutions/567.permutation-in-string";
import data from "../mocks/567.mock";

describe("567.Permutation in String", () => {
    it("test case 1", () => strictEqual(checkInclusion(...data[0]), true));

    it("test case 2", () => strictEqual(checkInclusion(...data[1]), false));

    it("test case 97", () => strictEqual(checkInclusion(...data[2]), true));

    it("test case 80", () => strictEqual(checkInclusion(...data[3]), false));

    it("test case 73", () => strictEqual(checkInclusion(...data[4]), true));

    it("test case 83", () => strictEqual(checkInclusion(...data[5]), true));

    it("test case 15", () => strictEqual(checkInclusion(...data[6]), false));

    it("test case 84", () => strictEqual(checkInclusion(...data[7]), true));

    it("test case 85", () => strictEqual(checkInclusion(...data[8]), true));
});