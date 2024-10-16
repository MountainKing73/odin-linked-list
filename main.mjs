import { LinkedList } from "./list.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("fish");

console.log(list.toString());

console.log("Size: " + list.size());

console.log("at(1): " + list.at(1));

let val = list.pop();
console.log("Popped: " + val);
console.log(list.toString());

console.log("Find dog: " + list.find("dog"));
console.log("Find cow: " + list.find("cow"));

console.log("Contains dog: " + list.contains("dog"));
console.log("Contains cow: " + list.contains("cow"));

list.insertAt("cow", 3);
console.log(list.toString());

val = list.removeAt(3);
console.log("Removed value: " + val);
console.log(list.toString());
