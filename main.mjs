import { LinkedList } from "./list.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");

list.prepend("fish");

console.log(list.toString());

console.log("Size: " + list.size());
