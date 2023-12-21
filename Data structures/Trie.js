class Node {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(val) {
    let node = this.root;
    for (const ch of val) {
      if (!node.children[ch]) node.children[ch] = new Node();
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  search(val) {
    let node = this.root;
    for (const ch of val) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEndOfWord;
  }

  startsWith(val) {
    let node = this.root;
    for (const ch of val) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

module.exports = { Trie };
