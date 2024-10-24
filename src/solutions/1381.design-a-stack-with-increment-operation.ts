/*
 * @lc app=leetcode id=1381 lang=typescript
 *
 * [1381] Design a Stack With Increment Operation
 */

// @lc code=start
class CustomStack {
    size = 0;
    maxSize: number;
    stack = new Array<number>();
    constructor(maxSize: number) {
        this.maxSize = maxSize;
    }

    private isFull(): boolean {
        return this.size === this.maxSize;
    }

    private isEmpty(): boolean {
        return this.size === 0;
    }

    push(x: number): void {
        if (this.isFull()) return;

        this.size++;
        this.stack.unshift(x);
    }

    pop(): number {
        if (this.isEmpty()) return -1;

        this.size--;
        return this.stack.shift() as number;
    }

    increment(k: number, val: number): void {
        const { stack, size } = this;

        if (size - k <= 0) 
            stack.forEach((n, i) => stack[i] += val);
        else {
            for (let i = 1, len = stack.length; i <= k; i++) {
                stack[len-i] += val;
            }
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

export default CustomStack;