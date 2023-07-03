//Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTreeToDLL {
    constructor() {
      this.head = null;
      this.prev = null;
    }
  
    // Function to convert binary tree to DLL
    convertToDLL(root) {
      if (root === null) return;
  
      // Convert left subtree
      this.convertToDLL(root.left);
  
      // Convert current node
      if (this.head === null) {
        // If this is the first node, make it the head
        this.head = root;
      } else {
        // Otherwise, set the right pointer of the previous node to the current node
        root.left = this.prev;
        this.prev.right = root;
      }
  
      this.prev = root;
  
      // Convert right subtree
      this.convertToDLL(root.right);
    }
  
    // Function to print the DLL
    printDLL() {
      let current = this.head;
      let dll = "";
  
      while (current !== null) {
        dll += current.value + " <-> ";
        current = current.right;
      }
  
      dll += "null";
      console.log(dll);
    }
  }
  
  // Create a binary tree
  const tree = new Node(4);
  tree.left = new Node(2);
  tree.right = new Node(5);
  tree.left.left = new Node(1);
  tree.left.right = new Node(3);
  
  // Create an instance of BinaryTreeToDLL
  const converter = new BinaryTreeToDLL();
  
  // Convert the binary tree to DLL
  converter.convertToDLL(tree);
  
  // Print the DLL
  converter.printDLL();
  