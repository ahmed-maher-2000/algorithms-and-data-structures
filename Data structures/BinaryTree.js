class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // Method to insert a new node with the given value into the binary tree
    if (!value) return undefined;
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (!node.left) node.left = newNode;
      else this._insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this._insertNode(node.right, newNode);
    }
  }

  search(value) {
    if (this.isEmpty()) return undefined;
    // Method to search for a node with the given value in the binary tree
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node.value === value) return node;
    return node.value > value
      ? this._searchNode(node.left, value)
      : this._searchNode(node.right, value);
  }

  getHeight() {
    // Method to calculate the height (maximum depth) of the binary tree
    if (this.isEmpty()) return 0;

    return this._getNodeHeight(this.root);
  }

  _getNodeHeight(node) {
    if (!node) return 0;
    const left = this._getNodeHeight(node.left);
    const right = this._getNodeHeight(node.right);

    return Math.max(left, right) + 1;
  }

  isEmpty() {
    // Method to check if the binary tree is empty
    return !this.root;
  }

  getSize() {
    // Method to get the total number of nodes in the binary tree
    if (this.isEmpty()) return 0;
    let size = 0;

    size += this._getNodeSize(this.root);

    return size;
  }

  _getNodeSize(node) {
    if (!node) return 0;

    let size = 1;
    size += this._getNodeSize(node.left);
    size += this._getNodeSize(node.right);

    return size;
  }

  getMinValue() {
    // Method to find the minimum value in the binary tree
    if (this.isEmpty()) return undefined;
    const minNode = this._getMinNode(this.root);
    return minNode.value;
  }

  _getMinNode(node) {
    return node.left ? this._getMinNode(node.left) : node;
  }

  getMaxValue() {
    // Method to find the maximum value in the binary tree
    if (this.isEmpty()) return undefined;

    const maxNode = this._getMaxNode(this.root);
    return maxNode.value;
  }

  _getMaxNode(node) {
    return node.right ? this._getMaxNode(node.right) : node;
  }
}

module.exports = { BinaryTree };
