import { genLinkedListFromArray } from "src/utils/helpers";

type TupleType = [number, number, ListNode | null];

export default [
  [3, 5, genLinkedListFromArray([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0])],
  [1, 4, genLinkedListFromArray([0, 1, 2])],
] as TupleType[];
