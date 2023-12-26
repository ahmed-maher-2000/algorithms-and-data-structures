class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    while (this.heap[current] < this.heap[this._parent(current)]) {
      this._swap(current, this._parent(current));
      current = this._parent(current);
    }
  }

  extractMin() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._minHeapify(0);
    return min;
  }

  _leftChild(pos) {
    return pos * 2 + 1;
  }
  _rightChild(pos) {
    return pos * 2 + 2;
  }
  _parent(pos) {
    return Math.floor((pos - 1) / 2);
  }
  _swap(pos1, pos2) {
    [this.heap[pos1], this.heap[pos2]] = [this.heap[pos2], this.heap[pos1]];
  }
  _isLeaf(pos) {
    let size = this.heap.length;
    return pos > Math.floor(size / 2) && pos <= size;
  }
  _minHeapify(pos) {
    if (!this._isLeaf(pos)) {
      let left = this._leftChild(pos),
        right = this._rightChild(pos);
      if (
        this.heap[pos] > this.heap[left] ||
        this.heap[pos] > this.heap[right]
      ) {
        if (this.heap[left] < this.heap[right]) {
          this._swap(pos, left);
          this._minHeapify(left);
        } else {
          this._swap(pos, right);
          this._minHeapify(right);
        }
      }
    }
  }

  peekMin() {
    return this.heap[0];
  }

  // Check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  printHeap() {
    let result = "";
    for (let i = 0; i < (this.heap.length - 1) / 2; i++) {
      let parent = this.heap[i],
        rightChild = this.heap[this._rightChild(i)],
        leftChild = this.heap[this._leftChild(i)];
      result += `( ${parent} ) => ${leftChild ?? ""} , ${
        rightChild ?? ""
      } ....\n`;
    }
    return result;
  }
}


module.exports = { MinHeap };
