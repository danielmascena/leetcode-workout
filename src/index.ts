import { SimpleDict } from "./model/models";

function foo(item: SimpleDict<boolean>) {
  console.log(item);
}

function bar(item: Record<string, boolean>) {
  foo(item);
}

bar({ hello: true });
