function Node(value, left = undefined, right = undefined) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function BinarySearchTree(rootValue) {
  this.root = new Node(rootValue);
}

BinarySearchTree.prototype.insert = function (value) {
  let newNode = new Node(value);
  // If root is null then create a root and return
  if (!this.root) {
    this.root = newNode;
  } else {
    insertNode(this.root, newNode);
  }
};

const insertNode = (node, newNode) => {
  // Duplicate value
  if (node.value === newNode.value) {
    return;
  } else if (newNode.value < node.value) {
    // If the value is smaller
    if (!node.left) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    // If the value is greater
    if (!node.right) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
};

BinarySearchTree.prototype.find = function (value) {
  if (!this.root) return false;
  else {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return true;
      } else if (value < curr.value && curr.left) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }
};

BinarySearchTree.prototype.bfs = function () {
  let curr,
    queue = [this.root],
    output = [];
  while (queue.length > 0) {
    curr = queue.shift();
    output.push(curr.value);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return output;
};

BinarySearchTree.prototype.dfsPreOrder = function () {
  const output = [];

  const traverse = (node) => {
    output.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(this.root);
  return output;
};

BinarySearchTree.prototype.dfsPostOrder = function () {
  const output = [];

  const traverse = (node) => {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    output.push(node.value);
  };
  traverse(this.root);
  return output;
};

BinarySearchTree.prototype.dfsInOrder = function () {
  const output = [];

  const traverse = (node) => {
    node.left && traverse(node.left);
    output.push(node.value);
    node.right && traverse(node.right);
  };
  traverse(this.root);
  return output;
};

export default BinarySearchTree;
