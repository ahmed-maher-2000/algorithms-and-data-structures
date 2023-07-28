// implement Stack
class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  push(item) {
    if (!item) return;
    this.items.push(item);
    this.top = item;
  }
  pop() {
    let item = null;
    if (this.items.length === 0) return null;
    if (this.items.length === 1) {
      item = this.items.pop();
      this.top = null;
    } else {
      item = this.items.pop();
      this.top = this.items[this.items.length - 1];
    }
    return item;
  }

  peek() {
    console.log(`top: ${this.top}`);
    return this.top;
  }
}

module.exports = { Stack };
