/*
 * @lc app=leetcode id=731 lang=typescript
 *
 * [731] My Calendar II
 */

// @lc code=start
class MyCalendarTwo {
    private _cal = new Map<[number, number], number>();
    constructor() { }

    book(start: number, end: number): boolean {
        const { _cal } = this;
        const { min, max } = Math;
        console.log(_cal, ' @@@@')

        for (const [time, quant] of _cal) {
            const [startTime, endTime] = time;

            if (start >= startTime && start < endTime) {
                if (quant === 2) {
                    return false;
                }
                const es = min(end, endTime);
                const eb = max(end, endTime);
                _cal.delete(time);

                if (start !== startTime)
                    _cal.set([startTime, start], quant);
                _cal.set([start, es], quant + 1);
                _cal.set([es, eb], quant);
                return true;
            }
            else if (end > startTime && end <= endTime) {
                if (quant === 2) {
                    return false;
                }
                const s1 = min(start, startTime);
                const s2 = max(start, startTime);
                _cal.delete(time);
                _cal.set([s1, s2], 1);
                _cal.set([s2, end], quant + 1);
                
                if (end !== endTime)
                    _cal.set([end, endTime], quant);
                return true;
            }
            else if (startTime >= start && endTime <= end) {
                if (quant === 2) {
                    return false;
                }
                _cal.delete(time);
                _cal.set([start, startTime], quant);
                _cal.set([startTime, endTime], quant + 1);
                _cal.set([endTime, end], quant);
                return true;
            }
        }
        _cal.set([start, end], 1);
        return true;
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

export default MyCalendarTwo;