//Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

//Define a Node class to represent a node in the binary tree:
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
//Create a function called isSameTree that takes the preorder, inorder, and postorder arrays as input and returns a boolean value indicating whether they correspond to the same tree:
function isSameTree(preorder, inorder, postorder) {
    if (
      preorder.length === 0 ||
      inorder.length === 0 ||
      postorder.length === 0 ||
      preorder.length !== inorder.length ||
      inorder.length !== postorder.length
    ) {
      return false;
    }
  
    // Construct the tree using preorder and inorder arrays
    const root = constructTree(preorder, inorder);
  
    // Generate the postorder traversal of the constructed tree
    const generatedPostorder = generatePostorder(root);
  
    // Check if the generated postorder traversal matches the given postorder traversal
    return arraysEqual(postorder, generatedPostorder);
  }
//Implement the helper functions constructTree and generatePostorder:
function constructTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
      return null;
    }
  
    // The first element of preorder array is the root of the current subtree
    const rootValue = preorder[0];
    const root = new Node(rootValue);
  
    // Find the index of the root in the inorder array
    const rootIndex = inorder.indexOf(rootValue);
  
    // Divide the inorder array into left and right subtrees
    const leftInorder = inorder.slice(0, rootIndex);
    const rightInorder = inorder.slice(rootIndex + 1);
  
    // Divide the preorder array into left and right subtrees
    const leftPreorder = preorder.slice(1, rootIndex + 1);
    const rightPreorder = preorder.slice(rootIndex + 1);
  
    // Construct the left and right subtrees recursively
    root.left = constructTree(leftPreorder, leftInorder);
    root.right = constructTree(rightPreorder, rightInorder);
  
    return root;
  }
//generatePostorder recursively generates the postorder traversal of the binary tree:
function generatePostorder(root) {
    if (root === null) {
      return [];
    }
  
    const leftPostorder = generatePostorder(root.left);
    const rightPostorder = generatePostorder(root.right);
  
    return leftPostorder.concat(rightPostorder).concat(root.data);
  }
//Implement the helper function arraysEqual to check if two arrays are equal:
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }
//Test the solution with the given example:
const inorder = [4, 2, 5, 1, 3];
const preorder = [1, 2, 4, 5, 3];
const postorder = [4, 5, 2, 3, 1];

console.log(isSameTree(preorder, inorder, postorder)); // Output: true
