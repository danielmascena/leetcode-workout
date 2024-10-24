export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

export type SimpleDict<T> = { [key: number | string]: T };
