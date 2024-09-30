import { describe, it, beforeEach } from "node:test";
import { strictEqual } from "node:assert";

import MyCalendarThree from "src/solutions/732.my-calendar-iii";
import data, { answers} from "../mocks/732.mock";

describe("732.My Calendar III", () => {
    let calendar: MyCalendarThree;

    beforeEach(() => {
        calendar = new MyCalendarThree();
    });

    it.skip("test case 1", () => {
        const ans = answers[0];
        const mock = data[0];

        mock.forEach(([startTime, endTime], index) => {
            strictEqual(calendar.book(startTime, endTime), ans[index]);
        });
    });
});