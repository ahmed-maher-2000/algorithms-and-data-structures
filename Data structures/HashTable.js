// implement Hash Table

class HashTable {
  constructor() {
    this.items = [];
    this.keys = [];
    this.length = 0;
  }

  get(key) {
    if (!key) return null;
    return this.items[this._hash(key)];
  }
  set(key, value) {
    if (!key || !value) return null;
    let index = this._hash(key.trim());
    this.items[index] = value;
    this.keys[index] = key.trim();
    this.length++;
    return this.items[index];
  }

  del(key) {
    if (!key) return null;
    let index = this._hash(key);
    this.items[index] = undefined;
    this.keys[index] = undefined;
    this.length--;
  }

  getValues() {
    let values = this.items.filter((item) => item);
    console.log(values);
    return values;
  }

  getKeys() {
    let keys = this.keys.filter((item) => item);
    console.log(keys);
    return keys;
  }

  _hash(key) {
    key = key.toString().trim();
    let hashed = 0;
    for (let k of key) {
      hashed += k.charCodeAt();
    }
    return hashed;
  }

  printHash() {
    let keys = this.getKeys();
    let hash = "{";
    for (let key of keys) {
      hash += ` ${key}: ${this.items[this._hash(key)]},`;
    }
    hash = hash.slice(0, hash.length - 1) + " }";
    console.log(hash);
    return hash;
  }
}

module.exports = { HashTable };
