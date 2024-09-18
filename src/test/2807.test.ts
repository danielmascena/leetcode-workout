import { describe, it } from "node:test";
import assert from "node:assert";

import insertGreatestCommonDivisors from "src/solutions/2807.insert-greatest-common-divisors-in-linked-list";
import { generateListFromHead } from "src/utils/helpers";
import data from "../mocks/2807.mock";

describe('2807.Insert Greatest Common Divisors in Linked List', () => {
    it('test 1', () => {
        const answer = insertGreatestCommonDivisors(data[0]);
        const input = generateListFromHead(answer);
        const output = "18,6,6,2,10,1,3";
        assert.strictEqual(String(input), output);
    });

    it('test 2', () => {
        const answer = insertGreatestCommonDivisors(data[1]);
        const input = generateListFromHead(answer);
        const output = "7";
        assert.strictEqual(String(input), output);
    });
});