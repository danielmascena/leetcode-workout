import { describe, it } from "node:test";
import assert from "node:assert";
import spiralMatrix from "src/solutions/2326.spiral-matrix-iv";

import data from "../mocks/2326.mock";

describe("2326.Spiral Matrix IV", () => {
    it("test case 1", () => {
        assert.strictEqual(String(spiralMatrix(...data[0])), '3,0,2,6,8,5,0,-1,-1,1,5,2,4,9,7');
    });
    it('test case 2', () => {
        assert.strictEqual(String(spiralMatrix(...data[1])), '0,1,2,-1');
    });
});