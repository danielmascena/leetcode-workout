/*
 * @lc app=leetcode id=729 lang=typescript
 *
 * [729] My Calendar I
 */

// @lc code=start
class MyCalendar {
    events: Set<[number, number]>;

    constructor() {
        this.events = new Set();
    }

    book(start: number, end: number): boolean {
        const { events } = this;

        for (const [st, ed] of events) {
            if (
                (start <= st && end > ed) || 
                (start >= st && start < ed) || 
                (end > st && end <= ed)
            ) {
                return false;
            }
        }
        events.add([start, end]);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

export default MyCalendar;