import { describe, it, beforeEach } from "node:test";
import { strictEqual } from "node:assert";

import MyCalendarTwo from "src/solutions/731.my-calendar-ii";
import data, { answers } from "../mocks/731.mock";

describe("731.My Calendar II", () => {
    let calendar: MyCalendarTwo;
    let counter = 0;

    beforeEach(() => {
        calendar = new MyCalendarTwo();
        console.log(`iteration ${counter++}`);
    });

    it("test case 0", () => {
        const ans = answers[0];
        const mock = data[0];

        mock.forEach(([startTime, endTime], index) => {
            strictEqual(calendar.book(startTime, endTime), ans[index], `subtest ${index}`);
        });
    });
    it("test case 1", () => {
        const ans = answers[1];
        const mock = data[1];

        mock.forEach(([startTime, endTime], index) => {
            strictEqual(calendar.book(startTime, endTime), ans[index], `subtest ${index}`);
        });
    });
    it("test case 9", () => {
        const ans = answers[2];
        const mock = data[2];

        mock.forEach(([startTime, endTime], index) => {
            strictEqual(calendar.book(startTime, endTime), ans[index], `subtest ${index}`);
        });
    });
});