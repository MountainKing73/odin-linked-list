import { Node } from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node();
    newNode.setValue(value);
    if (this.head === null) {
      this.head = newNode;
    }
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.setNextNode(newNode);
      this.tail = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node();
    newNode.setValue(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.setNextNode(this.head);
      this.head = newNode;
    }

    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current != null) {
      size++;
      current = current.getNextNode();
    }

    return size;
  }

  toString() {
    let str = "";
    let current = this.head;
    while (current != null) {
      str += "( " + current.value + " ) ";
      current = current.getNextNode();
      if (current != null) {
        str += " -> ";
      }
    }

    return str;
  }
}

export { LinkedList };
