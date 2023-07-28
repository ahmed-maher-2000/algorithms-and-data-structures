// implement array
class Array {
  constructor() {
    this.items = {};
    this.length = 0;
  }

  push(item) {
    this.items[this.length] = item;
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    let item = this.items[this.length - 1];
    delete this.items[this.length - 1];
    this.length--;
    return item;
  }

  insert(index, item) {
    if (index > this.length || index < 0) return null;
    if (index === this.length) {
      this.push(item);
      return;
    }

    for (let i = this.length - 1; i >= index; i--) {
      this.items[i + 1] = this.items[i];
    }
    this.items[index] = item;
    this.length++;
  }

  delete(index) {
    if (this.length === 0) return null;
    if (index >= this.length || index < 0) return null;
    if (index === this.length - 1) {
      this.pop();
      return;
    }

    delete this.items[index];
    for (let i = index + 1; i < this.length; i++) {
      this.items[i - 1] = this.items[i];
    }
    delete this.items[this.length - 1];
    this.length--;
  }

  at(index) {
    if (index >= this.length || index < 0) return null;
    return this.items[index];
  }

  printArray() {
    let arr = "";
    for (let i = 0; i < this.length; i++) {
      arr += `${this.items[i]} `;
    }
    console.log(arr);
    return arr;
  }
}

module.exports = { Array };
