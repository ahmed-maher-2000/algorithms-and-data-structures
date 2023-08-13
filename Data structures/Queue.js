const { List } = require("./List");

// implement Queue by Linked List
class Queue {
  constructor() {
    this.items = new List();
    this.length = 0;
  }

  enqueue(item) {
    if (!item) return null;
    this.items.append(item);
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return null;
    let item = this.items.removeStart();
    this.length--;
    return item.head;
  }
}

module.exports = { Queue };
