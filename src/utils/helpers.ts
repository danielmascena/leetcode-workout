import { ListNode } from "src/model/models";

export function generateHeadFromList(arr: number[]) {
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
};

export function generateListFromHead(head: ListNode | null): number[] {
    const list:number[] = [];

    while (head) {
        list.push(head.val);
        head = head.next;
    }
    return list;
};

export function convertArrayToString<T>(arr: T[] | T[][]): string {
    return String(arr);
}