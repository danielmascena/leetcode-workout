type TestCase = [Function, [Record<string, any>, ...any[]]];

const testCases: TestCase[] = [
  [
    function add(this: { a: number }, b: number): number {
      return this.a + b;
    },
    [{ a: 5 }, 7],
  ],
  [
    function tax(
      this: { item: string },
      price: number,
      taxRate: number
    ): string {
      return `The cost of the ${this.item} is ${price * taxRate}`;
    },
    [{ item: "burger" }, 10, 1.1],
  ],
  [
    function keys(this: Record<string, any>): string[] {
      return Object.keys(this);
    },
    [{ x: 1, y: 2 }],
  ],
];

export default testCases;
