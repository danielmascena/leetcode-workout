import { describe, it } from "node:test";
import assert from "node:assert";

import minBitFlips from "src/solutions/2220.minimum-bit-flips-to-convert-number";
import data from '../mocks/2220.mock';

describe("2220.Minimum Bit Flips to Convert Number", () => {
    it("test case 1", () => {
        assert.strictEqual(minBitFlips(...data[0]), 3);
    });

    it("test case 2", () => {
        assert.strictEqual(minBitFlips(...data[1]), 3);
    });
});