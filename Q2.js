//A Given a binary tree, the task is to flip the binary tree towards the right direction that is clockwise. See the below examples to see the transformation.
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function flipBinaryTree(root) {
    if (root === null) return null;
  
    // If the current node is a leaf node, return it
    if (root.left === null && root.right === null) {
      return root;
    }
  
    // Recursively flip the left and right subtrees
    const flippedLeft = flipBinaryTree(root.left);
    const flippedRight = flipBinaryTree(root.right);
  
    // Flip the current node
    root.left = flippedRight;
    root.right = flippedLeft;
  
    return root;
  }
  
  // Helper function to print the flipped binary tree
  function printBinaryTree(root) {
    if (root === null) return;
  
    console.log(root.value);
    printBinaryTree(root.right);
    printBinaryTree(root.left);
  }
  
  // Create a binary tree
  const tree = new Node(1);
  tree.left = new Node(2);
  tree.right = new Node(3);
  tree.left.left = new Node(4);
  tree.left.right = new Node(5);
  
  // Flip the binary tree
  const flippedTree = flipBinaryTree(tree);
  
  // Print the flipped binary tree
  printBinaryTree(flippedTree);
  