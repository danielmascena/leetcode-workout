import { describe, it, beforeEach } from "node:test";
import { strictEqual } from "node:assert";

import CustomStack from "src/solutions/1381.design-a-stack-with-increment-operation";
import data, { answers } from "../mocks/1381.mock";
import { CustomStackAction } from "src/types/customTypes";

describe("1381.Design a Stack With Increment Operation", () => {
    let stack: CustomStack;

    it("test case 1 (25)", () => {
        const mock = data[0];
        const ans = answers[0];
        stack = new CustomStack(3);
        mock.forEach(([act, args], idx) => {
            strictEqual((stack as any)[act as CustomStackAction](...args) ?? null, ans[idx], `subtest ${idx}`);
        });
    });
});