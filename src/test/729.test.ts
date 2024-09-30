import { describe, it, beforeEach } from "node:test";
import { strictEqual } from "node:assert";

import MyCalendar from "src/solutions/729.my-calendar-i";
import data, {answers} from "../mocks/729.mock";


describe("729.My Calendar I", () => {
    let mock: MyCalendar;

    beforeEach(() => {
        mock = new MyCalendar();
    });

    it("test case 1", () => {
        const args = data[0] ?? [];
        const ans = answers[0];
        args.forEach(([start, end], idx) => {
            strictEqual(mock.book(start, end), ans[idx], `subtest ${idx}`);
        });
    });

    it("test case 44", () => {
        const args = data[1] ?? [];
        const ans = answers[1];
        args.forEach(([start, end], idx) => {
            strictEqual(mock.book(start, end), ans[idx], `subtest ${idx}`);
        });
    });

    it("test case 79", () => {
        const args = data[2] ?? [];
        const ans = answers[2];
        args.forEach(([start, end], idx) => {
            strictEqual(mock.book(start, end), ans[idx], `subtest ${idx}`);
        });
    });
    it("test case 86", () => {
        const args = data[3] ?? [];
        const ans = answers[3];
        args.forEach(([start, end], idx) => {
            strictEqual(mock.book(start, end), ans[idx], `subtest ${idx}`);
        });
    });
    it("test case 95", () => {
        const args = data[4] ?? [];
        const ans = answers[4];
        args.forEach(([start, end], idx) => {
            strictEqual(mock.book(start, end), ans[idx], `subtest ${idx}`);
        });
    });

    it("test case 98", () => {
        const args = data[5] ?? [];
        const ans = answers[5];
        args.forEach(([start, end], idx) => {
            strictEqual(mock.book(start, end), ans[idx], `subtest ${idx}`);
        });
    });
});