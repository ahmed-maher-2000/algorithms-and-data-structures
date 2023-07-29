const { Stack } = require("./Stack");
const { Queue } = require("./Queue");

class Graph {
  constructor() {
    this.items = {};
  }

  addVertex(vertex) {
    if (!vertex) return undefined;
    this.items[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2) return undefined;
    if (!this.isVertexExist(vertex1) || !this.isVertexExist(vertex2))
      return undefined;
    this.items[vertex1].push(vertex2);
  }

  removeVertex(vertex) {
    if (!vertex) return undefined;
    if (!this.isVertexExist(vertex)) return undefined;
    for (let v in this.items) {
      const vertexIndex = this.items[v].findIndex((v) => v === vertex);
      if (vertexIndex >= 0) {
        this.items[v].splice(vertexIndex, 1);
      }
    }
    delete this.items[vertex];
  }

  removeEdge(vertex1, vertex2) {
    if (!vertex1 || !vertex2) return undefined;
    if (!this.isVertexExist(vertex1) || !this.isVertexExist(vertex2))
      return undefined;
    const vertex1Index = this.items[vertex2].findIndex((v) => v === vertex1);
    const vertex2Index = this.items[vertex1].findIndex((v) => v === vertex2);

    if (vertex1Index >= 0) this.items[vertex2].splice(vertex1Index, 1);
    if (vertex2Index >= 0) this.items[vertex1].splice(vertex2Index, 1);
  }

  getVertices() {
    return Object.keys(this.items);
  }

  getEdges(vertex) {
    return this.items[vertex];
  }

  isVertexExist(vertex) {
    return vertex in this.items;
  }

  isEdgeExist(vertex1, vertex2) {
    const vertex1Index = this.items[vertex2].findIndex((v) => v === vertex1);
    const vertex2Index = this.items[vertex1].findIndex((v) => v === vertex2);
    return vertex1Index >= 0 || vertex2Index >= 0;
  }

  getAdjacentVertices(vertex) {
    return this.items[vertex];
  }

  getVertexCount(vertex) {
    return this.items[vertex].length;
  }

  getEdgeCount() {
    let sum = 0;
    Object.keys(this.items).forEach((v) => {
      sum += this.items[v].length;
    });
    return sum;
  }

  dfsTraversal(start) {
    const path = [];
    const stack = new Stack();
    stack.push(start);
    console.log(stack.length);
    while (stack.length > 0) {
      const current = stack.pop();
      path.push(current);
      for (let v of this.items[current]) {
        if (!path.includes(v)) stack.push(v);
      }
    }

    return path;
  }

  bfsTraversal(start) {
    const path = [];
    const queue = new Queue();
    queue.enqueue(start);

    while (queue.length > 0) {
      const current = queue.dequeue();
      if (!path.includes(current)) path.push(current);
      for (let v of this.items[current]) {
        queue.enqueue(v);
      }
    }

    return path;
  }
}

module.exports = { Graph };
