//Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function printRootToLeafPaths(root) {
    if (root === null) {
      return;
    }
  
    // Create an empty stack to store the nodes
    const stack = [];
  
    // Create a map to track the parent of each node
    const parentMap = new Map();
    parentMap.set(root, null);
  
    // Push the root node onto the stack
    stack.push(root);
  
    // Perform iterative depth-first traversal
    while (stack.length > 0) {
      const current = stack.pop();
  
      // If current node is a leaf node, print the root-to-leaf path
      if (current.left === null && current.right === null) {
        printPath(current, parentMap);
      }
  
      // Push the right child onto the stack if it exists
      if (current.right !== null) {
        stack.push(current.right);
        parentMap.set(current.right, current);
      }
  
      // Push the left child onto the stack if it exists
      if (current.left !== null) {
        stack.push(current.left);
        parentMap.set(current.left, current);
      }
    }
  }
  
  // Helper function to print the root-to-leaf path
  function printPath(leaf, parentMap) {
    const path = [];
    let current = leaf;
  
    // Traverse from leaf to root using parentMap
    while (current !== null) {
      path.unshift(current.data);
      current = parentMap.get(current);
    }
  
    console.log(path.join("->"));
  }
  
  // Create the binary tree
  const root = new Node(6);
  root.left = new Node(3);
  root.right = new Node(5);
  root.left.left = new Node(2);
  root.left.right = new Node(5);
  root.right.right = new Node(4);
  root.left.right.left = new Node(7);
  root.left.right.right = new Node(4);
  
  // Print all root-to-leaf paths
  printRootToLeafPaths(root);
  