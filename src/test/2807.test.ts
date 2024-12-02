import { describe, it } from "node:test";
import { deepEqual } from "node:assert/strict";

import insertGreatestCommonDivisors from "src/solutions/2807.insert-greatest-common-divisors-in-linked-list";
import { genArrayFromLinkedList } from "src/utils/helpers";
import data from "../mocks/2807.mock";

describe("2807.Insert Greatest Common Divisors in Linked List", () => {
  it("test 1", () => {
    const answer = insertGreatestCommonDivisors(data[0]);
    const input = genArrayFromLinkedList(answer);
    const output = [18, 6, 6, 2, 10, 1, 3];
    deepEqual(input, output);
  });

  it("test 2", () => {
    const answer = insertGreatestCommonDivisors(data[1]);
    const input = genArrayFromLinkedList(answer);
    const output = [7];
    deepEqual(input, output);
  });
});
