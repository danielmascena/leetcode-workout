import { describe, it } from "node:test";
import assert from "node:assert";

import minimumPushes from "src/solutions/3016.minimum-number-of-pushes-to-type-word-ii";
import data from "../mocks/3016.mock";

describe('3016.Minimum number of pushes to type world II', () => {
    it('test case 1', () => {
        assert.strictEqual(minimumPushes(...data[0]), 5)
    });

    it('test case 2', () => {
        assert.strictEqual(minimumPushes(...data[1]), 12);
    });

    it('test case 3', () => {
        assert.strictEqual(minimumPushes(...data[2]), 24);
    });
});