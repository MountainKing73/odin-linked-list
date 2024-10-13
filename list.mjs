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

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let ind = 0;
    let value = null;

    let current = this.head;
    while (current != null && ind < index) {
      ind++;
      current = current.getNextNode();
    }

    if (current != null) {
      value = current.getValue();
    }

    return value;
  }

  pop() {
    if (this.head === null) {
      return null;
    }

    let curr = this.head;

    if (this.head === this.tail) {
      const val = this.getValue();
      this.head = null;
      this.tail = null;
      return val;
    }

    while (curr.getNextNode() != this.tail) {
      curr = curr.getNextNode();
    }

    const val = curr.getNextNode().getValue();
    curr.setNextNode(null);
    this.tail = curr;
    return val;
  }

  find(value) {
    let curr = this.head;
    let pos = 0;

    while (curr != null) {
      if (curr.getValue() === value) {
        return pos;
      }
      pos++;
      curr = curr.getNextNode();
    }

    return null;
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
