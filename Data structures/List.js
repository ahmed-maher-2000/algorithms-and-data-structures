// implement List
class Node {
  constructor(item) {
    this.head = item;
    this.next = null;
  }
}

class List {
  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  append(item) {
    const newNode = new Node(item);
    if (this.start === null) {
      this.start = newNode;
    } else {
      let temp = this.start;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
      this.end = newNode;
    }
    this.length++;
  }
  prepend(item) {
    const newNode = new Node(item);
    if (this.start === null) {
      this.start = newNode;
    } else {
      newNode.next = this.start;
      this.start = newNode;
    }
    this.length++;
  }
  removeStart() {
    if (this.length === 0) return null;
    let item = this.start;
    this.start = this.start.next;
    this.length--;
    return item;
  }
  removeEnd() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.start = null;
      this.end = null;
      return;
    }

    let temp = this.start;
    while (temp.next !== this.end) {
      temp = temp.next;
    }

    temp.next = null;
    this.end = temp;
    this.length--;
  }
  insert(index, item) {
    if (index > this.length || index < 0) return null;
    if (index === 0) {
      this.prepend(item);
      return;
    }
    if (index === this.length) {
      this.append(item);
      return;
    }

    const newNode = new Node(item);
    const prevNode = this._getNode(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }
  delete(index) {
    if (index >= this.length || index < 0) return null;
    if (index === 0) {
      this.removeStart();
      return;
    }
    if (index === this.length) {
      this.removeEnd();
      return;
    }

    const prevNode = this._getNode(index - 1);
    const deletedNode = prevNode.next;
    prevNode.next = deletedNode.next;
    this.length--;
  }

  _getNode(index) {
    let temp = this.start;
    let i = 0;
    while (index !== i) {
      temp = temp.next;
      i++;
    }

    return temp;
  }

  printList() {
    let temp = this.start;
    let i = 0;
    while (temp) {
      console.log(`${i}: ${temp.head}`);
      temp = temp.next;
      i++;
    }
  }

  get(item) {
    let temp = this.start;
    while (temp) {
      if (temp.head === item) return temp;
      temp = temp.next;
    }
    return temp;
  }
}

module.exports = { List };
