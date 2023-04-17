// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootEl) {
      this.rootEl = newNode;
      return;
    }

    let current = this.rootEl;

    while (true) {
      if (current.data > data) {
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this.rootEl;

    while (true) {
      if (!current) {
        return false;
      }

      if (current.data === data) {
        return true;
      }

      if (current.data > data) {
        if (!current.left) {
          return false;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(data) {
    let current = this.rootEl;

    while (true) {
      if (!current) {
        return null;
      }
      if (current.data === data) {
        return current;
      }

      if (current.data > data) {
        if (!current.left) {
          return null;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          return null;
        } else {
          current = current.right;
        }
      }
    }
  }

  remove(data) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      }
      
      if (node.data > value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      }

      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let rightMin = node.right
      while (rightMin.left) {
        rightMin = rightMin.left;
      }
      node.data = rightMin.data;
      node.right = removeNode(node.right, rightMin.data);

      return node;
    }

    this.rootEl = removeNode(this.rootEl, data);
  }

  min() {
    let current = this.rootEl;

    while (true) {
      if (!current) {
        return null;
      }
      
      if (current.left) {
        current = current.left;       
      } else {
        return current.data;
      }
    }
  }

  max() {
    let current = this.rootEl;

    while (true) {
      if (!current) {
        return null;
      }
      
      if (current.right) {
        current = current.right;       
      } else {
        return current.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};