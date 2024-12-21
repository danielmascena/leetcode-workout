import { ListNode, TreeNode } from "src/model/models";

export function genLinkedListFromArray(arr: number[]): ListNode | null {
  var head: ListNode | null = null;
  var prev: ListNode | null = null;

  for (const num of arr) {
    const node = new ListNode(num);

    if (prev) {
      (prev as ListNode).next = node;
    }
    head ??= node;
    prev = node;
  }
  return head;
}

export function genArrayFromLinkedList(head: ListNode | null): number[] {
  const list: number[] = [];

  while (head) {
    list.push(head.val);
    head = head.next;
  }
  return list;
}

export function genTreeFromArray(arr: (null | number)[]): TreeNode | null {
  if (!arr.length) return null;

  const head = new TreeNode(Number(arr[0]));
  const queue: TreeNode[] = [head];

  for (let i = 1, len = arr.length; i < len && queue.length; i += 2) {
    const ln = Number(arr[i]);
    const rn = Number(arr[i + 1]);
    const prev = queue.shift()!;

    if (!Number.isNaN(ln)) {
      const left = new TreeNode(ln);
      prev.left = left;
      queue.push(left);
    }
    if (!Number.isNaN(rn)) {
      const right = new TreeNode(rn);
      prev.right = right;
      queue.push(right);
    }
  }
  return head;
}

export function genArrayFromTree(head: TreeNode | null): Array<number | null> {
  const ans: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [];
  let node: null | undefined | TreeNode = head;

  while (node) {
    const { val, left, right } = node;
    ans.push(val ?? null);

    if (left || right) {
      queue.push(left ?? new TreeNode(0));
      queue.push(right ?? new TreeNode(0));
    }
    node = queue.shift();
  }
  return ans;
}

export function stringifyArray<T>(arr: T[] | T[][]): string {
  return String(arr);
}
