import { LinkedList } from "./list.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");

list.prepend("fish");

console.log(list.toString());

console.log("Size: " + list.size());

console.log("at(1): " + list.at(1));

let val = list.pop();
console.log("Popped: " + val);
console.log(list.toString());

console.log("Find dog: " + list.find("dog"));
console.log("Find cow: " + list.find("cow"));
